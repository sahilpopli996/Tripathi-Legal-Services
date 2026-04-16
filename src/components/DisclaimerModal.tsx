import { useEffect, useState } from "react";

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted");
    if (!accepted) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setVisible(false);
    document.body.style.overflow = "auto";
  };

  const handleDisagree = () => {
    alert("You must accept the disclaimer to continue.");
  };

  const handleClose = () => {
    handleDisagree();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center px-4">

      {/* MODAL BOX */}
      <div className="bg-white w-full max-w-3xl shadow-2xl rounded-sm overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-stone-200">
          <h2 className="text-lg font-semibold text-stone-800">
            Disclaimer
          </h2>

          <button
            onClick={handleClose}
            className="text-stone-500 hover:text-black text-xl"
          >
            ×
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-6 text-center">

          {/* LOGO */}
          <img
            src="/tls.jpg"
            alt="Logo"
            className="w-28 mx-auto mb-2"
          />

          {/* 🔥 ADDED TEXT */}
          <p
            className="text-lg font-semibold text-stone-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tripathi Legal Services-2021
          </p>

          <p className="text-sm text-stone-600 leading-relaxed text-justify mb-4">
            As per The Bar Council of India Rules and The Advocates Act, 1961, an advocate cannot approach his/her client or advertise or promote his profession by way of advertisements or solicitation. Thus, this website has not been created to approach or solicit our client or advertise our firm but to provide some necessary information about our firm and services to our existing clients.
          </p>

          <p className="text-sm text-stone-600 leading-relaxed text-justify">
            The contents of this website shall not be considered as Legal Advice as the contents thereof is not exhaustive. It is only introductory. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-stone-200">

          <button
            onClick={handleAgree}
            className="bg-stone-700 text-white px-5 py-2 text-sm rounded-sm hover:bg-stone-800"
          >
            I AGREE
          </button>

          <button
            onClick={handleDisagree}
            className="bg-blue-500 text-white px-5 py-2 text-sm rounded-sm hover:bg-blue-600"
          >
            I DISAGREE
          </button>

        </div>
      </div>
    </div>
  );
}