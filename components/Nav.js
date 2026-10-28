'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { WA } from '@/lib/utils';

export default function Nav() {
  const [nick, setNick] = useState('');
  useEffect(() => {
    const read = () => {
      try { const p = JSON.parse(localStorage.getItem('msng_profile')); setNick(p && p.nick ? p.nick : ''); } catch (e) { setNick(''); }
    };
    read();
    window.addEventListener('msng-profile', read);
    return () => window.removeEventListener('msng-profile', read);
  }, []);
  return (
    <nav>
      <Link className="brand" href="/">
        <img src="/logo.jpg" alt="MotorSports NG" />
        <span>3 disciplines 1 paddock</span>
      </Link>
      <div>
        <Link className="hm" href="/calendar">Races</Link>
        <Link className="hm" href="/podcast">Podcast</Link>
        <Link className="hm" href="/standings">Standings</Link>
        <Link className="hm" href="/road-to-f1">Road to F1</Link>
        <Link id="navp" href="/profile">{nick || 'Sign in'}</Link>
        <a className="btn" href={WA} target="_blank" rel="noopener" style={{ padding: '8px 20px', fontSize: 14, marginLeft: 22, color: 'var(--deep)' }}>Join</a>
      </div>
    </nav>
  );
}
