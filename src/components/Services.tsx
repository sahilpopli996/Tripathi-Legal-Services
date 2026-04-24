import { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronUp,
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

export default function Services() {

  const [activeServices, setActiveServices] = useState<number[]>([]);

  const toggleService = (index: number) => {
    setActiveServices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  /* 🔥 AUTO OPEN ALL FOR PRINT */
  useEffect(() => {
    const handleBeforePrint = () => {
      setActiveServices(services.map((_, i) => i));
    };

    const handleAfterPrint = () => {
      setActiveServices([]);
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-stone-50 scroll-mt-24">

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="gold-divider mx-auto"></div>

          <h2 className="section-heading">OUR SERVICES</h2>

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
                isOpen={activeServices.includes(index)}
                onToggle={() => toggleService(index)}
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
    <div className={`bg-white border transition-all duration-300 ${
      isOpen
        ? 'border-amber-400 shadow-md'
        : 'border-stone-200 hover:border-amber-200 hover:shadow-sm'
    }`}>

      <button
        className="w-full text-left p-5 flex items-center gap-4"
        onClick={onToggle}
      >
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isOpen ? 'bg-amber-800' : 'bg-amber-50'
        }`}>
          <Icon size={18} className={isOpen ? 'text-white' : 'text-amber-800'} />
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-semibold text-stone-900">
            {service.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400 hidden sm:block">
            {isOpen ? 'Click to hide' : 'Click for more'}
          </span>

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
        </div>
      )}
    </div>
  );
}

function ServiceItems({ items }: { items: ServiceDetail['items'] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, i) => {
        if (typeof item === 'string') {
          return (
            <li key={i} className="text-xs text-stone-600">
              • {item}
            </li>
          );
        }

        return (
          <li key={i}>
            <span className="font-medium text-xs text-stone-700">
              {item.label}
            </span>

            <ul className="ml-4 mt-1">
              {item.sub.map((s, j) => (
                <li key={j} className="text-xs text-stone-500">
                  ○ {s}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}