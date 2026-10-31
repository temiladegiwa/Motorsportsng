import { TICKETS } from '@/lib/data';
import { WA } from '@/lib/utils';

export default function PartyTickets() {
  return (
    <section id="tickets">
      <h2>Agenda Party tickets</h2>
      <p className="snote" style={{ marginBottom: 18 }}>MotorSports NG F1 Agenda Party · 5 December</p>
      <div className="tiers">
        {TICKETS.tiers.map((t) => (
          <div className="tier" key={t.name}>
            <small>{t.name}</small>
            <div className="price">₦{t.price}</div>
            <a className="btn" href={TICKETS.url || WA} target="_blank" rel="noopener">Get {t.name} ticket</a>
          </div>
        ))}
      </div>
      {!TICKETS.url && (
        <p className="snote" style={{ marginTop: 14 }}>Payment link coming soon. Join our WhatsApp group to be the first to know.</p>
      )}
    </section>
  );
}
