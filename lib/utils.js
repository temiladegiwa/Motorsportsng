import { E } from './data';
export const WA = 'https://chat.whatsapp.com/DTiJHX3C6P25qhe08ciNf8?s=cl&p=i&mlu=4&ilr=4';
const M = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
export function eventDate(x) {
  const t = new Date(); t.setHours(0, 0, 0, 0);
  if (x[0].indexOf('THU') === 0) { const d = new Date(t); d.setDate(d.getDate() + ((4 - d.getDay() + 7) % 7)); return d; }
  const m = x[0].match(/^(\d+) (\w+)(?:<small>(\d+))?/);
  if (!m) return null;
  return new Date(+(m[3] || 2026), M.indexOf(m[2]), +m[1]);
}
export function sf(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { timeZone: 'Africa/Lagos', weekday: 'short', day: 'numeric', month: 'short' }) + ' · ' + d.toLocaleTimeString('en-GB', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit' }) + ' WAT';
}
export function upcoming() {
  const t = new Date(); t.setHours(0, 0, 0, 0);
  return E.map((x) => ({ x, d: eventDate(x) })).filter((o) => o.d && o.d >= t).sort((a, b) => a.d - b.d);
}
