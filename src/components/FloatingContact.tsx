export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-4 z-50 flex flex-col gap-3">
      {/* CALL */}
      <a
        href="tel:9266796902"
        className="w-11 h-11 flex items-center justify-center"
        aria-label="Call us"
        title="Call: 9266796902"
      >
        <img
          src="/phone.jpg"
          alt="Call"
          className="w-8 h-8 object-contain"
        />
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919266796902"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 flex items-center justify-center"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <img
          src="/whatsapp.jpg"
          alt="WhatsApp"
          className="w-9 h-9 object-contain"
        />
      </a>

      {/* EMAIL */}
      <a
        href="mailto:advapoorvat@gmail.com"
        className="w-11 h-11 flex items-center justify-center"
        aria-label="Email us"
        title="Email: advapoorvat@gmail.com"
      >
        <img
          src="/gmail.jpg"
          alt="Email"
          className="w-9 h-9 object-contain"
        />
      </a>
    </div>
  );
}