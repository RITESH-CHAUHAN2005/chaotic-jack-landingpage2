
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919818303762', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Professional animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Professional geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-indigo-400/60 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* WhatsApp floating button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button 
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Professional brand heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 md:mb-16 animate-fade-in bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent tracking-tight">
            CHAOTIC JACK
          </h1>

          {/* Laptop-themed Marketing Dashboard */}
          <div className="relative max-w-5xl mx-auto animate-scale-in" style={{animationDelay: '0.8s'}}>
            {/* Laptop Base/Stand */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-2 rounded-b-3xl mx-auto max-w-4xl transform hover:scale-105 transition-transform duration-700">
              {/* Laptop Screen */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-2 md:p-4 rounded-3xl shadow-2xl border border-slate-600/50 backdrop-blur-xl relative overflow-hidden">
                {/* Screen bezel with camera */}
                <div className="bg-gradient-to-br from-slate-900 to-black rounded-2xl p-3 md:p-6 relative">
                  {/* Camera dot */}
                  <div className="absolute top-2 md:top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-600 rounded-full"></div>
                  
                  {/* Marketing Dashboard Content */}
                  <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-3 md:p-6 mt-3 md:mt-4 relative overflow-hidden">
                    {/* Browser-like header */}
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="flex space-x-1 md:space-x-2">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                      <div className="text-slate-700 font-bold text-sm md:text-lg animate-fade-in">Digital Marketing Analytics</div>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-300 rounded animate-pulse"></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-300 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      </div>
                    </div>
                    
                    {/* Marketing KPIs with animations */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 md:p-4 rounded-xl border border-blue-200 transform hover:scale-105 transition-all duration-300 animate-slide-up">
                        <div className="flex items-center justify-between mb-2 md:mb-3">
                          <div className="text-blue-700 font-bold text-lg md:text-xl">₹15L+</div>
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded flex items-center justify-center animate-bounce">
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-sm"></div>
                          </div>
                        </div>
                        <div className="text-blue-600 text-xs md:text-sm font-medium mb-1 md:mb-2">Monthly Revenue</div>
                        <div className="w-full bg-blue-200 rounded-full h-1.5 md:h-2">
                          <div className="bg-blue-600 h-1.5 md:h-2 rounded-full w-4/5 animate-pulse"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 md:p-4 rounded-xl border border-purple-200 transform hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
                        <div className="flex items-center justify-between mb-2 md:mb-3">
                          <div className="text-purple-700 font-bold text-lg md:text-xl">50K+</div>
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-600 rounded flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                            <div className="w-2 h-2 md:w-3 md:h-3 border-2 border-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="text-purple-600 text-xs md:text-sm font-medium mb-1 md:mb-2">Website Visitors</div>
                        <div className="w-full bg-purple-200 rounded-full h-1.5 md:h-2">
                          <div className="bg-purple-600 h-1.5 md:h-2 rounded-full w-5/6 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-3 md:p-4 rounded-xl border border-indigo-200 transform hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.4s'}}>
                        <div className="flex items-center justify-between mb-2 md:mb-3">
                          <div className="text-indigo-700 font-bold text-lg md:text-xl">95%</div>
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-indigo-600 rounded flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-sm transform rotate-45"></div>
                          </div>
                        </div>
                        <div className="text-indigo-600 text-xs md:text-sm font-medium mb-1 md:mb-2">Client Success</div>
                        <div className="w-full bg-indigo-200 rounded-full h-1.5 md:h-2">
                          <div className="bg-indigo-600 h-1.5 md:h-2 rounded-full w-11/12 animate-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Marketing Performance Chart with aligned bars and labels */}
                    <div className="space-y-2 md:space-y-4">
                      <div className="bg-gradient-to-t from-slate-100 to-white rounded-lg p-3 md:p-4 relative overflow-hidden">
                        {/* Background grid for professional look */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent opacity-50"></div>
                        
                        {/* Chart with bars aligned to their labels */}
                        <div className="relative z-10">
                          <div className="flex justify-between items-end h-20 md:h-32 mb-2">
                            {/* SEO */}
                            <div className="flex flex-col items-center w-1/6">
                              <div className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg w-4 md:w-8 h-12 md:h-16 animate-bounce shadow-lg transform hover:scale-110 transition-transform" style={{animationDelay: '0.1s'}}></div>
                            </div>
                            
                            {/* Social */}
                            <div className="flex flex-col items-center w-1/6">
                              <div className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg w-4 md:w-8 h-16 md:h-24 animate-bounce shadow-lg transform hover:scale-110 transition-transform" style={{animationDelay: '0.2s'}}></div>
                            </div>
                            
                            {/* PPC */}
                            <div className="flex flex-col items-center w-1/6">
                              <div className="bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg w-4 md:w-8 h-8 md:h-12 animate-bounce shadow-lg transform hover:scale-110 transition-transform" style={{animationDelay: '0.3s'}}></div>
                            </div>
                            
                            {/* Email */}
                            <div className="flex flex-col items-center w-1/6">
                              <div className="bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg w-4 md:w-8 h-14 md:h-20 animate-bounce shadow-lg transform hover:scale-110 transition-transform" style={{animationDelay: '0.4s'}}></div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex flex-col items-center w-1/6">
                              <div className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg w-4 md:w-8 h-10 md:h-18 animate-bounce shadow-lg transform hover:scale-110 transition-transform" style={{animationDelay: '0.5s'}}></div>
                            </div>
                            
                            {/* Web Dev */}
                            <div className="flex flex-col items-center w-1/6">
                              <div className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg w-4 md:w-8 h-18 md:h-28 animate-bounce shadow-lg transform hover:scale-110 transition-transform" style={{animationDelay: '0.6s'}}></div>
                            </div>
                          </div>
                          
                          {/* Labels directly under their respective bars */}
                          <div className="flex justify-between text-xs md:text-sm text-slate-600 font-semibold">
                            <span className="w-1/6 text-center animate-fade-in hover:text-blue-600 transition-colors cursor-pointer">SEO</span>
                            <span className="w-1/6 text-center animate-fade-in hover:text-purple-600 transition-colors cursor-pointer" style={{animationDelay: '0.2s'}}>Social</span>
                            <span className="w-1/6 text-center animate-fade-in hover:text-indigo-600 transition-colors cursor-pointer" style={{animationDelay: '0.4s'}}>PPC</span>
                            <span className="w-1/6 text-center animate-fade-in hover:text-cyan-600 transition-colors cursor-pointer" style={{animationDelay: '0.6s'}}>Email</span>
                            <span className="w-1/6 text-center animate-fade-in hover:text-purple-600 transition-colors cursor-pointer" style={{animationDelay: '0.8s'}}>Content</span>
                            <span className="w-1/6 text-center animate-fade-in hover:text-blue-600 transition-colors cursor-pointer" style={{animationDelay: '1s'}}>Web Dev</span>
                          </div>
                        </div>
                        
                        {/* Floating data points */}
                        <div className="absolute top-2 left-8 w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
                        <div className="absolute top-4 right-12 w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-pulse opacity-70" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>

                    {/* Marketing Tools Icons */}
                    <div className="absolute top-2 md:top-4 right-2 md:right-4 flex space-x-1 md:space-x-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg animate-float">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-sm"></div>
                      </div>
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
                        <div className="w-2 h-2 md:w-3 md:h-3 border-2 border-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Floating marketing elements */}
                    <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 opacity-60">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop keyboard reflection */}
                <div className="absolute bottom-1 md:bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-slate-400/30 to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Floating laptop-themed elements */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-8 h-6 md:w-12 md:h-8 bg-blue-500/20 rounded-t-lg animate-float border-b-2 border-blue-400/30"></div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 -left-8 md:-left-12 w-6 h-4 md:w-8 md:h-6 bg-indigo-500/20 rounded-lg animate-float" style={{animationDelay: '4s'}}></div>
            <div className="absolute top-1/4 -right-6 md:-right-8 w-5 h-5 md:w-6 md:h-6 bg-cyan-500/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
