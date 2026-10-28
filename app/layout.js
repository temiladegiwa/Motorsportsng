import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import TabBar from '@/components/TabBar';

export const metadata = {
  title: 'MotorSports NG — Nigeria’s Home for F1, MotoGP & IndyCar',
  description: 'Fans, drivers, riders and mechanics in one paddock. Follow Formula 1, MotoGP and IndyCar in Nigeria with watch parties, podcast sessions and track events.',
  openGraph: {
    title: 'MotorSports NG — Formula 1, MotoGP & IndyCar in Nigeria',
    description: 'Fans, drivers, riders and mechanics in one paddock. Follow every lap, debate every race and join Nigeria’s racing community.',
    type: 'website',
  },
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <TabBar />
      </body>
    </html>
  );
}
