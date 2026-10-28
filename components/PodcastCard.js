import { POD } from '@/lib/data';

export default function PodcastCard() {
  const names = { spotify: 'Spotify', apple: 'Apple Podcasts', youtube: 'YouTube' };
  const links = Object.keys(POD).filter((k) => POD[k]);
  return (
    <div className="pc2">
      <img src="/gridpod.jpg" alt="Grid Pod Africa logo" />
      <div>
        <h2>Grid Pod Africa</h2>
        <p>The MotorSports NG podcast. New episode every Thursday.</p>
        <div className="pl">
          {links.length ? links.map((k) => (
            <a key={k} className="btn" href={POD[k]} target="_blank" rel="noopener">{names[k]}</a>
          )) : <small className="snote">Listen links coming soon.</small>}
        </div>
      </div>
    </div>
  );
}
