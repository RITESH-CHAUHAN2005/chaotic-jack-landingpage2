
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
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-100/30 to-indigo-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Professional geometric elements */}
        <div className="absolute top-32 left-1/3 text-blue-200 text-3xl animate-float">⚡</div>
        <div className="absolute top-64 right-1/4 text-purple-200 text-2xl animate-float" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute bottom-64 left-20 text-indigo-200 text-xl animate-float" style={{animationDelay: '4s'}}>💫</div>
        <div className="absolute bottom-48 right-1/3 text-blue-200 text-3xl animate-float" style={{animationDelay: '3s'}}>⭐</div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8">
            Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            Let's discuss how we can elevate your digital presence and drive meaningful results
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="group bg-green-600 hover:bg-green-700 text-white border-2 border-transparent hover:border-green-500 transition-all duration-300 hover:scale-105 text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto shadow-xl hover:shadow-green-500/25 transform-gpu"
          >
            <MessageCircle className="mr-3 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
            WhatsApp Chat
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleCallClick}
            className="group bg-transparent border-2 border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 hover:scale-105 text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto shadow-xl hover:shadow-slate-900/25 transform-gpu"
          >
            <Phone className="mr-3 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
            Call Now
          </Button>
        </div>

        {/* Professional indicator dots */}
        <div className="flex justify-center space-x-4 mt-16 md:mt-20 animate-fade-in" style={{animationDelay: '0.9s'}}>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-300 rounded-full"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-300 rounded-full"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-300 rounded-full"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
