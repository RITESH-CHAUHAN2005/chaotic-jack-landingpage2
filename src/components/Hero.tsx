
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
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Professional brand heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-16 animate-fade-in bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent tracking-tight">
            CHAOTIC JACK
          </h1>

          {/* Professional analytics dashboard */}
          <div className="relative max-w-5xl mx-auto animate-scale-in" style={{animationDelay: '0.8s'}}>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-700/50 backdrop-blur-xl transform hover:scale-105 transition-transform duration-700">
              {/* Professional business dashboard */}
              <div className="bg-slate-50 rounded-2xl p-8 relative overflow-hidden">
                {/* Header with navigation dots */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-slate-700 font-semibold text-lg">Business Analytics Dashboard</div>
                </div>
                
                {/* Professional KPI metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-blue-700 font-bold text-2xl">$2.4M</div>
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    <div className="text-blue-600 text-sm font-medium mb-2">Annual Revenue</div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-purple-700 font-bold text-2xl">127K</div>
                      <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-purple-600 text-sm font-medium mb-2">Active Users</div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-indigo-700 font-bold text-2xl">98.7%</div>
                      <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                      </div>
                    </div>
                    <div className="text-indigo-600 text-sm font-medium mb-2">Uptime</div>
                    <div className="w-full bg-indigo-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                </div>

                {/* Professional data visualization */}
                <div className="space-y-4">
                  <div className="flex items-end justify-center space-x-3 h-32 bg-gradient-to-t from-slate-100 to-white rounded-lg p-4">
                    <div className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md w-8 h-16"></div>
                    <div className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-md w-8 h-24"></div>
                    <div className="bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-md w-8 h-12"></div>
                    <div className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md w-8 h-28"></div>
                    <div className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-md w-8 h-20"></div>
                    <div className="bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-md w-8 h-18"></div>
                    <div className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md w-8 h-22"></div>
                  </div>
                  
                  {/* Timeline indicators */}
                  <div className="flex justify-center space-x-8 text-xs text-slate-500 font-medium">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>

                {/* Professional status indicators */}
                <div className="absolute top-6 right-6 flex space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional floating geometric elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/20 rounded-lg rotate-12 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-purple-500/20 rounded-lg -rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 -left-12 w-6 h-6 bg-indigo-500/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '4s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
