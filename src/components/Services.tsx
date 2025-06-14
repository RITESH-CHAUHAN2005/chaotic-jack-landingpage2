
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-teal-200/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-200/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 animate-fade-in">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Transform your digital presence with our expert solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Web Development Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-emerald-500 to-teal-500 text-white overflow-hidden relative animate-fade-in animate-float" style={{animationDelay: '0.4s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10 pb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl md:text-3xl animate-pulse">💻</span>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                Web Development
              </CardTitle>
              <CardDescription className="text-emerald-100 text-sm md:text-base">
                Custom websites that convert visitors into customers
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" style={{animationDelay: '0.5s'}}></span>
                  E-commerce Solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" style={{animationDelay: '1s'}}></span>
                  Performance Optimization
                </li>
              </ul>
            </CardContent>
            {/* Floating animation elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </Card>

          {/* UI/UX Design Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-teal-500 to-cyan-500 text-white overflow-hidden relative animate-fade-in animate-float" style={{animationDelay: '0.6s', animationDuration: '4s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10 pb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                <span className="text-2xl md:text-3xl animate-pulse">🎨</span>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                UI/UX Design
              </CardTitle>
              <CardDescription className="text-teal-100 text-sm md:text-base">
                Beautiful interfaces that users love to interact with
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                  User Research
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" style={{animationDelay: '0.5s'}}></span>
                  Wireframing & Prototyping
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" style={{animationDelay: '1s'}}></span>
                  Visual Design
                </li>
              </ul>
            </CardContent>
            {/* Floating animation elements */}
            <div className="absolute top-6 right-8 w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
            <div className="absolute top-1/2 right-4 w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
