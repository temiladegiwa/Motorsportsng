'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { upcoming } from '@/lib/utils';

export default function UpcomingList() {
  const [l, setL] = useState([]);
  useEffect(() => { setL(upcoming().filter((o) => o.x[0].indexOf('THU') !== 0).slice(0, 5)); }, []);
  if (!l.length) return null;
  return (
    <section id="next">
      <h2>Next on the calendar</h2>
      <div>
        {l.map((o) => (
          <div className="race" key={o.x[1]}>
            <div className="date" dangerouslySetInnerHTML={{ __html: o.x[0] }} />
            <div><b>{o.x[1]}</b><small>{o.x[2]}</small></div>
            <span className={'tag t-' + o.x[3]}>{o.x[4]}</span>
          </div>
        ))}
      </div>
      <Link className="more" href="/calendar">Full calendar →</Link>
    </section>
  );
}
