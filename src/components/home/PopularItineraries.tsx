
import React from 'react';
import { Button } from '@/components/ui/button';
import { ItineraryCard } from '@/components/ui/itinerary-card';
import { ArrowRight } from 'lucide-react';

const POPULAR_ITINERARIES = [
  {
    id: 'europe-highlights',
    title: 'European Highlights Tour',
    description: 'Experience the best of Europe with this curated tour through Paris, Rome, and Barcelona.',
    days: 10,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9357713d13?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 12,
    travelers: 'Couples'
  },
  {
    id: 'thailand-adventure',
    title: 'Thailand Adventure',
    description: 'Explore the stunning beaches, vibrant cities, and rich culture of Thailand.',
    days: 7,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 8,
    travelers: 'Friends'
  },
  {
    id: 'us-national-parks',
    title: 'U.S. National Parks Tour',
    description: 'Discover the natural beauty of America\'s most spectacular national parks.',
    days: 14,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1652&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 15,
    travelers: 'Family'
  },
  {
    id: 'costa-rica',
    title: 'Costa Rica Explorer',
    description: 'From rainforests to beaches, experience the natural wonders of Costa Rica.',
    days: 8,
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 10,
    travelers: 'Solo'
  }
];

export function PopularItineraries() {
  return (
    <section className="section-padding container-padding">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">Popular Itineraries</h2>
            <p className="text-muted-foreground mt-2">
              Explore curated trip plans loved by our travelers
            </p>
          </div>
          <Button 
            variant="outline" 
            className="hidden md:flex items-center border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
          >
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_ITINERARIES.map((itinerary) => (
            <ItineraryCard
              key={itinerary.id}
              id={itinerary.id}
              title={itinerary.title}
              description={itinerary.description}
              days={itinerary.days}
              image={itinerary.image}
              activities={itinerary.activities}
              travelers={itinerary.travelers}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button 
            variant="outline" 
            className="items-center border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
          >
            View All Itineraries <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
