import { Shield, Scale, Users, Award, FileCheck, Lock } from 'lucide-react';

const highlights = [
  { icon: Scale, title: 'Highest Standards', desc: 'Legal consultancy upholding professionalism, integrity, and ethics.' },
  { icon: Shield, title: 'Risk Mitigation', desc: 'Ensuring clients operate within the legal framework and protect their interests.' },
  { icon: Users, title: 'Tailored Strategy', desc: "Personalized strategies crafted for each client's unique legal needs." },
  { icon: Lock, title: 'Confidentiality', desc: 'Precision, confidentiality, and unwavering client satisfaction at every step.' },
  { icon: FileCheck, title: 'Transparent Fees', desc: 'Cost-effective fee structures with no hidden charges, ever.' },
  { icon: Award, title: 'Diverse Expertise', desc: 'Representation across 12+ diverse legal disciplines for optimal resolution.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-white scroll-mt-24">

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* 🔥 IMAGE BANNER */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="relative w-[70%] md:w-[70%] h-[240px] md:h-[300px] overflow-hidden rounded-sm">

              <img
                src="/whychooseus.jpg"
                alt="Why Choose Us"
                className="w-full h-full object-center"
              />

              {/* LIGHT OVERLAY */}
              <div className="absolute inset-0 bg-black/15"></div>

              {/* TEXT */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-lg md:text-xl text-white italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                 
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div>
            <div className="w-12 h-[3px] bg-amber-700 mb-4"></div>

            <h2
              className="text-2xl md:text-3xl font-bold text-stone-900 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              WHY CHOOSE US
            </h2>

            <div className="space-y-4 text-sm md:text-base text-stone-600 leading-relaxed text-justify">
              <p>
                We provide legal consultancy of the highest standard, upholding professionalism, integrity,
                and ethics. Our experienced team ensures clients operate within the legal framework, mitigate
                risks, and protect their interests through personalized strategies tailored to each client's
                unique needs, delivering innovative and effective solutions across diverse legal disciplines
                to achieve optimal resolutions.
              </p>

              <p>
                Our firm is committed to precision, confidentiality, and unwavering client satisfaction. We
                offer transparent, cost-effective fee structures with no hidden charges, providing high-quality
                and customized legal representation in areas including Arbitration, Acquisitions & Bifurcation,
                Compliance, Corporate Law, Contract Drafting, Dispute Redressal, Litigation, Negotiation,
                Mergers, and Property Law.
              </p>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-4 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300 bg-white"
              >
                <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-amber-800" strokeWidth={1.5} />
                </div>

                <h4
                  className="text-sm font-semibold text-stone-900 mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h4>

                <p className="text-xs text-stone-500 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}