import {
  Scale,
  Building2,
  Gavel,
  Monitor,
  ShoppingBag,
  Heart,
  Lightbulb,
  Briefcase,
  Home,
  Building,
  Banknote,
  Car,
} from 'lucide-react';

import { services, type ServiceDetail } from '../data/services';

const serviceIcons = [
  Scale,
  Building2,
  Gavel,
  Monitor,
  ShoppingBag,
  Heart,
  Lightbulb,
  Briefcase,
  Home,
  Building,
  Banknote,
  Car,
];

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Services() {
  return (
    <section id="services" className="py-20 bg-stone-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto"></div>

          <h2 className="section-heading">OUR SERVICES</h2>

          <p className="text-sm text-stone-500 max-w-xl mx-auto mt-2 leading-relaxed">
            Comprehensive legal representation across some of our specialized practice areas, delivered with precision and integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12 max-w-3xl mx-auto">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || Scale;

            return (
              <a
                key={service.title}
                href={`#service/${slugify(service.title)}`}
                className="bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all duration-300 p-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-50">
                  <Icon size={18} className="text-amber-800" />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-stone-900">
                    {service.title}
                  </h3>
                </div>

                <span className="text-xs text-amber-800 uppercase tracking-widest">
                  View Details
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}