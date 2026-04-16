import { useState } from 'react';
import { ChevronDown, ChevronUp, Scale, Building2, Gavel, Monitor, ShoppingBag, Heart, Lightbulb, Briefcase, Home, Building, Banknote, Car } from 'lucide-react';
import { services, type ServiceDetail } from '../data/services';

const serviceIcons = [Scale, Building2, Gavel, Monitor, ShoppingBag, Heart, Lightbulb, Briefcase, Home, Building, Banknote, Car];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-stone-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto"></div>
          <h2 className="section-heading">Our Services</h2>
          <p className="text-sm text-stone-500 max-w-xl mx-auto mt-2 leading-relaxed">
            Comprehensive legal representation across 12 specialized practice areas, delivered with precision and integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12 max-w-3xl mx-auto">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || Scale;
            return (
              <ServiceCard
                key={service.title}
                service={service}
                icon={Icon}
                isOpen={activeService === index}
                onToggle={() => setActiveService(activeService === index ? null : index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: ServiceDetail;
  icon: any;
  isOpen: boolean;
  onToggle: () => void;
}

function ServiceCard({ service, icon: Icon, isOpen, onToggle }: ServiceCardProps) {
  return (
    <div
      className={`bg-white border transition-all duration-300 ${
        isOpen ? 'border-amber-400 shadow-md' : 'border-stone-200 hover:border-amber-200 hover:shadow-sm'
      }`}
    >
      <button
        className="w-full text-left p-5 flex items-start gap-4"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
            isOpen ? 'bg-amber-800' : 'bg-amber-50'
          }`}
        >
          <Icon size={18} strokeWidth={1.5} className={isOpen ? 'text-white' : 'text-amber-800'} />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="text-sm font-semibold text-stone-900 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {service.title}
          </h3>
        </div>
        <div className="ml-2 flex-shrink-0 mt-0.5">
          {isOpen ? (
            <ChevronUp size={16} className="text-amber-800" />
          ) : (
            <ChevronDown size={16} className="text-stone-400" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 border-t border-stone-100">
          <ServiceItems items={service.items} />
          {service.note && (
            <p className="mt-4 text-xs text-stone-400 italic">{service.note}</p>
          )}
        </div>
      )}
    </div>
  );
}

function ServiceItems({ items }: { items: ServiceDetail['items'] }) {
  return (
    <ul className="mt-4 space-y-1.5">
      {items.map((item, i) => {
        if (typeof item === 'string') {
          return (
            <li key={i} className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
              <span className="w-1 h-1 rounded-full bg-amber-700 flex-shrink-0 mt-1.5"></span>
              {item}
            </li>
          );
        }
        return (
          <li key={i}>
            <div className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
              <span className="w-1 h-1 rounded-full bg-amber-700 flex-shrink-0 mt-1.5"></span>
              <span className="font-medium">{item.label}</span>
            </div>
            <ul className="ml-5 mt-1 space-y-1">
              {item.sub.map((s, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-stone-500 leading-relaxed">
                  <span className="text-amber-600 flex-shrink-0">○</span>
                  {s}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
