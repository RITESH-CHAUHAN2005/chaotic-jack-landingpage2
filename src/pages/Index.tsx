
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navigation />
      <Hero />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
