
import React from 'react';
import { Button } from '@/components/ui/button';
import { DestinationCard } from '@/components/ui/destination-card';
import { ArrowRight } from 'lucide-react';

const FEATURED_DESTINATIONS = [
  {
    id: 'japan',
    title: 'Tokyo & Kyoto Highlights',
    location: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    rating: 4.8,
    price: 1299,
    featured: true
  },
  {
    id: 'bali',
    title: 'Bali Beach Paradise',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3',
    rating: 4.7,
    price: 899
  },
  {
    id: 'rome',
    title: 'Historical Rome Tour',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1696&auto=format&fit=crop&ixlib=rb-4.0.3',
    rating: 4.9,
    price: 1099
  },
  {
    id: 'santorini',
    title: 'Santorini Getaway',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3',
    rating: 4.8,
    price: 1199
  },
  {
    id: 'nyc',
    title: 'New York City Break',
    location: 'United States',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3',
    rating: 4.6,
    price: 999
  }
];

export function FeaturedDestinations() {
  return (
    <section className="section-padding container-padding">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">Featured Destinations</h2>
            <p className="text-muted-foreground mt-2">
              Explore our hand-picked destinations for your next adventure
            </p>
          </div>
          <Button 
            variant="outline" 
            className="hidden md:flex items-center border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
          >
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_DESTINATIONS.map((destination) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              title={destination.title}
              location={destination.location}
              image={destination.image}
              rating={destination.rating}
              price={destination.price}
              featured={destination.featured}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button 
            variant="outline" 
            className="items-center border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
          >
            View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
