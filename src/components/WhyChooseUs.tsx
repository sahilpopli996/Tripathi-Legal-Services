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
    <section id="why-choose-us" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* IMAGE BANNER */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-[70%] md:w-[70%] h-[240px] md:h-[300px] overflow-hidden rounded-sm">
            <img
              src="/whychooseus.jpg"
              alt="Why Choose Us"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/15"></div>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="max-w-3xl mx-auto text-left">
          <div className="w-12 h-[3px] bg-amber-700 mb-4"></div>

          <h2
            className="text-2xl md:text-3xl font-bold text-stone-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            WHY CHOOSE US
          </h2>

          <div
            className="space-y-4 text-sm md:text-base text-stone-600 leading-relaxed"
            style={{ textAlign: "justify" }}
          >
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

      </div>
    </section>
  );
}