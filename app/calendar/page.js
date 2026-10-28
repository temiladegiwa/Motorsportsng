import CalendarList from '@/components/CalendarList';
export const metadata = { title: 'Race calendar | MotorSports NG' };
export default function Page() {
  return (
    <main className="page">
      <section className="cal" id="races">
        <h2>Next on the calendar</h2>
        <CalendarList />
      </section>
    </main>
  );
}
