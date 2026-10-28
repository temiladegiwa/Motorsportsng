import Link from 'next/link';
import { NEWS, CHAMPS } from '@/lib/news';

export default function NewsTeaser() {
  const c = CHAMPS[0];
  return (
    <section className="cal" id="news">
      <h2>Road to F1</h2>
      <p className="snote" style={{ marginBottom: 18 }}>Latest F2 champion: {c[1]} ({c[2]}, {c[0]}).</p>
      <div className="news">
        {NEWS.slice(0, 2).map((n) => (
          <article className="nw" key={n[1]}>
            <time>{n[0]}</time>
            <h3>{n[1]}</h3>
            <p>{n[2]}</p>
            <a href={n[3]} target="_blank" rel="noopener">Read more on {n[4]} ↗</a>
          </article>
        ))}
      </div>
      <Link className="more" href="/road-to-f1">More news and F2 champions →</Link>
    </section>
  );
}
