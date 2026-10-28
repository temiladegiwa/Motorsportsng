'use client';
import { useEffect, useState } from 'react';
import { S as S0, C as C0, P, TM } from '@/lib/data';

const SL = [['f', 'F1'], ['m', 'MotoGP'], ['i', 'IndyCar']];

function Photo({ n }) {
  const [bad, setBad] = useState(false);
  const w = n.split(' ');
  const ini = w[0].charAt(0) + w[w.length - 1].charAt(0);
  const u = P[n];
  return (
    <span className="ph">
      {ini}
      {u && !bad && (
        <img className={u.indexOf('f1-fansite') > -1 ? 'f1' : ''} src={u} alt={n} loading="lazy" referrerPolicy="no-referrer" onError={() => setBad(true)} />
      )}
    </span>
  );
}

function Badge({ n }) {
  const l = n.toLowerCase();
  const t = TM.find((a) => l.indexOf(a[0]) > -1);
  return (
    <span className="ph tm" style={{ background: t ? t[2] : '#1c3a2d', color: t ? t[3] : '#dff0dc' }}>
      {t ? t[1] : n.slice(0, 3).toUpperCase()}
    </span>
  );
}

export default function Standings() {
  const [S, setS] = useState(S0);
  const [C, setC] = useState(C0);
  const [sc, setSc] = useState('f');
  const [md, setMd] = useState('d');

  useEffect(() => {
    const J = 'https://api.jolpi.ca/ergast/f1/current/';
    Promise.all([
      fetch(J + 'driverstandings.json').then((r) => r.json()),
      fetch(J + 'constructorstandings.json').then((r) => r.json()),
    ]).then((a) => {
      const dl = a[0].MRData.StandingsTable.StandingsLists[0];
      const cl = a[1].MRData.StandingsTable.StandingsLists[0];
      if (!dl || !cl) return;
      const kn = {};
      S0.f[1].forEach((r) => { kn[r[0].split(' ').pop().toLowerCase()] = r[0]; });
      setS((s) => ({
        ...s,
        f: ['Live · after round ' + dl.round, dl.DriverStandings.slice(0, 10).map((d) => {
          const fn = d.Driver.familyName;
          const nm = kn[fn.toLowerCase()] || d.Driver.givenName + ' ' + fn;
          const c = d.Constructors;
          return [nm, c.length ? c[c.length - 1].name : '', +d.points];
        })],
      }));
      setC((c) => ({
        ...c,
        f: ['Live · constructors after round ' + cl.round, cl.ConstructorStandings.slice(0, 10).map((x) => [x.Constructor.name, x.wins + ' wins', +x.points])],
      }));
    }).catch(() => {});
  }, []);

  const D = md === 'd' ? S[sc] : C[sc];
  return (
    <>
      <div className="pills" role="group" aria-label="Drivers or constructors">
        {[['d', 'Drivers'], ['c', 'Constructors']].map((m) => (
          <button key={m[0]} type="button" aria-pressed={md === m[0]} onClick={() => setMd(m[0])}>{m[1]}</button>
        ))}
      </div>
      <div className="pills" role="group" aria-label="Choose series">
        {SL.map((s) => (
          <button key={s[0]} type="button" aria-pressed={sc === s[0]} onClick={() => setSc(s[0])}>{s[1]}</button>
        ))}
      </div>
      <p className="snote">{D[0]}</p>
      <table className="std">
        <tbody>
          {D[1].map((r, n) => (
            <tr key={sc + md + r[0]}>
              <td>{n + 1}</td>
              <td className="pc">{md === 'd' ? <Photo n={r[0]} /> : <Badge n={r[0]} />}</td>
              <td>{r[0]}<small>{r[1]}</small></td>
              <td>{typeof r[2] === 'number' ? r[2] + ' pts' : r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="snote" style={{ marginTop: 14 }}>F1 updates live when it can connect. MotoGP and IndyCar are updated by hand (last on 24 Oct 2026).</p>
    </>
  );
}
