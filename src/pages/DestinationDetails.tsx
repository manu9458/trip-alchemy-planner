
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Calendar, Star, Users, Plane, Utensils, MapIcon, Camera, Info, Award } from 'lucide-react';

const mockDestinations = [
  {
    id: "bali-indonesia",
    title: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.8,
    price: 1200,
    description: "Known as the Island of the Gods, Bali appeals to travelers with its lush terraced rice fields, pristine beaches, and vibrant spiritual culture. Experience world-class surfing, diving, and yoga retreats.",
    activities: [
      "Visit the Sacred Monkey Forest Sanctuary",
      "Explore the Tegalalang Rice Terraces",
      "Experience traditional Balinese dance performances",
      "Relax on Kuta Beach or Seminyak Beach",
      "Visit ancient temples like Tanah Lot and Uluwatu"
    ],
    accommodations: [
      {
        name: "Four Seasons Resort Bali at Sayan",
        price: 550,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        name: "Padma Resort Ubud",
        price: 320,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        name: "Ayana Resort and Spa",
        price: 480,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
      }
    ],
    restaurants: [
      {
        name: "Locavore",
        cuisine: "Modern Indonesian",
        price: "$$$$",
        rating: 4.7
      },
      {
        name: "Warung Babi Guling Ibu Oka",
        cuisine: "Balinese",
        price: "$",
        rating: 4.5
      },
      {
        name: "La Lucciola",
        cuisine: "Mediterranean",
        price: "$$$",
        rating: 4.6
      }
    ],
    bestTimeToVisit: "April to October (dry season)",
    averageTemperature: "26°C to 33°C (79°F to 91°F)"
  },
  {
    id: "santorini-greece",
    title: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.9,
    price: 1800,
    description: "With its iconic white-washed buildings perched on cliffs overlooking the azure Aegean Sea, Santorini is one of the most visually stunning Greek islands. Famous for spectacular sunsets viewed from the village of Oia, this volcanic island offers black and red sand beaches, ancient ruins, and world-class wineries.",
    activities: [
      "Watch the sunset from Oia",
      "Visit the ancient ruins of Akrotiri",
      "Relax on Red Beach or Black Beach",
      "Go on a catamaran cruise around the caldera",
      "Tour local wineries and taste volcanic wines"
    ],
    accommodations: [
      {
        name: "Andronis Luxury Suites",
        price: 750,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        name: "Mystique, a Luxury Collection Hotel",
        price: 680,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        name: "Astra Suites",
        price: 520,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
      }
    ],
    restaurants: [
      {
        name: "Lycabettus Restaurant",
        cuisine: "Mediterranean",
        price: "$$$$",
        rating: 4.8
      },
      {
        name: "Metaxi Mas",
        cuisine: "Greek",
        price: "$$",
        rating: 4.9
      },
      {
        name: "Argo Restaurant",
        cuisine: "Seafood",
        price: "$$$",
        rating: 4.7
      }
    ],
    bestTimeToVisit: "Late April to early November",
    averageTemperature: "15°C to 29°C (59°F to 84°F)"
  }
];

const DestinationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundDestination = mockDestinations.find(dest => dest.id === id);
    setDestination(foundDestination);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-travel-blue"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
              <p className="mb-8">We couldn't find the destination you're looking for.</p>
              <Link to="/destinations">
                <Button className="bg-travel-blue hover:bg-travel-blue/90">
                  Browse All Destinations
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="relative h-[50vh] md:h-[60vh]">
          <img 
            src={destination.image} 
            alt={destination.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <div className="container mx-auto">
              <div className="flex items-center mb-2 text-travel-sand">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{destination.location}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{destination.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="text-yellow-400 h-5 w-5 mr-1" fill="currentColor" />
                  <span className="font-medium">{destination.rating}/5</span>
                </div>
                <div className="text-white/80 flex items-center">
                  <Calendar className="h-5 w-5 mr-1" />
                  <span>{destination.bestTimeToVisit}</span>
                </div>
                <div className="text-white/80 flex items-center">
                  <Plane className="h-5 w-5 mr-1" />
                  <span>Starting from ${destination.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About {destination.title}</h2>
                <p className="text-gray-700 leading-relaxed">{destination.description}</p>
              </div>
              
              <Tabs defaultValue="activities">
                <TabsList className="w-full border-b mb-6">
                  <TabsTrigger value="activities" className="flex-1 text-base">
                    <Camera className="h-4 w-4 mr-2" /> Activities
                  </TabsTrigger>
                  <TabsTrigger value="accommodations" className="flex-1 text-base">
                    <Users className="h-4 w-4 mr-2" /> Accommodations
                  </TabsTrigger>
                  <TabsTrigger value="dining" className="flex-1 text-base">
                    <Utensils className="h-4 w-4 mr-2" /> Dining
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="activities" className="space-y-4">
                  <h3 className="text-xl font-semibold">Top Activities in {destination.title}</h3>
                  <ul className="space-y-2">
                    {destination.activities.map((activity: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-travel-teal mr-3 mt-0.5 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="accommodations" className="space-y-4">
                  <h3 className="text-xl font-semibold">Where to Stay</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.accommodations.map((accommodation: any, index: number) => (
                      <Card key={index} className="overflow-hidden">
                        <img 
                          src={accommodation.image} 
                          alt={accommodation.name} 
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-1">{accommodation.name}</h4>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Star className="text-yellow-400 h-4 w-4 mr-1" fill="currentColor" />
                              <span>{accommodation.rating}/5</span>
                            </div>
                            <span className="font-bold">${accommodation.price}/night</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="dining" className="space-y-4">
                  <h3 className="text-xl font-semibold">Where to Eat</h3>
                  <div className="space-y-3">
                    {destination.restaurants.map((restaurant: any, index: number) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold">{restaurant.name}</h4>
                            <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center">
                              <Star className="text-yellow-400 h-4 w-4 mr-1" fill="currentColor" />
                              <span>{restaurant.rating}/5</span>
                            </div>
                            <p className="text-sm">{restaurant.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Plan Your Trip</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="travel-dates" className="block text-sm font-medium">Travel Dates</label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="date"
                          id="travel-dates-from"
                          className="border rounded-md p-2 w-full"
                        />
                        <input
                          type="date"
                          id="travel-dates-to"
                          className="border rounded-md p-2 w-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="travelers" className="block text-sm font-medium">Travelers</label>
                      <select id="travelers" className="border rounded-md p-2 w-full">
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults</option>
                        <option value="2-1">2 Adults, 1 Child</option>
                        <option value="2-2">2 Adults, 2 Children</option>
                      </select>
                    </div>
                    <Button className="w-full bg-travel-teal hover:bg-travel-teal/90">
                      Check Availability
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Travel Information</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-travel-blue mb-1">
                        <Calendar className="h-4 w-4" />
                        <h4 className="font-semibold">Best Time to Visit</h4>
                      </div>
                      <p className="text-sm">{destination.bestTimeToVisit}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-travel-blue mb-1">
                        <Info className="h-4 w-4" />
                        <h4 className="font-semibold">Average Temperature</h4>
                      </div>
                      <p className="text-sm">{destination.averageTemperature}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Need Help Planning?</h3>
                  <p className="text-sm mb-4">Our AI can create a personalized itinerary just for you!</p>
                  <Link to="/ai-planner">
                    <Button className="w-full bg-travel-blue hover:bg-travel-blue/90">
                      Use AI Planner
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationDetails;
