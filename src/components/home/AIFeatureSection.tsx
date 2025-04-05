
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Map, Calendar, User, MessageSquare, BadgeCheck, Compass } from 'lucide-react';

export function AIFeatureSection() {
  return (
    <section className="bg-travel-blue/5 section-padding container-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-travel-blue/10 text-travel-blue font-medium text-sm">
            <Sparkles className="mr-2 h-4 w-4" />
            Powered by AI
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plan Your Perfect Trip with AI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our artificial intelligence creates personalized travel experiences based on your preferences, budget, and travel style
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-travel-teal flex items-center justify-center text-white">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Smart Destination Suggestions</h3>
                <p className="text-muted-foreground">
                  Get personalized travel destination recommendations based on your interests, budget, and travel dates.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-travel-coral flex items-center justify-center text-white">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Custom Itinerary Creation</h3>
                <p className="text-muted-foreground">
                  Our AI builds day-by-day travel plans with the perfect balance of sightseeing, relaxation, and hidden gems.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-travel-sand flex items-center justify-center text-white">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Real-Time Recommendations</h3>
                <p className="text-muted-foreground">
                  Get up-to-date suggestions for activities, restaurants, and experiences based on real traveler reviews.
                </p>
              </div>
            </div>
            
            <Button size="lg" className="bg-travel-blue hover:bg-travel-blue/90">
              <Sparkles className="mr-2 h-5 w-5" />
              Try AI Trip Planner
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-travel-blue flex items-center justify-center text-white mr-3">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">You</h4>
                </div>
              </div>
              <p className="mb-6">I want to plan a 7-day trip to Japan in April for a couple interested in culture, food, and some nature.</p>
              
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-travel-teal flex items-center justify-center text-white mr-3">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">TripAlchemy AI</h4>
                </div>
              </div>
              
              <div className="space-y-4">
                <p>Here's a personalized 7-day Japan itinerary for April:</p>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Day 1-3: Tokyo</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Explore Shinjuku and Tokyo Metropolitan Building</li>
                    <li>Visit Meiji Shrine and Harajuku</li>
                    <li>Experience teamLab Borderless digital art museum</li>
                    <li>Cherry blossom viewing in Ueno Park (seasonal)</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Day 4-6: Kyoto</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Visit Fushimi Inari Shrine</li>
                    <li>Explore Arashiyama Bamboo Grove</li>
                    <li>Tour Kinkaku-ji (Golden Pavilion)</li>
                    <li>Experience a traditional tea ceremony</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Day 7: Nara Day Trip</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Visit Nara Park and feed the sacred deer</li>
                    <li>See Todai-ji Temple with its Great Buddha</li>
                    <li>Return to Tokyo for departure</li>
                  </ul>
                </div>
                
                <p>Would you like me to adjust this itinerary or add restaurant recommendations?</p>
              </div>
              
              <div className="mt-6 flex">
                <div className="relative flex-1">
                  <input 
                    type="text"
                    placeholder="Ask for more details..."
                    className="w-full pl-4 pr-10 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-travel-teal focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-travel-teal">
                    <MessageSquare className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-travel-sand/20 -z-10 animate-float hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-lg bg-travel-blue/20 -z-10 animate-float animation-delay-2000 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
