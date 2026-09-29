import { useState } from 'react';
import { github, type Lang } from '../../data/workspace';

export default function ContactLinks({ lang }: { lang: Lang }) {
  const uk = lang === 'uk';
  const [status, setStatus] = useState('');
  const email = 'aa20062019aa@gmail.com';
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus(uk ? 'Адресу скопійовано' : 'Email address copied');
    } catch {
      setStatus(
        uk ? `Скопіюй адресу: ${email}` : `Copy this address: ${email}`,
      );
    }
  }
  return (
    <div className="contact-actions">
      <div className="social-buttons">
        <a href={`mailto:${email}`} title={email}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          <span>
            Email<small>{uk ? 'Відкрити пошту' : 'Open mail app'}</small>
          </span>
        </a>
        <a href="https://t.me/berez0vskyi" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m21 3-4 18-6-5-4 3 1-6L3 11 21 3Z" />
            <path d="m8 13 9-6-6 9" />
          </svg>
          <span>
            Telegram<small>@berez0vskyi</small>
          </span>
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .2-2-1-3 4 0 6-2 6-5 0-2-1-3-2-4 0-1 0-2-.3-3-2 0-3 1-4 2a14 14 0 0 0-4 0C8 4 7 3 5 3c-.4 1-.5 2 0 3-1 1-2 2-2 4 0 3 2 5 6 5-1 1-1 2-1 3v4" />
          </svg>
          <span>
            GitHub<small>{uk ? 'Код і проєкти' : 'Code & projects'}</small>
          </span>
        </a>
      </div>
      <button className="copy-email" onClick={copy}>
        {email} <span>{uk ? 'Копіювати' : 'Copy'}</span>
      </button>
      <span className="copy-status" role="status">
        {status}
      </span>
    </div>
  );
}
