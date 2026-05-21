import { services, type ServiceDetail } from '../data/services';

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function ServicePage({ slug }: { slug: string }) {
  const service = services.find((s) => slugify(s.title) === slug);

  if (!service) {
    return (
      <main className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-stone-900">Service Not Found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <section className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="w-12 h-[3px] bg-amber-700 mx-auto mb-4"></div>

          <h1
            className="text-3xl md:text-5xl font-bold text-stone-900 uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {service.title}
          </h1>
        </div>

        <div className="max-w-3xl mx-auto bg-stone-50 border-l-4 border-amber-700 p-8 md:p-10">
          <ServiceItems items={service.items} />
        </div>
      </section>
    </main>
  );
}

function ServiceItems({ items }: { items: ServiceDetail['items'] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => {
        if (typeof item === 'string') {
          return (
            <li key={i} className="text-base md:text-lg text-stone-700 leading-relaxed">
              • {item}
            </li>
          );
        }

        return (
          <li key={i}>
            <p className="font-semibold text-stone-900 text-base md:text-lg">
              {item.label}
            </p>

            <ul className="ml-5 mt-2 space-y-2">
              {item.sub.map((s, j) => (
                <li key={j} className="text-stone-700 text-base leading-relaxed">
                  • {s}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}