import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import WhatsAppPopup from "@/components/WhatsAppPopup";
import HashScroll from "@/components/HashScroll";

export default function Home() {
  return (
    <>
      <Cursor />
      <HashScroll />
      <main className="min-h-screen overflow-x-hidden" style={{ background: "#050B1F" }}>
        <Navbar />
        <Hero />
        <WhatsAppPopup />
        <StatsBar />
        <Testimonials />
        <Courses />
        <Features />
        <Instructors />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}