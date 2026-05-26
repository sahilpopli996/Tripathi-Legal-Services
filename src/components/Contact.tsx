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
        "tripathi_service",
        "template_vrfwilu",
        templateParams,
        "JVmqDZSHj5QU7zaFw"
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
        <div>
           <p
  className="text-2xl md:text-3xl uppercase tracking-[0.12em] text-amber-800 font-bold mb-3"
  style={{ fontFamily: "'Playfair Display', serif" }}
>
  For Legal Consultation
</p>

  <h2
    className="text-2xl font-semibold mb-8"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    Send Us a Message
  </h2>

  <form onSubmit={handleSubmit} className="space-y-6">
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

            <button
              type="submit"
              disabled={loading}
              className="bg-amber-800 text-white px-6 py-3 font-medium hover:bg-amber-900 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Contact Information
          </h2>

          <p>
            <strong>Office Address:</strong><br />
            Chamber No. 661,<br />
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

          <p>
            <strong>Working Hours:</strong><br />
            10 AM – 6 PM
          </p>
        </div>
      </div>
    </section>
  );
}