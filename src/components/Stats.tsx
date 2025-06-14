
import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "30+", label: "Happy Clients", icon: "😊" },
    { number: "2+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "Support", icon: "🛠️" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-32 h-32 bg-white/5 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-white/5 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
            Our Impact
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Numbers that speak for our dedication and excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{animationDelay: `${0.4 + index * 0.2}s`}}
            >
              <CardContent className="p-4 md:p-6 text-center">
                <div className="text-2xl md:text-3xl mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
