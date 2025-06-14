
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Chaotic Jack
            </h3>
            <p className="text-gray-400 mt-2">Creative marketing that drives revenue</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Chaotic Jack. All rights reserved.</p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
