
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919818303762', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Simplified animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Reduced floating elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/40 rounded-lg animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-cyan-400/40 rounded-lg animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* WhatsApp floating button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button 
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-xl transition-colors duration-200"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Optimized brand heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent tracking-tight">
            CHAOTIC JACK
          </h1>

          {/* Simplified value proposition */}
          <div className="mb-8 md:mb-12">
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto font-medium mb-4">
              Digital Solutions That Drive Growth
            </p>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Expert website & mobile app development for modern businesses
            </p>
          </div>

          {/* Simplified Dashboard */}
          <div className="relative max-w-4xl mx-auto">
            {/* Laptop Base */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-2 rounded-b-3xl mx-auto">
              {/* Laptop Screen */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-3 md:p-4 rounded-3xl shadow-xl border border-slate-600/50">
                {/* Screen Content */}
                <div className="bg-gradient-to-br from-slate-900 to-black rounded-2xl p-4 md:p-6">
                  {/* Camera dot */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-600 rounded-full"></div>
                  
                  {/* Dashboard Content */}
                  <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-4 md:p-6 mt-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-slate-700 font-bold text-lg">Business Analytics</div>
                    </div>
                    
                    {/* KPIs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                        <div className="text-blue-700 font-bold text-xl">₹15L+</div>
                        <div className="text-blue-600 text-sm font-medium">Monthly Revenue</div>
                        <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                          <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                        <div className="text-purple-700 font-bold text-xl">50K+</div>
                        <div className="text-purple-600 text-sm font-medium">Visitors</div>
                        <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                          <div className="bg-purple-600 h-2 rounded-full w-5/6"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl border border-indigo-200">
                        <div className="text-indigo-700 font-bold text-xl">95%</div>
                        <div className="text-indigo-600 text-sm font-medium">Success Rate</div>
                        <div className="w-full bg-indigo-200 rounded-full h-2 mt-2">
                          <div className="bg-indigo-600 h-2 rounded-full w-11/12"></div>
                        </div>
                      </div>
                    </div>

                    {/* Simplified Chart */}
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-4 border border-slate-200/50">
                      <div className="flex justify-between items-end h-24 mb-2">
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg w-6 h-12"></div>
                          <span className="text-xs text-slate-600 font-medium mt-1">SEO</span>
                        </div>
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg w-6 h-16"></div>
                          <span className="text-xs text-slate-600 font-medium mt-1">Social</span>
                        </div>
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg w-6 h-8"></div>
                          <span className="text-xs text-slate-600 font-medium mt-1">PPC</span>
                        </div>
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg w-6 h-14"></div>
                          <span className="text-xs text-slate-600 font-medium mt-1">Email</span>
                        </div>
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg w-6 h-10"></div>
                          <span className="text-xs text-slate-600 font-medium mt-1">Content</span>
                        </div>
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg w-6 h-20"></div>
                          <span className="text-xs text-slate-600 font-medium mt-1">Web Dev</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
