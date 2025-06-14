
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
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-48 h-48 bg-white/5 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        
        {/* Stars */}
        <div className="absolute top-20 left-1/3 text-white/20 text-2xl animate-pulse">✨</div>
        <div className="absolute top-40 right-1/4 text-white/20 text-xl animate-pulse" style={{animationDelay: '1s'}}>⭐</div>
        <div className="absolute bottom-60 left-20 text-white/20 text-lg animate-pulse" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute bottom-32 right-1/3 text-white/20 text-2xl animate-pulse" style={{animationDelay: '1.5s'}}>⭐</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-white/90 mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
          Let's create something amazing together. Contact us today!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white border-2 border-transparent hover:border-white transition-all duration-300 hover:scale-105 text-lg px-8 py-4"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            WhatsApp Us
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleCallClick}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 text-lg px-8 py-4"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Now
          </Button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-3 mt-16 animate-fade-in" style={{animationDelay: '0.9s'}}>
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
