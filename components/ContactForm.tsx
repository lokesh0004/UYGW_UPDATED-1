"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  studentName: string;
  email: string;
  parentName: string;
  contactNo: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    email: "",
    parentName: "",
    contactNo: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "919910488350";

    const message = `New Enquiry:%0AStudent Name: ${formData.studentName}%0AEmail: ${formData.email}%0AParent Name: ${formData.parentName}%0AContact No: ${formData.contactNo}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  const inputClass =
    "w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all duration-300";

  return (
    <section className="px-8 md:px-16 py-28 relative overflow-hidden" style={{ background: "#050B1F" }}>
      <div className="section-divider mb-20" />
      <div
        className="relative max-w-2xl mx-auto rounded-3xl p-10 md:p-16 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(79,70,229,0.08) 50%, rgba(0,212,255,0.05) 100%)",
          border: "1px solid rgba(99,102,241,0.2)",
          boxShadow: "0 0 100px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none rounded-3xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10">
          <span className="inline-block text-xs font-bold tracking-[4px] uppercase text-indigo-400 mb-4">
            Get In Touch
          </span>
          <h2 className="font-['Clash_Display'] text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Enquire <span className="text-gradient-indigo">Now</span>
          </h2>
          <p className="text-slate-400 text-base mb-10 max-w-md leading-relaxed">
            Fill in the details below and we'll get back to you on WhatsApp instantly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-slate-300 mb-2">
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
                placeholder="Enter student's full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
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
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="parentName" className="block text-sm font-medium text-slate-300 mb-2">
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
                placeholder="Enter parent's full name"
              />
            </div>

            <div>
              <label htmlFor="contactNo" className="block text-sm font-medium text-slate-300 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="10-digit mobile number"
              />
            </div>

            <button
              type="submit"
              className="w-full relative px-10 py-4 rounded-2xl text-white font-bold text-base overflow-hidden group mt-4"
              style={{
                background: "linear-gradient(135deg, #6366F1, #4F46E5)",
                boxShadow: "0 8px 40px rgba(99,102,241,0.5)",
              }}
            >
              <span className="relative z-10">Submit on WhatsApp →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-indigo-600/0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
