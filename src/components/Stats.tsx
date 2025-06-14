
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    { 
      number: "150+", 
      label: "Projects Delivered", 
      icon: TrendingUp, 
      color: "from-blue-500 to-cyan-500",
      description: "Successful launches"
    },
    { 
      number: "98%", 
      label: "Client Satisfaction", 
      icon: Users, 
      color: "from-purple-500 to-pink-500",
      description: "Happy clients"
    },
    { 
      number: "5+", 
      label: "Years Experience", 
      icon: Award, 
      color: "from-indigo-500 to-purple-500",
      description: "Industry expertise"
    },
    { 
      number: "24/7", 
      label: "Premium Support", 
      icon: Clock, 
      color: "from-emerald-500 to-teal-500",
      description: "Always available"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-80 h-80 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-1/3 w-4 h-4 bg-blue-400/30 rotate-45 animate-float"></div>
        <div className="absolute top-64 right-1/4 w-6 h-6 bg-purple-400/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-64 left-20 w-3 h-12 bg-indigo-400/30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-48 right-1/3 w-8 h-8 bg-cyan-400/30 rotate-12 animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Moving grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'float 8s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 animate-fade-in">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.3s'}}>
            Measurable results that drive business growth and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 animate-fade-in transform-gpu overflow-hidden"
                style={{animationDelay: `${0.6 + index * 0.2}s`}}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                {/* Sliding border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
                
                <CardContent className="p-6 md:p-8 text-center relative z-10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-2xl`}>
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-500">
                    {stat.number}
                  </div>
                  
                  <div className="text-lg md:text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                    {stat.description}
                  </div>
                </CardContent>
                
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} style={{clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)'}}></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
