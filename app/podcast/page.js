import PodcastCard from '@/components/PodcastCard';
export const metadata = { title: 'Grid Pod Africa | MotorSports NG' };
export default function Page() {
  return (
    <main className="page">
      <section id="podcast"><PodcastCard /></section>
    </main>
  );
}
