
import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    text: 'TripAlchemy completely changed how I plan my vacations. The AI recommendations were spot on and saved me hours of research!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '2',
    name: 'David Chen',
    location: 'Sydney, Australia',
    text: 'I was skeptical about AI planning my trip at first, but the itinerary was perfect. Every restaurant and activity suggestion matched my interests perfectly.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    text: 'My family vacation to Japan was flawless thanks to TripAlchemy. The day-by-day itinerary had the perfect balance of activities and free time.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
];

export function TestimonialSection() {
  return (
    <section className="bg-travel-navy text-white section-padding container-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how TripAlchemy has transformed travel planning for adventurers around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-travel-sand' : 'text-gray-400'}`} 
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              
              <p className="text-gray-200 mb-6">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
