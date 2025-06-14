
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
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-80 h-80 bg-gradient-to-br from-indigo-200/40 to-cyan-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-1/3 w-4 h-4 bg-blue-400/30 rotate-45 animate-float"></div>
        <div className="absolute top-64 right-1/4 w-6 h-6 bg-purple-400/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-64 left-20 w-3 h-12 bg-indigo-400/30 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-48 right-1/3 w-8 h-8 bg-cyan-400/30 rotate-12 animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(59,130,246,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="relative">
            {/* Animated background for heading */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl scale-150 animate-pulse"></div>
            <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-glow">Transform</span> Your Business?
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            Let's create something extraordinary together. Your success story starts here.
          </p>
        </div>

        {/* Enhanced button section with dynamic effects */}
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-500/20 to-purple-600/20 blur-xl scale-110 animate-pulse"></div>
          
          <div className="relative flex flex-col sm:flex-row gap-6 md:gap-8 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-2 border-transparent hover:border-green-400 transition-all duration-300 hover:scale-110 text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto shadow-2xl hover:shadow-green-500/40 transform-gpu relative overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <MessageCircle className="relative mr-3 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">WhatsApp Chat</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleCallClick}
              className="group bg-transparent border-2 border-slate-300 text-slate-700 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-800 hover:text-white hover:border-slate-700 transition-all duration-300 hover:scale-110 text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto shadow-2xl hover:shadow-slate-900/40 transform-gpu relative overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 to-slate-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Phone className="relative mr-3 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">Call Now</span>
            </Button>
          </div>
        </div>

        {/* Enhanced indicator dots with animations */}
        <div className="flex justify-center space-x-4 mt-16 md:mt-20 animate-fade-in" style={{animationDelay: '0.9s'}}>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
