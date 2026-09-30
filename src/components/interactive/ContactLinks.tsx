import { useState } from 'react';
import { github, type Lang } from '../../data/workspace';

export default function ContactLinks({ lang }: { lang: Lang }) {
  const uk = lang === 'uk';
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);
  const email = 'aa20062019aa@gmail.com';
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
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
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
          target="_blank"
          rel="noreferrer"
          title={uk ? 'Написати лист у Gmail' : 'Compose an email in Gmail'}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          <span>
            Email<small>{uk ? 'Написати у Gmail' : 'Compose in Gmail'}</small>
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
        <a
          href="https://www.linkedin.com/in/andrew-berezovskyi-83131a397/"
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M7.5 10v7M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
            <circle cx="7.5" cy="7" r=".6" fill="currentColor" />
          </svg>
          <span>
            LinkedIn
            <small>{uk ? 'Професійний профіль' : 'Let’s connect'}</small>
          </span>
        </a>
      </div>
      <button
        className="copy-email"
        onClick={copy}
        aria-label={uk ? `Копіювати email: ${email}` : `Copy email: ${email}`}
        title={uk ? 'Копіювати адресу' : 'Copy email address'}
      >
        {email}
        <svg viewBox="0 0 24 24" aria-hidden="true">
          {copied ? (
            <path d="m5 12 4 4L19 6" />
          ) : (
            <>
              <rect x="8" y="8" width="12" height="13" rx="2" />
              <path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
            </>
          )}
        </svg>
      </button>
      <span className="copy-status" role="status">
        {status}
      </span>
    </div>
  );
}
