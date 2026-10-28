'use client';
import { useState } from 'react';
import { WA } from '@/lib/utils';

export default function JoinForm() {
  const [done, setDone] = useState(false);
  return (
    <>
      <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
        <input type="email" required placeholder="Your email" aria-label="Your email" />
        <button className="btn" type="submit">Join the community</button>
      </form>
      <p id="ok" role="status">
        {done && (<>Thanks! The fastest way in is our <a href={WA} target="_blank" rel="noopener" style={{ color: 'var(--deep)' }}>WhatsApp group</a>.</>)}
      </p>
      <div className="soc">
        <a href={WA} target="_blank" rel="noopener">WhatsApp</a>
        <a href="https://www.instagram.com/motorsportsng" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.tiktok.com/@motorsportsng" target="_blank" rel="noopener">TikTok</a>
        <a href="https://x.com/motorsportsng" target="_blank" rel="noopener">X</a>
      </div>
    </>
  );
}
