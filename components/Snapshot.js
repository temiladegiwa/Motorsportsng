'use client';
import Link from 'next/link';
import useStandings from '@/lib/useStandings';
import Photo from './Photo';

const L = [['f', 'Formula 1'], ['m', 'MotoGP'], ['i', 'IndyCar']];

export default function Snapshot() {
  const { S } = useStandings();
  return (
    <section className="cal" id="snapshot">
      <h2>Championship leaders</h2>
      <div className="snap">
        {L.map((s) => (
          <div className={'sn c-' + s[0]} key={s[0]}>
            <h3>{s[1]}</h3>
            <small className="snote">{S[s[0]][0]}</small>
            {S[s[0]][1].slice(0, 3).map((r, i) => (
              <div className="sr" key={r[0]}>
                <span className="rk">{i + 1}</span>
                <Photo n={r[0]} />
                <div>{r[0]}<small>{r[1]}</small></div>
                <span className="pt">{r[2]} pts</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Link className="more" href="/standings">Full standings and constructors →</Link>
    </section>
  );
}
