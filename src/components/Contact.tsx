import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      message: form.message,
    };

    emailjs
      .send(
        "tripathi_service",       // ✅ your service ID
        "template_vrfwilu",       // ✅ your template ID
        templateParams,
        "JVmqDZSHj5QU7zaFw"       // ✅ your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT FORM */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="text-sm block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border p-3 outline-none focus:border-amber-700"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm block mb-1">Phone No.</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your contact number"
                className="w-full border p-3 outline-none focus:border-amber-700"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm block mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border p-3 outline-none focus:border-amber-700"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm block mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Briefly describe your legal matter..."
                className="w-full border p-3 h-32 outline-none focus:border-amber-700"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="bg-amber-800 text-white px-6 py-3 font-medium hover:bg-amber-900 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Contact Information
          </h2>

          <p>
            <strong>Office Address:</strong><br />
            Chamber No. 818A,<br />
            Lawyer's Chamber Block,<br />
            Dwarka District Court,<br />
            Sector-10, Dwarka, New Delhi – 110077
          </p>

          <p>
            <strong>Phone:</strong><br />
            0-9266796902
          </p>

          <p>
            <strong>Email:</strong><br />
            advapoorvat@gmail.com
          </p>
        </div>

      </div>
    </section>
  );
}