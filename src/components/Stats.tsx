
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Desktop, Home, TrendingUp } from "lucide-react";

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
      icon: Desktop, 
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
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background with floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-gradient-to-br from-indigo-600/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-600/15 to-pink-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating tech elements */}
        <div className="absolute top-20 left-1/4 w-6 h-6 bg-blue-400/40 rounded-lg animate-float rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-purple-400/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-4 h-8 bg-indigo-400/40 rounded-sm animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-10 h-4 bg-cyan-400/40 rounded-lg animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Laptop/Desktop themed floating elements */}
        <div className="absolute top-40 right-20 w-12 h-8 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-t-lg animate-float border-b-2 border-blue-400/50" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-40 left-16 w-10 h-10 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg animate-float" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 animate-fade-in">
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.3s'}}>
            Delivering cutting-edge digital solutions that drive real business results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-700 hover:scale-110 animate-fade-in transform-gpu overflow-hidden hover:bg-white/10 cursor-pointer"
                style={{animationDelay: `${0.6 + index * 0.2}s`}}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-25 transition-all duration-700`}></div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${stat.color} blur-2xl opacity-40`}></div>
                </div>
                
                {/* Floating animation on hover */}
                <div className="absolute inset-0 group-hover:animate-float"></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 shadow-2xl border border-white/20 group-hover:shadow-lg group-hover:shadow-cyan-500/25`}>
                    <IconComponent className="w-10 h-10 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-500 tracking-tight bg-gradient-to-r from-white to-cyan-100 bg-clip-text">
                    {stat.number}
                  </div>
                  
                  <div className="text-xl font-semibold text-white mb-3 tracking-wide group-hover:text-cyan-100 transition-colors duration-500">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-slate-300 group-hover:text-white transition-colors duration-500 font-medium">
                    {stat.description}
                  </div>
                </CardContent>
                
                {/* Tech-themed corner accents */}
                <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${stat.color} opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:w-12 group-hover:h-12`} style={{clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)'}}></div>
                <div className={`absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-tr ${stat.color} opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:w-8 group-hover:h-8`} style={{clipPath: 'polygon(0% 100%, 0% 0%, 100% 100%)'}}></div>
              </Card>
            );
          })}
        </div>

        {/* Additional floating tech elements */}
        <div className="absolute top-1/4 left-8 opacity-30">
          <div className="w-16 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-t-lg border-b-2 border-blue-400/30 animate-float"></div>
          <div className="w-20 h-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-b-lg"></div>
        </div>
        
        <div className="absolute bottom-1/4 right-8 opacity-30" style={{animationDelay: '2s'}}>
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg animate-float border border-purple-400/30"></div>
          <div className="w-16 h-3 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-b-lg mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
