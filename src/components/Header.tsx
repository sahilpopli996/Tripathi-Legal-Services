import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Contact us', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-stone-200'
          : 'bg-white border-b border-stone-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO + NAME */}
          <div className="flex items-center gap-4">
            <img
              src="/tls.jpg"
              alt="TLS Logo"
              className="w-14 h-14 object-contain"
            />

            <span
              className="text-base font-semibold text-stone-900 tracking-wide hidden sm:block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tripathi Legal Services-2021
            </span>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link pb-0.5">
                {link.label}
              </a>
            ))}
          </nav>

          {/* PHONE + WORKING HOURS */}
          <div className="hidden md:flex items-start gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full border border-stone-400 text-stone-700 mt-1">
              <Phone size={16} strokeWidth={1.5} />
            </div>

            <div className="flex flex-col leading-tight">
              <a
                href="tel:09266796902"
                className="text-sm font-medium text-stone-800 hover:text-amber-800 transition-colors"
              >
                0-9266796902
              </a>

              <span className="text-xs text-stone-500">
                Working Hours: 10 AM – 6 PM
              </span>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-stone-700 hover:text-amber-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-4">
          <nav className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-700 hover:text-amber-800 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* MOBILE PHONE + WORKING HOURS */}
            <div className="pt-2 border-t border-stone-100">
              <a
                href="tel:09266796902"
                className="flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-amber-800"
              >
                <Phone size={14} />
                0-9266796902
              </a>

              <p className="text-xs text-stone-500 ml-6">
                Working Hours: 10 AM – 6 PM
              </p>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}