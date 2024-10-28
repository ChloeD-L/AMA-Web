import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { AboutUsSection } from "@/components/aboutSection";
import ContactUsSection from "@/components/contactSection";

export default function Home() {
  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
      <Header />
      <section className="snap-start">
        <HeroSection />
      </section>
      <section className="snap-center">
        <AboutUsSection />
      </section>
      <section className="snap-center ">
        <ContactUsSection />
      </section>
      <section className="snap-end">
        <Footer />
      </section>
    </div>
  );
}
