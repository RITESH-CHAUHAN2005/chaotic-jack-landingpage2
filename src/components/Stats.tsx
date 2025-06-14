
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
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Optimized animated background with faster animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fast-moving floating orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '1.5s'}}></div>
        <div className="absolute top-1/3 right-10 w-40 h-40 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s', animationDuration: '2s'}}></div>
        <div className="absolute bottom-10 left-1/3 w-36 h-36 md:w-56 md:h-56 lg:w-80 lg:h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '2.5s'}}></div>
        
        {/* Fast floating tech elements */}
        <div className="absolute top-16 left-1/4 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-blue-400/50 rounded-lg animate-float rotate-12" style={{animationDuration: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-purple-400/50 rounded-full animate-float" style={{animationDelay: '0.3s', animationDuration: '2s'}}></div>
        <div className="absolute bottom-24 left-16 w-2 h-4 md:w-3 md:h-6 lg:w-4 lg:h-8 bg-indigo-400/50 rounded-sm animate-float" style={{animationDelay: '0.7s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-2 md:w-8 md:h-3 lg:w-10 lg:h-4 bg-cyan-400/50 rounded-lg animate-float" style={{animationDelay: '1s', animationDuration: '2.5s'}}></div>
        
        {/* Enhanced laptop/desktop themed floating elements */}
        <div className="absolute top-32 right-16 w-6 h-4 md:w-8 md:h-6 lg:w-12 lg:h-8 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-t-lg animate-float border-b-2 border-blue-400/60" style={{animationDelay: '0.5s', animationDuration: '2.2s'}}></div>
        <div className="absolute bottom-32 left-12 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-lg animate-float" style={{animationDelay: '0.8s', animationDuration: '2.8s'}}></div>
        
        {/* Additional fast-moving elements */}
        <div className="absolute top-48 left-32 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full animate-float" style={{animationDelay: '0.2s', animationDuration: '1.8s'}}></div>
        <div className="absolute bottom-48 right-32 w-5 h-3 md:w-6 md:h-4 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 rounded-lg animate-float" style={{animationDelay: '1.2s', animationDuration: '2.2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4 lg:mb-6 animate-fade-in">
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto animate-fade-in leading-relaxed px-4" style={{animationDelay: '0.2s'}}>
            Delivering cutting-edge digital solutions that drive real business results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index}
                className="group relative bg-white/8 backdrop-blur-xl border border-white/15 hover:border-white/40 transition-all duration-300 hover:scale-105 animate-fade-in transform-gpu overflow-hidden hover:bg-white/12 cursor-pointer"
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                {/* Fast animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-30 transition-all duration-300`}></div>
                
                {/* Fast glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${stat.color} blur-2xl opacity-50`}></div>
                </div>
                
                {/* Fast floating animation on hover */}
                <div className="absolute inset-0 group-hover:animate-float" style={{animationDuration: '1.5s'}}></div>
                
                <CardContent className="p-3 md:p-4 lg:p-6 xl:p-8 text-center relative z-10">
                  <div className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-3 md:mb-4 lg:mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl border border-white/30 group-hover:shadow-lg group-hover:shadow-cyan-500/30`}>
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 md:mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-300 tracking-tight bg-gradient-to-r from-white to-cyan-100 bg-clip-text">
                    {stat.number}
                  </div>
                  
                  <div className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white mb-1 md:mb-2 lg:mb-3 tracking-wide group-hover:text-cyan-100 transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  <div className="text-xs md:text-sm text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {stat.description}
                  </div>
                </CardContent>
                
                {/* Fast tech-themed corner accents */}
                <div className={`absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br ${stat.color} opacity-40 group-hover:opacity-70 transition-all duration-300 group-hover:w-6 group-hover:h-6 md:group-hover:w-8 md:group-hover:h-8 lg:group-hover:w-12 lg:group-hover:h-12`} style={{clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)'}}></div>
                <div className={`absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-gradient-to-tr ${stat.color} opacity-30 group-hover:opacity-50 transition-all duration-300 group-hover:w-4 group-hover:h-4 md:group-hover:w-6 md:group-hover:h-6 lg:group-hover:w-8 lg:group-hover:h-8`} style={{clipPath: 'polygon(0% 100%, 0% 0%, 100% 100%)'}}></div>
              </Card>
            );
          })}
        </div>

        {/* Fast additional floating tech elements */}
        <div className="absolute top-1/4 left-6 opacity-40 hidden md:block">
          <div className="w-8 h-6 md:w-12 md:h-8 lg:w-16 lg:h-10 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-t-lg border-b-2 border-blue-400/40 animate-float" style={{animationDuration: '2s'}}></div>
          <div className="w-10 h-1 md:w-16 md:h-2 lg:w-20 lg:h-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-b-lg"></div>
        </div>
        
        <div className="absolute bottom-1/4 right-6 opacity-40 hidden md:block" style={{animationDelay: '0.5s'}}>
          <div className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg animate-float border border-purple-400/40" style={{animationDuration: '2.5s'}}></div>
          <div className="w-10 h-1 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-b-lg mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
