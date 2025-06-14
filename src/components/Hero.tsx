
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919818303762', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 -left-10 w-48 h-48 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Bold Chaotic Jack heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 animate-fade-in bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            CHAOTIC JACK
          </h1>

          {/* Marketing Innovation Figure */}
          <div className="relative max-w-4xl mx-auto animate-scale-in" style={{animationDelay: '0.6s'}}>
            <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {/* Marketing Dashboard Mockup */}
              <div className="bg-white rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-600 font-medium">Marketing Analytics</div>
                </div>
                
                {/* Marketing Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 p-4 rounded-lg">
                    <div className="text-emerald-700 font-bold text-2xl">150%</div>
                    <div className="text-emerald-600 text-sm">ROI Growth</div>
                  </div>
                  <div className="bg-gradient-to-r from-teal-100 to-teal-200 p-4 rounded-lg">
                    <div className="text-teal-700 font-bold text-2xl">2.5M</div>
                    <div className="text-teal-600 text-sm">Reach</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-100 to-cyan-200 p-4 rounded-lg">
                    <div className="text-cyan-700 font-bold text-2xl">85%</div>
                    <div className="text-cyan-600 text-sm">Conversion</div>
                  </div>
                </div>

                {/* Marketing Graph */}
                <div className="space-y-3">
                  <div className="h-4 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full w-full animate-pulse"></div>
                  <div className="h-4 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full w-4/5 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="h-4 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full w-3/4 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full w-5/6 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>

                {/* Marketing Icons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📊</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🚀</span>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full animate-bounce"></div>
                </div>
                <div className="absolute top-1/2 right-8">
                  <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Decorative elements around the figure */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
