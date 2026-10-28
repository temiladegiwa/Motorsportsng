'use client';
import { useEffect, useState } from 'react';
import { upcoming } from '@/lib/utils';

export default function NextUp() {
  const [txt, setTxt] = useState('');
  useEffect(() => {
    const t = new Date(); t.setHours(0, 0, 0, 0);
    const n = upcoming().filter((o) => o.x[3] !== 'c')[0];
    if (!n) return;
    const dd = Math.round((n.d - t) / 864e5);
    setTxt('Next up · ' + n.x[1] + ' · ' + (dd === 0 ? 'Today' : dd === 1 ? 'Tomorrow' : 'in ' + dd + ' days'));
  }, []);
  if (!txt) return null;
  return <div className="nx"><i></i>{txt}</div>;
}
