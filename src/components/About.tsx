export default function About() {
  return (
    <section id="about" className="pt-8 pb-20 bg-stone-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center">

        {/* IMAGE */}
        <div className="relative">
          <div className="w-64 h-80 overflow-hidden border border-amber-300 shadow-md bg-white">
            <img
              src="/apoorva.jpg"
              alt="Apoorva Tripathi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* NAME */}
        <div className="mt-8 text-center">
          <h3
            className="text-lg md:text-xl font-bold text-stone-900 uppercase tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ADV. APOORVA TRIPATHI
          </h3>

          <p className="text-sm text-amber-800 mt-1 tracking-widest uppercase">
            Founder
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-14 w-full max-w-4xl mx-auto text-left">
          <div className="w-12 h-[3px] bg-amber-700 mb-4"></div>

          <h2
            className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 uppercase text-left"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            APPRAISAL
          </h2>

          <blockquote
            className="text-2xl md:text-3xl italic text-stone-800 mb-8 text-left leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            “The law is a shield for the weak and a sword for the just.”
          </blockquote>

          <div
            className="space-y-6 text-xl md:text-2xl text-stone-700 leading-relaxed text-left"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              textAlign: "justify",
            }}
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
        </div>
      </div>
    </section>
  );
}