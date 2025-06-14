
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, CheckCircle, X } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (service: string) => {
    setSelectedService(selectedService === service ? null : service);
  };

  const getServicePrice = (service: string) => {
    return service === 'Web Development' ? 15000 : 10000;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-indigo-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        
        {/* Minimal floating elements */}
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-blue-400/20 rotate-45"></div>
        <div className="absolute bottom-32 right-1/3 w-6 h-6 bg-purple-400/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto">
            Cutting-edge solutions that transform businesses and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Web Development Card */}
          <Card 
            className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative hover:scale-[1.02] transform-gpu cursor-pointer"
            onClick={() => handleServiceClick('Web Development')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <CardHeader className="relative z-10 p-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Code className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <CardTitle className="text-2xl lg:text-3xl font-bold mb-3">
                Web Development
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 p-6 pt-0">
              <ul className="space-y-4 text-base lg:text-lg">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Responsive Design & Mobile Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>React & Modern JavaScript Frameworks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Database Integration & API Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>E-commerce & Payment Gateway Integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>SEO Optimization & Performance Tuning</span>
                </li>
              </ul>

              {/* Pricing Display */}
              {selectedService === 'Web Development' && (
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-400/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Starting Price</h4>
                      <p className="text-2xl font-bold text-green-400">₹{getServicePrice('Web Development').toLocaleString()}</p>
                      <p className="text-sm text-slate-300 mt-1">Contact us via WhatsApp to get started!</p>
                    </div>
                    <button 
                      onClick={(e) => {e.stopPropagation(); setSelectedService(null);}}
                      className="text-white hover:text-red-400 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* UI/UX Design Card */}
          <Card 
            className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 text-slate-900 overflow-hidden relative hover:scale-[1.02] transform-gpu border border-slate-200 cursor-pointer"
            onClick={() => handleServiceClick('UI/UX Design')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-purple-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <CardHeader className="relative z-10 p-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Palette className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <CardTitle className="text-2xl lg:text-3xl font-bold mb-3">
                UI/UX Design
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 p-6 pt-0">
              <ul className="space-y-4 text-base lg:text-lg">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>User Research & Persona Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Wireframing & Interactive Prototyping</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Visual Design & Brand Identity</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Mobile App UI & Responsive Design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Usability Testing & Design Systems</span>
                </li>
              </ul>

              {/* Pricing Display */}
              {selectedService === 'UI/UX Design' && (
                <div className="mt-6 p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-400/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">Starting Price</h4>
                      <p className="text-2xl font-bold text-green-600">₹{getServicePrice('UI/UX Design').toLocaleString()}</p>
                      <p className="text-sm text-slate-600 mt-1">Contact us via WhatsApp to get started!</p>
                    </div>
                    <button 
                      onClick={(e) => {e.stopPropagation(); setSelectedService(null);}}
                      className="text-slate-900 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
