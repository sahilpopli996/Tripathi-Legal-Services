import { BookOpen, Video, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-stone-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto"></div>
          <h2 className="section-heading">Blog</h2>
          <p className="text-sm text-stone-500 max-w-md mx-auto mt-1">
            Legal insights, articles, and resources to keep you informed.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* 🔥 LEGAL ARTICLES */}
          <a
            href="https://docs.google.com/document/d/10GtYY-pSKNc6N2hzj2pDWoJ1vXWkN5MFUnk3hzOjjI4/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center p-8"
          >

            {/* 🔥 IMAGE TOP */}
            <div className="w-40 h-40 mb-6">
              <img
                src="/blog.jpg"
                alt="Blog"
                className="w-full h-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col items-center">

              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-amber-800" strokeWidth={1.5} />
              </div>

              <h3
                className="text-lg font-semibold text-stone-900 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Legal Articles
              </h3>

              <p className="text-sm text-stone-500 leading-relaxed mb-5">
                Click to explore our collection of legal blogs and articles.
              </p>

              <div className="flex items-center gap-2 text-amber-700 text-xs uppercase tracking-widest">
                Read Blogs
                <ArrowRight size={14} />
              </div>

            </div>
          </a>

          {/* 🔥 VIDEO RESOURCES */}
          <a
            href="https://drive.google.com/drive/folders/1b-pJYX8Tr8TY39lWEoBi3VCvlbcVXN0B?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center p-8"
          >

            {/* 🔥 IMAGE TOP */}
            <div className="w-40 h-40 mb-6">
              <img
                src="/play.jpg"
                alt="Videos"
                className="w-full h-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col items-center">

              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                <Video size={24} className="text-amber-800" strokeWidth={1.5} />
              </div>

              <h3
                className="text-lg font-semibold text-stone-900 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Video Resources
              </h3>

              <p className="text-sm text-stone-500 leading-relaxed mb-5">
                Click to explore our complete collection of legal videos on Google Drive.
              </p>

              <div className="flex items-center gap-2 text-amber-700 text-xs uppercase tracking-widest">
                View Videos
                <ArrowRight size={14} />
              </div>

            </div>
          </a>

        </div>
      </div>
    </section>
  );
}