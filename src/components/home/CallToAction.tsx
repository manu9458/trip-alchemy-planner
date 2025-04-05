
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Sparkles } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="section-padding container-padding">
      <div className="container mx-auto">
        <div className="relative bg-travel-blue rounded-2xl overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Travel inspiration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-travel-blue/80"></div>
          </div>
          
          <div className="relative z-10 py-16 px-8 md:py-24 md:px-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Planning Your Dream Trip Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our AI create a personalized travel experience that perfectly matches your preferences, budget, and travel style
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-travel-blue hover:bg-white/90">
                <Sparkles className="mr-2 h-5 w-5" />
                Create My Trip
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white/20">
                Browse Destinations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
