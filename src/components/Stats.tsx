
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Stats = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Facebook Marketing Campaign */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:scale-105">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold text-gray-800 mb-4">
                Facebook Marketing Campaign
              </CardTitle>
              
              {/* Circular Progress */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#blueGradient)"
                    strokeWidth="3"
                    strokeDasharray="69, 100"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800">690</span>
                </div>
              </div>
              
              <div className="flex justify-center items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Clicks: 690</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                  <span className="text-gray-600">Goal: 1000</span>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Generated Traffic & Leads */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-500 hover:scale-105">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold text-gray-800 mb-4">
                Generated Traffic & Leads
              </CardTitle>
              
              {/* Bar Chart */}
              <div className="h-32 flex items-end justify-center space-x-2 mb-6">
                {[40, 60, 30, 70, 50, 80, 90, 65, 75, 85, 95, 100].map((height, index) => (
                  <div
                    key={index}
                    className={`w-4 rounded-t-sm animate-pulse ${
                      index < 8 ? 'bg-gradient-to-t from-yellow-400 to-orange-500' : 'bg-gradient-to-t from-blue-500 to-purple-600'
                    }`}
                    style={{
                      height: `${height}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">61%</div>
                <div className="text-gray-600 text-sm">Average annual grow rate</div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Stats;
