import { Phone } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-4 z-50 flex flex-col gap-3">

      {/* CALL */}
      <a
        href="tel:9266796902"
        className="w-11 h-11 bg-white border border-stone-200 rounded-full shadow-md flex items-center justify-center text-stone-700 hover:bg-amber-800 hover:text-white hover:border-amber-800 transition-all duration-200"
        aria-label="Call us"
        title="Call: 9266796902"
      >
        <Phone size={16} strokeWidth={1.5} />
      </a>

      {/* WHATSAPP */}
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

      {/* EMAIL */}
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

function GmailIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#fff" />
      <path d="M7 12l11 8 11-8" fill="none" stroke="#EA4335" strokeWidth="2" />
      <path d="M7 12v12.5A1.5 1.5 0 008.5 26h19a1.5 1.5 0 001.5-1.5V12H7z" fill="none" stroke="#DADADA" strokeWidth="1" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-6 h-6">
      <circle cx="18" cy="18" r="18" fill="#25D366" />
      <path
        d="M25.3 21.4c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.1-.8.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.6 5.6 5 .8.3 1.4.5 1.9.7.8.2 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z"
        fill="#fff"
      />
    </svg>
  );
}