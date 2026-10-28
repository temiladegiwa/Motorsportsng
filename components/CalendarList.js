'use client';
import { useState } from 'react';
import { E } from '@/lib/data';

const F = [['all', 'All'], ['f', 'F1'], ['m', 'MotoGP'], ['i', 'IndyCar'], ['c', 'Community']];

export default function CalendarList() {
  const [cur, setCur] = useState('all');
  return (
    <>
      <div className="pills" role="group" aria-label="Filter events">
        {F.map((f) => (
          <button key={f[0]} type="button" aria-pressed={cur === f[0]} onClick={() => setCur(f[0])}>{f[1]}</button>
        ))}
      </div>
      <div>
        {E.filter((x) => cur === 'all' || x[3] === cur).map((x) => (
          <div className="race" key={x[1]}>
            <div className="date" dangerouslySetInnerHTML={{ __html: x[0] }} />
            {x[1] === 'Grid Pod Africa' ? (
              <div className="pod">
                <img src="/gridpod.jpg" alt="Grid Pod Africa logo" />
                <span><b>{x[1]}</b><small>{x[2]}</small></span>
              </div>
            ) : (
              <div><b>{x[1]}</b><small>{x[2]}</small></div>
            )}
            <span className={'tag t-' + x[3]}>{x[4]}</span>
          </div>
        ))}
      </div>
      <p className="snote" style={{ marginTop: 16 }}>IndyCar is in its off-season until March 2027. Dates can change, so check each series for session times.</p>
    </>
  );
}
