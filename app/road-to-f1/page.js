export const metadata = { title: 'Road to F1 | MotorSports NG' };
const CHAMPS = [["2025", "Leonardo Fornaroli", "Invicta Racing", "Rookie champion, title sealed with a round to spare"], ["2024", "Gabriel Bortoleto", "Invicta Racing", "Now racing in F1 for Audi"], ["2023", "Théo Pourchaire", "ART Grand Prix", ""], ["2022", "Felipe Drugovich", "MP Motorsport", ""], ["2021", "Oscar Piastri", "Prema Racing", "Now racing in F1 for McLaren"]];
const NEWS = [["26 Sep 2026", "Câmara takes the F2 lead at Baku", "Invicta’s Rafael Câmara moved to the top of the Formula 2 standings after the Baku feature races, on 207 points. Campos driver Nikola Tsolov is seven behind on 200, and Campos still lead the teams’ table, 333 to 297. Câmara won F3 in 2025, so he is chasing the same double as Fornaroli.", "https://racingnews365.com/2026-f2-championship-standings-after-baku-feature-race-2", "RacingNews365"], ["2026 season", "A title race that keeps changing hands", "Joshua Dürksen led early after the Melbourne sprint, then Tsolov took over after the feature race. By Austria, MP Motorsport’s Gabriele Minì was on 108 points, just two clear of Tsolov.", "https://www.pitdebrief.com/?p=128141", "Pit Debrief"], ["30 Nov 2025", "Fornaroli joins the F3 and F2 double club", "Leonardo Fornaroli clinched the 2025 F2 title in Qatar with a round to spare. After winning F3 in 2024, he became the fifth driver to take both titles back to back, after Piastri, Russell, Leclerc and Bortoleto.", "https://www.the-race.com/junior/f2-2025-title-leonardo-fornaroli-champion-qatar-penalty-uncertainty/", "The Race"]];
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
