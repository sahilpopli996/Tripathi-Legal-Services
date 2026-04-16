export default function About() {
  return (
    <section id="about" className="py-20 bg-stone-50 scroll-mt-24">

      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">

        {/* IMAGE */}
        <div className="relative">
          <div className="w-64 h-80 overflow-hidden border border-amber-300 shadow-md bg-white">
            <img
              src="/apoorva.jpg"
              alt="Apoorva Tripathi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* LABEL */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-800 text-white px-6 py-2 text-xs uppercase tracking-widest shadow">
            ADVOCATE
          </div>
        </div>

        {/* NAME */}
        <div className="mt-10">
          <h3
            className="text-lg md:text-xl font-bold text-stone-900 uppercase tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            APOORVA TRIPATHI
          </h3>

          <p className="text-sm text-amber-800 mt-1 tracking-widest uppercase">
            Founder
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-14 w-full text-left">

          {/* GOLD LINE */}
          <div className="w-12 h-[3px] bg-amber-700 mb-4 mx-auto"></div>

          {/* HEADING */}
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            APPRAISAL
          </h2>

          {/* QUOTE */}
        <blockquote
  className="text-2xl md:text-3xl italic text-stone-800 mb-8 text-center leading-relaxed"
  style={{ fontFamily: "'Cormorant Garamond', serif" }}
>
  “The law is a shield for the weak and a sword for the just.”
</blockquote>

          {/* TEXT */}
<div
  className="space-y-6 text-xl md:text-2xl text-stone-700 leading-relaxed text-justify"
  style={{ fontFamily: "'Cormorant Garamond', serif" }}
>
  <p>
    The firm is a dynamic, Delhi-based consultancy specializing in a wide range of legal services,
    including arbitration, civil and criminal litigation, contract law, mediation, non-disclosure
    agreements, property law and related fields, to provide comprehensive support for clients'
    diverse legal needs.
  </p>

  <p>
    We are committed to delivering high-quality, personalized legal solutions with a strong focus
    on resolution and exceptional client care. Our approach involves crafting tailored strategies,
    offering attentive, responsive, and supportive guidance throughout every stage of the legal process.
  </p>
</div>

          {/* TAGS */}
          {/* <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Arbitration', 'Civil Litigation', 'Contract Law', 'Property Law', 'Mediation'].map((tag) => (
              <span
                key={tag}
                className="text-xs px-4 py-2 border border-amber-700 text-amber-800 uppercase tracking-widest hover:bg-amber-800 hover:text-white transition"
              >
                {tag}
              </span>
            ))}
          </div> */}

        </div>
      </div>
    </section>
  );
}