import { Phone, Mail } from 'lucide-react';

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

      <div className="max-w-[1400px] mx-auto px-10 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-center lg:text-left justify-items-center lg:justify-items-start">

          {/* LOGO */}
          <div className="max-w-md">
            <div className="flex items-center justify-center lg:justify-start gap-5 mb-6">
              <img
                src="/tls.jpg"
                alt="TLS Logo"
                className="w-16 h-16 object-contain"
              />

              {/* ✅ FIXED TEXT */}
              <div>
                <p
                  className="text-white text-xl font-semibold tracking-wide leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Tripathi Legal Services-2021
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed">
              Delhi-based legal consultancy specializing in comprehensive legal services across diverse disciplines, delivering trusted and result-oriented solutions.
            </p>

            <div className="mt-7 flex justify-center lg:justify-start gap-4">
              <a
                href="tel:09266796902"
                className="w-11 h-11 rounded-full border border-stone-600 flex items-center justify-center hover:border-amber-600 hover:text-amber-500 transition-all duration-200"
              >
                <Phone size={17} />
              </a>

              <a
                href="mailto:advapoorvat@gmail.com"
                className="w-11 h-11 rounded-full border border-stone-600 flex items-center justify-center hover:border-amber-600 hover:text-amber-500 transition-all duration-200"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-7 uppercase tracking-wider">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition flex justify-center lg:justify-start items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-700 rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-7 uppercase tracking-wider">
              Practice Areas
            </h4>

            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-stone-400 hover:text-amber-400 transition flex justify-center lg:justify-start items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-700 rounded-full"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-stone-800">
        <div className="max-w-[1400px] mx-auto px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500 text-center sm:text-left">

          <p>
            © {new Date().getFullYear()} Tripathi Legal Services-2021. All rights reserved.
          </p>

          <p className="max-w-xl">
            This website complies with Bar Council of India Rules. Content is for informational purposes only and does not constitute legal advice.
          </p>

        </div>
      </div>

    </footer>
  );
}