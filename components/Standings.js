'use client';
import { useState } from 'react';
import { TM } from '@/lib/data';
import useStandings from '@/lib/useStandings';
import Photo from './Photo';

const SL = [['f', 'F1'], ['m', 'MotoGP'], ['i', 'IndyCar']];

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
  const { S, C } = useStandings();
  const [sc, setSc] = useState('f');
  const [md, setMd] = useState('d');
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
