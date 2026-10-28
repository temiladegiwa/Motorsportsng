import { CHAMPS, NEWS } from '@/lib/news';
export const metadata = { title: 'Road to F1 | MotorSports NG' };
export default function Page() {
  return (
    <main className="page">
      <section id="feeder">
        <h2>Road to F1</h2>
        <p className="snote" style={{ marginBottom: 18 }}>Formula 2 is the last step before F1. Here are its recent champions and this season’s title fight.</p>
        <div className="champs">
          {CHAMPS.map((c) => (
            <div className="champ" key={c[0]}>
              <div className="yr">{c[0]}</div>
              <b>{c[1]}</b>
              <small>{c[2]}{c[3] ? <><br />{c[3]}</> : null}</small>
            </div>
          ))}
        </div>
        <div className="news">
          {NEWS.map((n) => (
            <article className="nw" key={n[1]}>
              <time>{n[0]}</time>
              <h3>{n[1]}</h3>
              <p>{n[2]}</p>
              <a href={n[3]} target="_blank" rel="noopener">Read more on {n[4]} ↗</a>
            </article>
          ))}
        </div>
        <p className="snote" style={{ marginTop: 14 }}>Latest F2 standings I could find are from Baku on 26 Sep 2026. More feeder series coming soon.</p>
      </section>
    </main>
  );
}
