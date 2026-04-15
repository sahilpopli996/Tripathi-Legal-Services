import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact us', href: '#contact' },
];

const serviceLinks = [
  'Arbitration',
  'Civil Litigation',
  'Criminal Litigation',
  'Family Law',
  'Cyber Law',
  'Labour Law',
  'Real Estate & Property',
  'Intellectual Property',
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO SECTION */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">

              {/* 🔥 REPLACED SVG WITH IMAGE */}
              <img
                src="/tls.jpg"
                alt="TLS Logo"
                className="w-10 h-10 object-contain"
              />

              <div>
                <p
                  className="text-white text-sm font-semibold leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Tripathi Legal
                </p>
                <p className="text-stone-400 text-xs">Services-2021</p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed mt-4">
              Delhi-based legal consultancy specializing in comprehensive legal services across diverse disciplines.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="tel:09266796902"
                className="w-8 h-8 rounded-full border border-stone-600 flex items-center justify-center hover:border-amber-600 hover:text-amber-500 transition"
              >
                <Phone size={13} />
              </a>

              <a
                href="mailto:advapoorvat@gmail.com"
                className="w-8 h-8 rounded-full border border-stone-600 flex items-center justify-center hover:border-amber-600 hover:text-amber-500 transition"
              >
                <Mail size={13} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-widest">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs hover:text-amber-400 flex gap-2">
                    <span className="w-1 h-1 bg-amber-700 rounded-full mt-1"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-widest">
              Practice Areas
            </h4>

            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-xs hover:text-amber-400 flex gap-2">
                    <span className="w-1 h-1 bg-amber-700 rounded-full mt-1"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-widest">
              Contact Information
            </h4>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={14} className="text-amber-600 mt-1" />
                <address className="text-xs not-italic leading-relaxed">
                  Chamber No. 818A & 661,<br />
                  Lawyer's Chamber Block,<br />
                  Dwarka District Court,<br />
                  Sector-10, Dwarka,<br />
                  New Delhi – 110077
                </address>
              </div>

              <div className="flex gap-3">
                <Phone size={14} className="text-amber-600" />
                <a href="tel:09266796902" className="text-xs hover:text-amber-400">
                  0-9266796902
                </a>
              </div>

              <div className="flex gap-3">
                <Mail size={14} className="text-amber-600" />
                <a href="mailto:advapoorvat@gmail.com" className="text-xs hover:text-amber-400">
                  advapoorvat@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Tripathi Legal Services-2021. All rights reserved.</p>
          <p className="text-center max-w-md">
            This website complies with Bar Council of India Rules. Content is for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}