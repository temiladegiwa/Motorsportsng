import ProfileForm from '@/components/ProfileForm';
export const metadata = { title: 'Your Paddock Pass | MotorSports NG' };
export default function Page() {
  return (
    <main className="page">
      <section id="profile">
        <ProfileForm />
      </section>
    </main>
  );
}
