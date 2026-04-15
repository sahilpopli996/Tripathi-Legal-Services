import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      <a
        href="tel:09266796902"
        className="w-11 h-11 bg-white border border-stone-200 rounded-full shadow-md flex items-center justify-center text-stone-700 hover:bg-amber-800 hover:text-white hover:border-amber-800 transition-all duration-200 group"
        aria-label="Call us"
        title="Call: 0-9266796902"
      >
        <Phone size={16} strokeWidth={1.5} />
      </a>

      <a
        href="https://wa.me/919266796902"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 bg-white border border-stone-200 rounded-full shadow-md flex items-center justify-center hover:scale-105 transition-all duration-200"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      <a
        href="mailto:advapoorvat@gmail.com"
        className="w-11 h-11 bg-white border border-stone-200 rounded-full shadow-md flex items-center justify-center hover:scale-105 transition-all duration-200"
        aria-label="Email us"
        title="Email: advapoorvat@gmail.com"
      >
        <GmailIcon />
      </a>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#25D366" />
      <path
        d="M18 8C12.477 8 8 12.477 8 18c0 1.9.52 3.674 1.43 5.2L8 28l4.97-1.4A10 10 0 0018 28c5.523 0 10-4.477 10-10S23.523 8 18 8zm5.07 13.77c-.22.62-1.28 1.19-1.77 1.24-.45.05-.86.22-2.9-.6-2.45-1-4-3.52-4.12-3.68-.12-.16-.96-1.28-.96-2.44 0-1.16.61-1.73.83-1.97.22-.24.48-.3.64-.3l.46.01c.15.01.35-.06.54.41.2.49.68 1.65.74 1.77.06.12.1.26.02.42-.08.16-.12.26-.24.4l-.36.42c-.12.12-.24.25-.1.49.14.24.62.99 1.33 1.6.91.8 1.68 1.05 1.92 1.17.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.16 1.2z"
        fill="#fff"
      />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#fff" />
      <path d="M7 13.5l11 7 11-7V24a1.5 1.5 0 01-1.5 1.5h-19A1.5 1.5 0 017 24V13.5z" fill="#EA4335" opacity="0" />
      <path d="M7 13l11 7 11-7" stroke="#EA4335" strokeWidth="1.5" fill="none" />
      <rect x="7" y="12" width="22" height="14" rx="1.5" fill="none" stroke="#DADADA" strokeWidth="1" />
      <path d="M7 12.5l11 7.5 11-7.5" fill="none" stroke="#EA4335" strokeWidth="1.5" />
      <path d="M7 12h22v12.5a1.5 1.5 0 01-1.5 1.5h-19A1.5 1.5 0 017 24.5V12z" fill="#fff" />
      <path d="M7 12l11 8 11-8" fill="none" stroke="#EA4335" strokeWidth="2" />
      <path d="M7 12v12.5A1.5 1.5 0 008.5 26h19a1.5 1.5 0 001.5-1.5V12H7z" fill="none" stroke="#DADADA" strokeWidth="1" />
    </svg>
  );
}
