
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Sparkles, Users, Globe, Star, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="bg-travel-navy text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Travel background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About TripAlchemy</h1>
              <p className="text-xl text-gray-200 mb-8">
                We're on a mission to transform travel planning with the power of artificial intelligence, making it more personal, efficient, and enjoyable.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  TripAlchemy was born from a simple yet powerful idea: travel planning should be as enjoyable as the journey itself. Our founders, avid travelers themselves, were frustrated with the countless hours spent researching destinations, comparing prices, and creating itineraries.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  In 2023, they assembled a team of travel experts, AI specialists, and passionate travelers to create an intelligent travel planning platform that could understand personal preferences and craft the perfect trip experience.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, TripAlchemy helps thousands of travelers around the world discover new destinations, create personalized itineraries, and make their travel dreams a reality.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="TripAlchemy team" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-travel-teal/20 rounded-lg -z-10"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-travel-blue/20 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine artificial intelligence with human expertise to deliver travel experiences tailored specifically to you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-travel-blue flex items-center justify-center text-white mb-5">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Powered Recommendations</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes thousands of travel options to find the perfect matches for your preferences, budget, and travel style.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-travel-teal flex items-center justify-center text-white mb-5">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Human Touch</h3>
                <p className="text-muted-foreground">
                  Our travel specialists review and enhance AI-generated itineraries, adding insider tips and ensuring every trip is exceptional.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-travel-coral flex items-center justify-center text-white mb-5">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Partnerships</h3>
                <p className="text-muted-foreground">
                  We've partnered with trusted travel providers worldwide to offer you exclusive rates and seamless booking experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at TripAlchemy.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-travel-blue/10 flex items-center justify-center text-travel-blue mx-auto mb-4">
                  <Heart className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Passion for Travel</h3>
                <p className="text-muted-foreground">
                  We believe travel transforms lives and creates meaningful connections across cultures.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-travel-teal/10 flex items-center justify-center text-travel-teal mx-auto mb-4">
                  <Star className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every recommendation, itinerary, and customer interaction.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-travel-coral/10 flex items-center justify-center text-travel-coral mx-auto mb-4">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously improve our technology to make travel planning more intuitive and personalized.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
