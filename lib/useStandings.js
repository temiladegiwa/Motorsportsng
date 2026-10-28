'use client';
import { useEffect, useState } from 'react';
import { S as S0, C as C0 } from './data';

export default function useStandings() {
  const [S, setS] = useState(S0);
  const [C, setC] = useState(C0);
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
  return { S, C };
}
