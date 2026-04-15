import { BookOpen, Video, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-stone-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto"></div>
          <h2 className="section-heading">Blog</h2>
          <p className="text-sm text-stone-500 max-w-md mx-auto mt-1">
            Legal insights, articles, and resources to keep you informed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-stone-200 p-8 flex flex-col items-center text-center hover:border-amber-300 hover:shadow-sm transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-5">
              <BookOpen size={24} className="text-amber-800" strokeWidth={1.5} />
            </div>
            <h3
              className="text-lg font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Legal Articles
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed mb-5">
              In-depth articles on recent legal developments, case studies, and legal guidance across various practice areas.
            </p>
            <span className="text-xs text-amber-700 border border-amber-300 px-4 py-2 uppercase tracking-widest">
              Coming Soon
            </span>
          </div>

          <div className="bg-white border border-stone-200 p-8 flex flex-col items-center text-center hover:border-amber-300 hover:shadow-sm transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-5">
              <Video size={24} className="text-amber-800" strokeWidth={1.5} />
            </div>
            <h3
              className="text-lg font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Video Resources
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed mb-5">
              Educational videos explaining legal processes, your rights, and how to navigate the legal system effectively.
            </p>
            <span className="text-xs text-amber-700 border border-amber-300 px-4 py-2 uppercase tracking-widest">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
