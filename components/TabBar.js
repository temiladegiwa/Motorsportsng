'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const T = [['/', 'Home'], ['/calendar', 'Races'], ['/standings', 'Standings'], ['/road-to-f1', 'Road to F1'], ['/podcast', 'Podcast']];

export default function TabBar() {
  const p = usePathname();
  return (
    <div className="tabs" role="navigation" aria-label="Main">
      {T.map((t) => (
        <Link key={t[0]} href={t[0]} className={p === t[0] ? 'on' : ''}>{t[1]}</Link>
      ))}
    </div>
  );
}
