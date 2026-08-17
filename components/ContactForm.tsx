"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  studentName: string;
  email: string;
  parentName: string;
  contactNo: string;
}

const countryCodes = [
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+1", country: "Canada", flag: "🇨🇦" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    email: "",
    parentName: "",
    contactNo: "",
  });
  const [countryCode, setCountryCode] = useState("+61");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "919910488350";

    const message = `New Enquiry:%0AStudent Name: ${formData.studentName}%0AEmail: ${formData.email}%0AParent Name: ${formData.parentName}%0AContact No: ${countryCode} ${formData.contactNo}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  const inputClass =
    "w-full border rounded-xl px-4 py-3 placeholder-[var(--muted)] focus:outline-none focus:ring-1 transition-all duration-300";

  const inputStyle = {
    background: "rgba(255,255,255,0.7)",
    borderColor: "rgba(46,139,87,0.25)",
    color: "var(--text)",
  };

  return (
    <section
      className="px-8 md:px-16 py-28 relative overflow-hidden"
      style={{ background: "var(--void)" }}
    >
      <div className="section-divider mb-20" />
      <div
        className="relative max-w-2xl mx-auto rounded-3xl p-10 md:p-16 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(46,139,87,0.12) 0%, rgba(22,92,68,0.06) 50%, rgba(212,175,55,0.05) 100%)",
          border: "1px solid rgba(46,139,87,0.2)",
          boxShadow: "0 0 100px rgba(46,139,87,0.08), inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none rounded-3xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(46,139,87,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(46,139,87,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10">
          <span
            className="inline-block text-xs font-bold tracking-[4px] uppercase mb-4"
            style={{ color: "var(--forest-light)" }}
          >
            Get In Touch
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--text)" }}
          >
            Enquire <span className="text-gradient-indigo">Now</span>
          </h2>
          <p className="text-base mb-10 max-w-md leading-relaxed" style={{ color: "var(--muted)" }}>
            Fill in the details below and we'll get back to you on WhatsApp instantly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
                Student Name
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className={inputClass}
                style={inputStyle}
                placeholder="Enter student's full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
                style={inputStyle}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="parentName" className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
                Parent's Name
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className={inputClass}
                style={inputStyle}
                placeholder="Enter parent's full name"
              />
            </div>

            <div>
              <label htmlFor="contactNo" className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
                Contact Number
              </label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border rounded-xl px-2 py-3 focus:outline-none focus:ring-1 transition-all duration-300"
                  style={{ ...inputStyle, width: "110px", flexShrink: 0 }}
                >
                  {countryCodes.map((c) => (
                    <option key={`${c.country}-${c.code}`} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={inputStyle}
                  placeholder="10-digit mobile number"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full relative px-10 py-4 rounded-2xl font-bold text-base overflow-hidden group mt-4"
              style={{
                background: "linear-gradient(135deg, var(--forest-light), var(--forest))",
                color: "#FFFFFF",
                boxShadow: "0 8px 40px rgba(46,139,87,0.35)",
              }}
            >
              <span className="relative z-10">Submit on WhatsApp →</span>
              <div
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(212,175,55,0.2), transparent)",
                }}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}