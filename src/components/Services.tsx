
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Brain, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Professional web solutions that grow your business
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full animate-fade-in" style={{animationDelay: '0.4s'}}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Web Development Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 bg-white/80 backdrop-blur-sm hover:scale-105 animate-fade-in hover:animate-float" style={{animationDelay: '0.6s'}}>
            <CardHeader className="text-center pb-6">
              <div className="relative mx-auto mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12">
                  <Monitor className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Web Development</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Modern, responsive websites that convert visitors into customers and drive business growth with cutting-edge technology.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  Responsive Design
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  Fast Loading
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  SEO Optimized
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                  Modern Framework
                </li>
              </ul>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">Starting at ₹15,000</p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white group-hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                  Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* UI/UX Design Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-purple-200 bg-white/80 backdrop-blur-sm hover:scale-105 animate-fade-in hover:animate-float" style={{animationDelay: '0.8s'}}>
            <CardHeader className="text-center pb-6">
              <div className="relative mx-auto mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12">
                  <Brain className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">UI/UX Design</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Beautiful, user-friendly designs that drive results and enhance user engagement with stunning visual experiences.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                  Custom Design
                </li>
                <li className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  User Research
                </li>
                <li className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  Brand Identity
                </li>
                <li className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                  Prototyping
                </li>
              </ul>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">Starting at ₹10,000</p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white group-hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                  Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
