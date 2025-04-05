
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Loader2, Calendar, MapPin, Users, Plane } from 'lucide-react';

const AIPlanner = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setResult({
        destination: "Japan",
        duration: "10 days",
        travelers: "Couple",
        budget: "$3,000 - $4,000",
        itinerary: [
          {
            day: 1,
            location: "Tokyo",
            activities: ["Arrive at Narita International Airport", "Check in at your hotel in Shinjuku", "Evening walk through Shinjuku for dinner and to see the neon lights"]
          },
          {
            day: 2,
            location: "Tokyo",
            activities: ["Morning visit to Meiji Shrine", "Explore Harajuku and Takeshita Street", "Afternoon in Shibuya with famous crossing", "Evening Tokyo Tower visit"]
          },
          {
            day: 3,
            location: "Tokyo",
            activities: ["Day trip to Nikko to see temples and shrines", "Visit Toshogu Shrine", "See Kegon Falls", "Return to Tokyo for dinner"]
          }
        ],
        recommendations: [
          "Consider purchasing a Japan Rail Pass for cost-effective travel",
          "Book hotels in advance, especially during cherry blossom season",
          "Try local specialties like sushi, ramen, and okonomiyaki"
        ]
      });
      setLoading(false);
    }, 3000);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">AI Trip Planner</h1>
            <p className="text-muted-foreground mb-12 text-xl">
              Tell us about your dream trip and our AI will create a personalized itinerary
            </p>
            
            {!result ? (
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Where would you like to go?</Label>
                      <Input 
                        id="destination" 
                        placeholder="e.g., Japan, Italy, Thailand..." 
                        className="w-full"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="duration">Trip Duration</Label>
                        <Select defaultValue="7">
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3 days</SelectItem>
                            <SelectItem value="5">5 days</SelectItem>
                            <SelectItem value="7">7 days</SelectItem>
                            <SelectItem value="10">10 days</SelectItem>
                            <SelectItem value="14">14 days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="travelers">Who's traveling?</Label>
                        <Select defaultValue="couple">
                          <SelectTrigger>
                            <SelectValue placeholder="Select travelers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="solo">Solo Traveler</SelectItem>
                            <SelectItem value="couple">Couple</SelectItem>
                            <SelectItem value="family">Family</SelectItem>
                            <SelectItem value="friends">Friends</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="budget">Budget ($)</SelectItem>
                            <SelectItem value="medium">Mid-Range ($$)</SelectItem>
                            <SelectItem value="luxury">Luxury ($$$)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="trip-type">Trip Type</Label>
                        <Select defaultValue="culture">
                          <SelectTrigger>
                            <SelectValue placeholder="Select trip type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="adventure">Adventure</SelectItem>
                            <SelectItem value="beach">Beach</SelectItem>
                            <SelectItem value="culture">Cultural</SelectItem>
                            <SelectItem value="foodie">Food & Wine</SelectItem>
                            <SelectItem value="relaxation">Relaxation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="preferences">Additional Preferences</Label>
                      <Textarea 
                        id="preferences" 
                        placeholder="Tell us more about what you're looking for in this trip. Any specific activities, must-see attractions, or preferences?"
                        className="min-h-[100px]"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-travel-blue hover:bg-travel-blue/90" 
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating Your Plan...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Create My Trip Plan
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Your AI-Generated Trip Plan</h2>
                      <Button variant="outline" onClick={() => setResult(null)}>
                        Create New Plan
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                      <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-travel-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Destination</p>
                          <p className="font-medium">{result.destination}</p>
                        </div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-travel-teal" />
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-medium">{result.duration}</p>
                        </div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                        <Users className="h-5 w-5 text-travel-coral" />
                        <div>
                          <p className="text-sm text-muted-foreground">Travelers</p>
                          <p className="font-medium">{result.travelers}</p>
                        </div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                        <Plane className="h-5 w-5 text-travel-navy" />
                        <div>
                          <p className="text-sm text-muted-foreground">Budget</p>
                          <p className="font-medium">{result.budget}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Daily Itinerary</h3>
                      <div className="space-y-4">
                        {result.itinerary.map((day: any) => (
                          <div key={day.day} className="border border-border rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="bg-travel-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">
                                {day.day}
                              </div>
                              <h4 className="font-semibold">{day.location}</h4>
                            </div>
                            <ul className="list-disc pl-6 space-y-1">
                              {day.activities.map((activity: string, i: number) => (
                                <li key={i} className="text-muted-foreground">
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Travel Recommendations</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {result.recommendations.map((rec: string, i: number) => (
                          <li key={i} className="text-muted-foreground">
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <Button className="bg-travel-teal hover:bg-travel-teal/90">Save This Itinerary</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIPlanner;
