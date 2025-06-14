
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-100/40 to-blue-100/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(156, 146, 172, 0.02) 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8 animate-fade-in">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.3s'}}>
            Enterprise-grade solutions that drive measurable business outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Web Development Card */}
          <Card className="group hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative animate-fade-in hover:scale-105 transform-gpu" style={{animationDelay: '0.6s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Professional background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-32 h-32 border border-white/20 rounded-lg animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border border-white/20 rounded-lg animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <CardHeader className="relative z-10 pb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-blue-600 rounded-sm"></div>
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-500">
                Web Development
              </CardTitle>
              <CardDescription className="text-slate-300 text-base md:text-lg leading-relaxed">
                Scalable web applications built with modern technologies and best practices
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-4 text-base md:text-lg">
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-sm mr-4"></div>
                  <span>React & TypeScript Development</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.1s'}}>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-sm mr-4"></div>
                  <span>API Integration & Backend Services</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.2s'}}>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-sm mr-4"></div>
                  <span>Performance Optimization</span>
                </li>
              </ul>
            </CardContent>
            
            {/* Geometric accent elements */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-blue-400/30 rounded-sm" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400/30 rounded-sm" style={{animationDelay: '3s'}}></div>
          </Card>

          {/* UI/UX Design Card */}
          <Card className="group hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br from-white to-slate-50 text-slate-900 overflow-hidden relative animate-fade-in hover:scale-105 transform-gpu border border-slate-200" style={{animationDelay: '0.9s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Professional background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-6 right-6 w-28 h-28 border border-slate-300 rounded-xl"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 border border-slate-300 rounded-xl" style={{animationDelay: '1s'}}></div>
            </div>

            <CardHeader className="relative z-10 pb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-indigo-600 rounded-full"></div>
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-500">
                UI/UX Design
              </CardTitle>
              <CardDescription className="text-slate-600 text-base md:text-lg leading-relaxed">
                Data-driven design solutions that enhance user engagement and conversion
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-4 text-base md:text-lg">
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm mr-4"></div>
                  <span>User Research & Analysis</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.1s'}}>
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm mr-4"></div>
                  <span>Wireframing & Prototyping</span>
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.2s'}}>
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm mr-4"></div>
                  <span>Design System Development</span>
                </li>
              </ul>
            </CardContent>
            
            {/* Geometric accent elements */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-indigo-400/20 rounded-sm"></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400/20 rounded-sm"></div>
            <div className="absolute top-1/2 right-6 w-2 h-2 bg-slate-400/20 rounded-sm"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
