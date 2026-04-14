import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Trust />
        <Courses />
        <WhyChooseUs />
        <Results />
        <Testimonials />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
