'use client';
import { useEffect, useState } from 'react';
import { SES } from '@/lib/data';
import { upcoming, sf } from '@/lib/utils';

export default function WeekGrid() {
  const [w, setW] = useState(null);
  const [open, setOpen] = useState({});
  useEffect(() => {
    const t = new Date(); t.setHours(0, 0, 0, 0);
    const L = upcoming();
    let list = L.filter((o) => o.d - t < 8 * 864e5);
    if (!list.length) list = L.slice(0, 3);
    setW(list);
  }, []);
  if (!w || !w.length) return null;
  const now = Date.now();
  return (
    <section id="week">
      <h2>This week across the grid</h2>
      <div className="wk">
        {w.map((o) => {
          const x = o.x;
          const p = x[0].indexOf('THU') === 0;
          const ds = o.d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
          let rows = [], n = 0, hint = '';
          if (!p) {
            const s = SES[x[1]];
            if (s) {
              let nxt = true;
              rows = s.map((z) => {
                const dn = now >= Date.parse(z[1]) + z[2] * 6e4;
                if (dn) n++;
                const c = dn ? 'done' : nxt ? 'nxt' : '';
                if (!dn) nxt = false;
                return { l: z[0], t: sf(z[1]), c, dn };
              });
              hint = n + ' of ' + s.length + ' sessions done · tap for times';
            } else {
              const d2 = o.d.getTime() + 864e5 <= now;
              rows = [{ l: 'Race day', t: ds + ' · session times coming soon', c: d2 ? 'done' : 'nxt', dn: d2 }];
              hint = d2 ? 'Done · tap for details' : 'Tap for details';
            }
          }
          const k = x[1];
          const isOpen = !!open[k];
          const toggle = () => setOpen((s) => ({ ...s, [k]: !s[k] }));
          const btn = p ? {} : {
            role: 'button', tabIndex: 0, 'aria-expanded': isOpen, onClick: toggle,
            onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } },
          };
          return (
            <div key={k} className={'wc c-' + x[3] + (isOpen ? ' open' : '')} {...btn}>
              <small>{p ? 'Every Thursday' : ds}</small>
              <b>{x[1]}</b>
              <span>{x[4]}</span>
              {hint && (
                <>
                  <em className="hint">{hint}</em>
                  <ul className="ses">
                    {rows.map((r, i) => (
                      <li key={i} className={r.c}><i>{r.dn ? '✓' : ''}</i><b>{r.l}</b><span>{r.t}</span></li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
