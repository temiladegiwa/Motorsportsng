'use client';
import { useEffect, useState } from 'react';

const KEY = 'msng_profile';

export default function ProfileForm() {
  const [saved, setSaved] = useState(null);
  const [nick, setNick] = useState('');
  const [ser, setSer] = useState('');
  const [fav, setFav] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    try {
      const p = JSON.parse(localStorage.getItem(KEY));
      if (p) { setSaved(p); setNick(p.nick || ''); setSer(p.ser || ''); setFav(p.fav || ''); }
    } catch (e) {}
  }, []);

  const store = (v) => {
    try { v ? localStorage.setItem(KEY, JSON.stringify(v)) : localStorage.removeItem(KEY); } catch (e) {}
    window.dispatchEvent(new Event('msng-profile'));
  };

  return (
    <>
      <div className="pass">
        <div className="av">{saved ? saved.nick.charAt(0).toUpperCase() : '?'}</div>
        <div>
          <div className="pn">{saved ? saved.nick : 'Your nickname'}</div>
          <div className="ps">{saved && saved.ser ? saved.ser + ' fan' : ''}</div>
          <div className="pf">{saved && saved.fav ? 'Favourite: ' + saved.fav : ''}</div>
        </div>
      </div>
      <h2>Your profile</h2>
      <p>{saved ? 'Signed in as ' + saved.nick + '.' : 'Pick a nickname to sign in.'}</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        const n = nick.trim();
        if (!n) return;
        const p = { nick: n, fav: fav.trim(), ser };
        setSaved(p); store(p);
        setMsg('Profile saved. Screenshot your Paddock Pass to share it.');
      }}>
        <label htmlFor="nick">Nickname</label>
        <input id="nick" maxLength={20} required autoComplete="nickname" value={nick} onChange={(e) => setNick(e.target.value)} />
        <label htmlFor="ser">Favourite series</label>
        <select id="ser" value={ser} onChange={(e) => setSer(e.target.value)}>
          <option value="">Pick one</option>
          <option>Formula 1</option>
          <option>MotoGP</option>
          <option>IndyCar</option>
        </select>
        <label htmlFor="fav">Favourite driver, rider or team</label>
        <input id="fav" maxLength={30} value={fav} onChange={(e) => setFav(e.target.value)} />
        <button className="btn" type="submit">Save profile</button>
        {saved && (
          <button className="btn out" type="button" onClick={() => {
            setSaved(null); setNick(''); setSer(''); setFav(''); store(null); setMsg('You’re signed out.');
          }}>Sign out</button>
        )}
      </form>
      <p role="status">{msg}</p>
      <p className="note">Your profile is saved on this device only. Signing in on another phone or browser starts a new profile.</p>
    </>
  );
}
