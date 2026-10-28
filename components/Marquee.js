export default function Marquee() {
  const t = 'FORMULA 1 ◆ MOTOGP ◆ INDYCAR ◆ GRID POD AFRICA ◆ ';
  const s = t + t;
  return (
    <div className="mq" aria-hidden="true">
      <div><span>{s}</span><span>{s}</span></div>
    </div>
  );
}
