
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 -left-10 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block text-gray-900">Creative marketing</span>
            <span className="block text-gray-900">that drives </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              revenue
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            It's your turn to shine when we put the spotlight on your brand. We help 
            get the attention and revenues your business deserves in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Input 
              placeholder="Email" 
              className="flex-1 h-12 border-2 border-gray-300 focus:border-blue-500 transition-colors duration-300"
            />
            <Input 
              placeholder="Phone" 
              className="flex-1 h-12 border-2 border-gray-300 focus:border-blue-500 transition-colors duration-300"
            />
            <Button className="h-12 px-8 bg-black hover:bg-gray-800 text-white transition-all duration-300 hover:scale-105">
              NEXT
            </Button>
          </div>

          {/* Laptop mockup */}
          <div className="relative max-w-2xl mx-auto animate-scale-in" style={{animationDelay: '0.9s'}}>
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="bg-gray-800 rounded-2xl p-6 relative overflow-hidden">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full w-1/2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full w-5/6 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full w-2/3 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
