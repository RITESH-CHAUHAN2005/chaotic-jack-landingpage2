
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919818303762', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919818303762', '_self');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-teal-600 via-cyan-600 to-emerald-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-10 md:right-20 w-32 md:w-48 h-32 md:h-48 bg-white/5 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 md:w-24 h-16 md:h-24 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 md:bottom-40 right-10 w-12 md:w-16 h-12 md:h-16 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        
        {/* Stars */}
        <div className="absolute top-16 md:top-20 left-1/3 text-white/20 text-xl md:text-2xl animate-pulse">✨</div>
        <div className="absolute top-32 md:top-40 right-1/4 text-white/20 text-lg md:text-xl animate-pulse" style={{animationDelay: '1s'}}>⭐</div>
        <div className="absolute bottom-40 md:bottom-60 left-20 text-white/20 text-base md:text-lg animate-pulse" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute bottom-24 md:bottom-32 right-1/3 text-white/20 text-xl md:text-2xl animate-pulse" style={{animationDelay: '1.5s'}}>⭐</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
          Let's create something amazing together. Contact us today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white border-2 border-transparent hover:border-white transition-all duration-300 hover:scale-105 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
          >
            <MessageCircle className="mr-2 w-4 h-4 md:w-5 md:h-5" />
            WhatsApp Us
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleCallClick}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 transition-all duration-300 hover:scale-105 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
          >
            <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
            Call Now
          </Button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-3 mt-12 md:mt-16 animate-fade-in" style={{animationDelay: '0.9s'}}>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
