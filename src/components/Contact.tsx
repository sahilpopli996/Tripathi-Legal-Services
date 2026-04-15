import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto"></div>
          <h2 className="section-heading">For Consultation</h2>
          <p className="text-sm text-stone-500 max-w-md mx-auto mt-1">
            Legal Guidance — Reach out to us for personalized legal assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3
              className="text-lg font-semibold text-stone-900 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">
                  Phone No.
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your contact number"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Briefly describe your legal matter..."
                  className="form-input resize-none"
                />
              </div>

              <button type="submit" className="btn-primary flex items-center gap-2 text-sm uppercase tracking-widest">
                <Send size={14} />
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h3
              className="text-lg font-semibold text-stone-900 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-amber-800" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">Office Address</p>
                  <address className="not-italic text-sm text-stone-700 leading-relaxed">
                    Chamber No. 818A &amp; 661,<br />
                    Lawyer's Chamber Block,<br />
                    Dwarka District Court,<br />
                    Sector-10, Dwarka, New Delhi – 110077
                  </address>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-amber-800" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">Phone</p>
                  <a
                    href="tel:09266796902"
                    className="text-sm text-stone-700 hover:text-amber-800 transition-colors"
                  >
                    0-9266796902
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-amber-800" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:advapoorvat@gmail.com"
                    className="text-sm text-stone-700 hover:text-amber-800 transition-colors"
                  >
                    advapoorvat@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-stone-900 text-white">
              <p
                className="text-base italic mb-3 text-stone-300"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}
              >
                "We believe in accessible, transparent, and personalized legal guidance."
              </p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Available for consultation during working hours. For urgent matters, please call directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
