
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Monitor, Home, TrendingUp } from "lucide-react";

const Stats = () => {
  const stats = [
    { 
      number: "150+", 
      label: "Websites Delivered", 
      icon: Laptop, 
      color: "from-blue-500 to-cyan-500",
      description: "Professional web solutions"
    },
    { 
      number: "98%", 
      label: "Client Satisfaction", 
      icon: Monitor, 
      color: "from-purple-500 to-pink-500",
      description: "Quality guaranteed"
    },
    { 
      number: "24/7", 
      label: "Support Available", 
      icon: Home, 
      color: "from-indigo-500 to-purple-500",
      description: "Always here for you"
    },
    { 
      number: "300%", 
      label: "Business Growth", 
      icon: TrendingUp, 
      color: "from-emerald-500 to-teal-500",
      description: "ROI improvement"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600/15 to-cyan-600/15 rounded-full blur-3xl"></div>
        
        {/* Minimal floating elements */}
        <div className="absolute top-16 left-1/4 w-4 h-4 bg-blue-400/30 rounded-lg"></div>
        <div className="absolute bottom-24 right-1/4 w-6 h-6 bg-purple-400/30 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
            Delivering cutting-edge digital solutions that drive real business results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index}
                className="group relative bg-white/8 backdrop-blur-xl border border-white/15 hover:border-white/40 transition-all duration-200 hover:scale-105 transform-gpu overflow-hidden hover:bg-white/12 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-200`}></div>
                
                <CardContent className="p-4 md:p-6 xl:p-8 text-center relative z-10">
                  <div className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-4 lg:mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-xl border border-white/30`}>
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 lg:mb-3 group-hover:scale-105 transition-transform duration-200">
                    {stat.number}
                  </div>
                  
                  <div className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white mb-2 lg:mb-3 group-hover:text-cyan-100 transition-colors duration-200">
                    {stat.label}
                  </div>
                  
                  <div className="text-xs md:text-sm text-slate-300 group-hover:text-white transition-colors duration-200 font-medium">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
