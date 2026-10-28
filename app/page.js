import Link from 'next/link';
import NextUp from '@/components/NextUp';
import Marquee from '@/components/Marquee';
import WeekGrid from '@/components/WeekGrid';
import Snapshot from '@/components/Snapshot';
import UpcomingList from '@/components/UpcomingList';
import NewsTeaser from '@/components/NewsTeaser';
import PodcastCard from '@/components/PodcastCard';
import JoinForm from '@/components/JoinForm';
import { WA } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <header className="hero">
        <div>
          <NextUp />
          <h1>Motorsport meets <span>YOU</span></h1>
          <div className="ser"><span>Formula 1</span><span>MotoGP</span><span>IndyCar</span></div>
          <p>Nigeria’s home for three series. Fans, drivers, riders and mechanics in one paddock, online and at the track.</p>
          <a className="btn" href={WA} target="_blank" rel="noopener">Join the grid</a>
          <Link className="btn ol" href="/calendar">Upcoming events</Link>
        </div>
      </header>
      <Marquee />
      <WeekGrid />
      <Snapshot />
      <UpcomingList />
      <section id="podcast"><PodcastCard /></section>
      <NewsTeaser />
      <section id="paddock">
        <div className="three">
          <div><h3>Formula 1</h3><p>Live watch parties, technical breakdowns and Spaces.</p>
            <details><summary>New to F1?</summary><p>2026 has 11 teams and 22 drivers. A race weekend has practice, qualifying and the Sunday race, with a short sprint race on some weekends. The top 10 score points.</p></details></div>
          <div><h3>MotoGP</h3><p>Two-wheel race chats, rider craft and local bike meetups.</p>
            <details><summary>New to MotoGP?</summary><p>Riders race purpose-built prototype bikes from five manufacturers: Ducati, Aprilia, KTM, Honda and Yamaha. Saturday has a sprint race at about half distance, and Sunday has the full Grand Prix.</p></details></div>
          <div><h3>IndyCar</h3><p>Oval and street course watch-alongs, Indy 500 specials and pure racing debate.</p>
            <details><summary>New to IndyCar?</summary><p>Open-wheel cars race on ovals, street circuits and road courses. Every team uses the same Dallara chassis with a Honda or Chevrolet engine. The Indianapolis 500 is the biggest race of the year.</p></details></div>
        </div>
        <div className="com">
          <img src="/garage.jpg" alt="Pit crew in green gathered around a race car" />
          <div>
            <h2>Your place in the paddock</h2>
            <ul>
              <li><h3>Talk race weekends</h3><p><b>Twitter Spaces every race weekend.</b> Join our live audio Space to talk qualifying, the race and the fallout across F1, MotoGP and IndyCar.</p></li>
              <li><h3>Meet in person</h3><p>Karting nights, watch parties and track days near you.</p></li>
              <li><h3>Learn the craft</h3><p>Ask drivers and mechanics how it’s done, from first lap to setup.</p></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="join" id="join">
        <h2>Take your spot on the grid</h2>
        <JoinForm />
      </section>
    </>
  );
}
