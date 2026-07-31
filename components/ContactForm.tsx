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

    const whatsappNumber = "919910488350"; // apna number daalo

    const message = `New Enquiry:%0AStudent Name: ${formData.studentName}%0AEmail: ${formData.email}%0AParent Name: ${formData.parentName}%0AContact No: ${formData.contactNo}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="studentName">Student Name</label>
        <input type="text" id="studentName" name="studentName" value={formData.studentName} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="parentName">Parent's Name</label>
        <input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="contactNo">Contact Number</label>
        <input type="tel" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
