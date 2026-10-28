'use client';
import { useState } from 'react';
import { P } from '@/lib/data';

export default function Photo({ n }) {
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
