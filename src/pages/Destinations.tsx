
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DestinationCard } from '@/components/ui/destination-card';

const DESTINATIONS = [
  {
    id: 'japan',
    title: 'Tokyo & Kyoto Highlights',
    location: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    rating: 4.8,
    price: 1299
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
  },
  {
    id: 'paris',
    title: 'Romantic Paris Getaway',
    location: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3',
    rating: 4.7,
    price: 1150
  }
];

const Destinations = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-2">Explore Destinations</h1>
          <p className="text-muted-foreground mb-12 text-xl">
            Discover amazing places around the world
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.map((destination) => (
              <DestinationCard
                key={destination.id}
                id={destination.id}
                title={destination.title}
                location={destination.location}
                image={destination.image}
                rating={destination.rating}
                price={destination.price}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;
