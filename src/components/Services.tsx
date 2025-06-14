
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (service: string, price: number) => {
    setSelectedService(service);
    alert(`${service} - Starting Price: ₹${price.toLocaleString()}\n\nContact us via WhatsApp to get started!`);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Enhanced animated background with more elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large moving gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-200/40 to-cyan-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Enhanced floating geometric elements */}
        <div className="absolute top-32 left-1/4 w-6 h-6 bg-blue-400/30 rotate-45 animate-float"></div>
        <div className="absolute top-64 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-64 left-1/3 w-4 h-16 bg-indigo-400/30 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-48 right-1/4 w-10 h-10 bg-cyan-400/30 rotate-12 animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Additional animated components */}
        <div className="absolute top-40 right-40 w-5 h-5 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-7 h-7 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full animate-float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-60 left-60 w-3 h-8 bg-gradient-to-t from-indigo-500/40 to-cyan-500/40 rounded-sm animate-float" style={{animationDelay: '3.5s'}}></div>
        
        {/* Animated mesh pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(59,130,246,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'float 8s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Moving light rays with enhanced animation */}
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-0 w-full h-1 bg-gradient-to-l from-transparent via-purple-400/40 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8 animate-fade-in">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.3s'}}>
            Cutting-edge solutions that transform businesses and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Web Development Card */}
          <Card 
            className="group hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative animate-fade-in hover:scale-105 transform-gpu cursor-pointer" 
            style={{animationDelay: '0.6s'}}
            onClick={() => handleServiceClick('Web Development', 15000)}
          >
            {/* Dynamic background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 to-purple-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Animated circuit pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-32 h-32 border border-white/20 rounded-lg animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border border-white/20 rounded-lg animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-8 w-16 h-16 border border-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Flowing particles */}
            <div className="absolute top-8 left-8 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-16 right-16 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-16 left-16 w-3 h-3 bg-cyan-400/40 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>

            <CardHeader className="relative z-10 pb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                <Code className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-500">
                Web Development
              </CardTitle>
              <CardDescription className="text-slate-300 text-base md:text-lg leading-relaxed">
                Professional websites and web applications built with modern technologies
              </CardDescription>
              <div className="mt-4 text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                Starting from ₹15,000
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-4 text-base md:text-lg">
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Responsive Design & Mobile Optimization</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.1s'}}>
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>React & Modern JavaScript Frameworks</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.2s'}}>
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Database Integration & API Development</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.3s'}}>
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>E-commerce & Payment Gateway Integration</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.4s'}}>
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>SEO Optimization & Performance Tuning</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 font-semibold">
                <span>Click to get quote</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </CardContent>
          </Card>

          {/* UI/UX Design Card */}
          <Card 
            className="group hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br from-white to-slate-50 text-slate-900 overflow-hidden relative animate-fade-in hover:scale-105 transform-gpu border border-slate-200 cursor-pointer" 
            style={{animationDelay: '0.9s'}}
            onClick={() => handleServiceClick('UI/UX Design', 10000)}
          >
            {/* Dynamic background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-purple-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Design grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-6 right-6 w-28 h-28 border border-slate-300 rounded-xl"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 border border-slate-300 rounded-xl" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 left-8 w-12 h-12 border border-slate-200 rounded-lg animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Color palette dots */}
            <div className="absolute top-12 left-12 w-2 h-2 bg-indigo-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

            <CardHeader className="relative z-10 pb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                <Palette className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-500">
                UI/UX Design
              </CardTitle>
              <CardDescription className="text-slate-600 text-base md:text-lg leading-relaxed">
                Beautiful and intuitive designs that enhance user experience and engagement
              </CardDescription>
              <div className="mt-4 text-2xl font-bold text-purple-600 group-hover:text-purple-500 transition-colors">
                Starting from ₹10,000
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-4 text-base md:text-lg">
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>User Research & Persona Development</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.1s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Wireframing & Interactive Prototyping</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.2s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Visual Design & Brand Identity</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.3s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Mobile App UI & Responsive Design</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.4s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Usability Testing & Design Systems</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center text-purple-600 group-hover:text-purple-500 font-semibold">
                <span>Click to get quote</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
