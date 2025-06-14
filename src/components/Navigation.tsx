
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Chaotic Jack
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">HOME</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">MARKETING SOLUTIONS</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">WHO WE ARE</a>
              <a href="#work" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">WORK</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">CONTACT</a>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-2 border-transparent hover:border-white transition-all duration-300">
            LET'S TALK
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
