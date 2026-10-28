import Standings from '@/components/Standings';
export const metadata = { title: 'Championship standings | MotorSports NG' };
export default function Page() {
  return (
    <main className="page">
      <section className="cal" id="standings">
        <h2>Championship standings</h2>
        <Standings />
      </section>
    </main>
  );
}
