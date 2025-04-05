
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Loader2, Calendar, MapPin, Users, Plane, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { generateTripPlan } from '@/lib/gemini';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

const AIPlanner = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [formData, setFormData] = useState({
    destination: '',
    duration: '7',
    travelers: 'couple',
    budget: 'medium',
    tripType: 'culture',
    preferences: '',
  });
  
  const { currentUser } = useAuth();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user is logged in
    if (!currentUser) {
      toast.error('Please log in to use the AI planner', {
        action: {
          label: 'Login',
          onClick: () => window.location.href = '/login',
        },
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const prompt = `Create a detailed ${formData.duration}-day trip plan for ${formData.travelers} traveling to ${formData.destination || 'a destination of your choice'} with a ${formData.budget} budget. 
      They are interested in ${formData.tripType} activities. 
      Additional preferences: ${formData.preferences || 'None specified'}.
      
      Please format your response as a JSON object with the following structure:
      {
        "destination": "Name of destination",
        "duration": "X days",
        "travelers": "Type of travelers",
        "budget": "Budget range in USD",
        "itinerary": [
          {
            "day": 1,
            "location": "City/Area",
            "activities": ["Activity 1", "Activity 2", "Activity 3"]
          }
        ],
        "recommendations": ["Recommendation 1", "Recommendation 2", "Recommendation 3"]
      }`;
      
      const response = await generateTripPlan(prompt);
      
      // Extract JSON from response
      const jsonMatch = response.match(/```json\s*([\s\S]*?)\s*```/) || 
                        response.match(/{[\s\S]*}/) || 
                        null;
                        
      if (jsonMatch) {
        const jsonString = jsonMatch[1] || jsonMatch[0];
        const parsedResult = JSON.parse(jsonString);
        setResult(parsedResult);
      } else {
        // If JSON parsing fails, create a structured object from the text response
        const fallbackResult = {
          destination: formData.destination || "Custom Destination",
          duration: `${formData.duration} days`,
          travelers: formData.travelers,
          budget: formData.budget === 'budget' ? "$1,000 - $2,000" : 
                 formData.budget === 'medium' ? "$2,000 - $4,000" : "$4,000+",
          itinerary: [],
          recommendations: [],
          rawResponse: response
        };
        
        setResult(fallbackResult);
      }
    } catch (error) {
      console.error("Error generating trip plan:", error);
      toast.error("Failed to generate trip plan. Please try again.");
    } finally {
      setLoading(false);
    }
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
            
            {!currentUser && !result && (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-travel-coral h-5 w-5 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Sign in to use the AI planner</h3>
                      <p className="text-sm text-muted-foreground mb-4">Create an account or log in to use all features including saving your trip plans.</p>
                      <div className="flex gap-3">
                        <Link to="/login">
                          <Button variant="outline" className="text-travel-blue border-travel-blue">
                            Log In
                          </Button>
                        </Link>
                        <Link to="/signup">
                          <Button className="bg-travel-blue hover:bg-travel-blue/90">
                            Create Account
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
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
                        value={formData.destination}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="duration">Trip Duration</Label>
                        <Select 
                          value={formData.duration} 
                          onValueChange={(value) => handleSelectChange('duration', value)}
                        >
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
                        <Select 
                          value={formData.travelers} 
                          onValueChange={(value) => handleSelectChange('travelers', value)}
                        >
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
                        <Select 
                          value={formData.budget} 
                          onValueChange={(value) => handleSelectChange('budget', value)}
                        >
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
                        <Label htmlFor="tripType">Trip Type</Label>
                        <Select 
                          value={formData.tripType} 
                          onValueChange={(value) => handleSelectChange('tripType', value)}
                        >
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
                        value={formData.preferences}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-travel-blue hover:bg-travel-blue/90" 
                      disabled={loading || !currentUser}
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
                    
                    {result.itinerary && result.itinerary.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Daily Itinerary</h3>
                        <div className="space-y-4">
                          {result.itinerary.map((day: any, index: number) => (
                            <div key={index} className="border border-border rounded-lg p-4">
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
                    )}
                    
                    {result.recommendations && result.recommendations.length > 0 && (
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
                    )}
                    
                    {result.rawResponse && (
                      <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Complete AI Response</h3>
                        <p className="text-sm whitespace-pre-wrap">{result.rawResponse}</p>
                      </div>
                    )}
                    
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
