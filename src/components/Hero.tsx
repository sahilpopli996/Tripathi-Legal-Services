export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-white">

      {/* HEADING */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* GOLD LINE */}
          <div className="w-12 h-[3px] bg-amber-700 mb-4"></div>

          <h1
            className="text-3xl md:text-4xl font-bold text-stone-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Disclaimer
          </h1>
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="mt-12 flex flex-col items-center text-center px-6">

        {/* LOGO */}
        <div>
          <img
            src="/tls.jpg"
            alt="Logo"
            className="w-28 h-28 object-cover mx-auto"
          />

          <p
            className="mt-4 text-base font-semibold text-stone-800"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tripathi Legal Services-2021
          </p>
        </div>

        {/* TEXT BOX */}
        <div className="mt-8 w-full max-w-3xl">
          <div className="bg-stone-50 border-l-4 border-amber-700 p-6 md:p-8 text-left">
            <p className="text-sm md:text-base text-stone-700 leading-relaxed text-justify">
              This website complies with the Bar Council of India Rules and the Advocates Act, 1961,
              which prohibit advocates from soliciting clients or advertising professional services.
              It is not intended to solicit clients or promote the firm, but solely to provide
              essential information about the firm and its services for existing clients. The content
              is introductory only, not exhaustive, and should not be construed as legal advice;
              users are advised to consult qualified professionals independently for any legal matters.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-amber-800 text-white px-8 py-3 text-sm uppercase tracking-widest"
            >
              Our Services
            </a>

            <a
              href="#contact"
              className="border border-stone-800 text-stone-800 px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-stone-800 hover:text-white transition duration-200"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}