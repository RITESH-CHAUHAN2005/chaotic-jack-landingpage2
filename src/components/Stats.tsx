
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
    { number: "98%", label: "Client Satisfaction", icon: Users, color: "from-purple-500 to-pink-500" },
    { number: "5+", label: "Years Experience", icon: Award, color: "from-indigo-500 to-purple-500" },
    { number: "24/7", label: "Premium Support", icon: Clock, color: "from-emerald-500 to-teal-500" }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Professional grid overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 animate-fade-in">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.3s'}}>
            Measurable results that drive business growth and success
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index}
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 animate-fade-in transform-gpu hover:shadow-2xl hover:shadow-blue-500/20"
                style={{animationDelay: `${0.6 + index * 0.2}s`}}
              >
                <CardContent className="p-6 md:p-8 text-center relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-slate-300 group-hover:text-white transition-colors duration-500 font-medium">
                      {stat.label}
                    </div>
                  </div>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${stat.color} opacity-20 animate-pulse`}></div>
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
