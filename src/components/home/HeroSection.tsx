
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, PlaneLanding, MapPin } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Travel hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-travel-navy/80 to-travel-navy/50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transform Your Travel Experience with <span className="text-travel-teal">AI</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 md:text-2xl">
            Create personalized trip itineraries in seconds with our AI-powered travel planner
          </p>
          
          {/* Search Form */}
          <div className="bg-white rounded-lg p-4 shadow-lg dark:bg-gray-800">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input 
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-travel-blue focus:border-transparent"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-travel-blue hover:bg-travel-blue/90 text-white px-6 py-3"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Destinations
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-travel-teal hover:bg-travel-teal/90 text-white">
              <PlaneLanding className="mr-2 h-5 w-5" />
              Plan My Trip
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-travel-navy">
              View Popular Itineraries
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
