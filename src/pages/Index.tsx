
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedDestinations } from '@/components/home/FeaturedDestinations';
import { AIFeatureSection } from '@/components/home/AIFeatureSection';
import { PopularItineraries } from '@/components/home/PopularItineraries';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { CallToAction } from '@/components/home/CallToAction';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedDestinations />
        <AIFeatureSection />
        <PopularItineraries />
        <TestimonialSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
