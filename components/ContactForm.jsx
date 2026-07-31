"use client"; // Next.js app router mein upar rakhna zaroori hai (agar app router use kar rahe ho)

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    parentName: "",
    contactNo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919910488350"; // apna WhatsApp number, country code ke saath, bina + ke

    const message = `New Enquiry:%0AStudent Name: ${formData.studentName}%0AEmail: ${formData.email}%0AParent Name: ${formData.parentName}%0AContact No: ${formData.contactNo}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="studentName">Student Name</label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="parentName">Parent's Name</label>
        <input
          type="text"
          id="parentName"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contactNo">Contact Number</label>
        <input
          type="tel"
          id="contactNo"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
