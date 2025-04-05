
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ItineraryCard } from '@/components/ui/itinerary-card';

const ITINERARIES = [
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
  },
  {
    id: 'japan-cherry-blossom',
    title: 'Japan Cherry Blossom Tour',
    description: 'Experience the magic of cherry blossom season across Japan\'s most beautiful cities.',
    days: 12,
    image: 'https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 14,
    travelers: 'Couples'
  },
  {
    id: 'morocco-explorer',
    title: 'Morocco Explorer',
    description: 'Journey through the vibrant markets, ancient medinas, and stunning landscapes of Morocco.',
    days: 9,
    image: 'https://images.unsplash.com/photo-1539020140722-a84ac5be57a9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 11,
    travelers: 'Friends'
  }
];

const Itineraries = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-2">Curated Itineraries</h1>
          <p className="text-muted-foreground mb-12 text-xl">
            Browse our hand-crafted travel plans for inspiration
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ITINERARIES.map((itinerary) => (
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Itineraries;
