
import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Calendar, Clock, Users, MapPin, Plane, Utensils, Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample itinerary data matching those in Itineraries.tsx and PopularItineraries.tsx
const ITINERARIES_DATA = [
  {
    id: 'europe-highlights',
    title: 'European Highlights Tour',
    description: 'Experience the best of Europe with this curated tour through Paris, Rome, and Barcelona.',
    longDescription: 'This comprehensive European journey takes you through three iconic cities that showcase the continent\'s rich history, stunning architecture, and vibrant cultures. Begin in romantic Paris, continue to historic Rome, and conclude in beautiful Barcelona. You\'ll experience world-class museums, incredible cuisine, and unforgettable sights throughout this perfectly balanced 10-day adventure.',
    days: 10,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9357713d13?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 12,
    travelers: 'Couples',
    price: 2500,
    rating: 4.8,
    locations: ['Paris, France', 'Rome, Italy', 'Barcelona, Spain'],
    included: ['Guided city tours', 'Museum passes', 'Local transportation', '4-star accommodations', 'Some meals'],
    dayByDay: [
      { day: 1, title: 'Arrival in Paris', description: 'Arrive in Paris and check in to your hotel. Evening welcome dinner.' },
      { day: 2, title: 'Paris Highlights', description: 'Visit the Eiffel Tower and Louvre Museum.' },
      { day: 3, title: 'Paris Exploration', description: 'Explore Montmartre and enjoy a Seine River cruise.' },
      { day: 4, title: 'Travel to Rome', description: 'Morning flight to Rome, afternoon orientation walk.' },
      { day: 5, title: 'Ancient Rome', description: 'Tour the Colosseum and Roman Forum.' },
      { day: 6, title: 'Vatican City', description: 'Guided tour of Vatican Museums and St. Peter\'s Basilica.' },
      { day: 7, title: 'Travel to Barcelona', description: 'Morning flight to Barcelona, afternoon at leisure.' },
      { day: 8, title: 'Barcelona Highlights', description: 'Visit Sagrada Familia and Park Güell.' },
      { day: 9, title: 'Barcelona Exploration', description: 'Explore Gothic Quarter and enjoy a tapas tour.' },
      { day: 10, title: 'Departure', description: 'Transfer to Barcelona airport for departure flights.' },
    ]
  },
  {
    id: 'thailand-adventure',
    title: 'Thailand Adventure',
    description: 'Explore the stunning beaches, vibrant cities, and rich culture of Thailand.',
    longDescription: 'Discover Thailand\'s diverse landscapes and cultural treasures on this carefully crafted 7-day adventure. From the bustling streets of Bangkok to the serene beaches of Phuket, you\'ll experience both the excitement of city life and the tranquility of island paradises. Immerse yourself in Thailand\'s rich heritage through temple visits, cooking classes, and interactions with locals.',
    days: 7,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 8,
    travelers: 'Friends',
    price: 1800,
    rating: 4.7,
    locations: ['Bangkok', 'Chiang Mai', 'Phuket'],
    included: ['Airport transfers', 'Internal flights', 'Hotel accommodations', 'Selected meals', 'Guided excursions'],
    dayByDay: [
      { day: 1, title: 'Bangkok Arrival', description: 'Welcome to Thailand! Check in and evening street food tour.' },
      { day: 2, title: 'Bangkok Temples', description: 'Visit Grand Palace, Wat Pho, and Wat Arun.' },
      { day: 3, title: 'Chiang Mai', description: 'Fly to Chiang Mai, afternoon temple tour.' },
      { day: 4, title: 'Elephant Sanctuary', description: 'Full day visit to ethical elephant sanctuary.' },
      { day: 5, title: 'Thai Cooking Class', description: 'Morning market visit and cooking class, afternoon flight to Phuket.' },
      { day: 6, title: 'Phi Phi Islands', description: 'Full day boat excursion to Phi Phi Islands.' },
      { day: 7, title: 'Departure', description: 'Free morning before departure transfer.' }
    ]
  },
  {
    id: 'us-national-parks',
    title: 'U.S. National Parks Tour',
    description: 'Discover the natural beauty of America\'s most spectacular national parks.',
    longDescription: 'Experience the awe-inspiring landscapes of America\'s most beloved national parks on this comprehensive 14-day journey. From the towering geysers of Yellowstone to the majestic vistas of the Grand Canyon, this itinerary showcases the diverse natural wonders that make the American West so iconic. Ideal for nature lovers and outdoor enthusiasts, this trip combines scenic drives, moderate hikes, and wildlife viewing opportunities.',
    days: 14,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1652&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 15,
    travelers: 'Family',
    price: 3200,
    rating: 4.9,
    locations: ['Yellowstone National Park', 'Grand Teton', 'Arches National Park', 'Bryce Canyon', 'Grand Canyon'],
    included: ['National Park fees', 'Accommodations', 'Transportation between parks', 'Expert guides', 'Some meals'],
    dayByDay: [
      { day: 1, title: 'Jackson Hole Arrival', description: 'Arrival in Jackson, Wyoming and welcome dinner.' },
      { day: 2, title: 'Grand Teton National Park', description: 'Full day exploring Grand Teton National Park.' },
      { day: 3, title: 'Yellowstone Lower Loop', description: 'Old Faithful and Lower Geyser Basin.' },
      { day: 4, title: 'Yellowstone Upper Loop', description: 'Grand Canyon of the Yellowstone and wildlife viewing.' },
      { day: 5, title: 'Travel Day', description: 'Scenic drive to Salt Lake City.' },
      { day: 6, title: 'Arches National Park', description: 'Explore iconic arches and rock formations.' },
      { day: 7, title: 'Canyonlands National Park', description: 'Island in the Sky district exploration.' },
      { day: 8, title: 'Capitol Reef National Park', description: 'Scenic drive and short hikes.' },
      { day: 9, title: 'Bryce Canyon', description: 'Explore the famous hoodoos of Bryce Canyon.' },
      { day: 10, title: 'Zion National Park', description: 'Hike the Narrows or Angel\'s Landing.' },
      { day: 11, title: 'Zion to Grand Canyon', description: 'Travel to North Rim of Grand Canyon.' },
      { day: 12, title: 'Grand Canyon North Rim', description: 'Scenic viewpoints and optional hikes.' },
      { day: 13, title: 'Grand Canyon South Rim', description: 'Travel to South Rim, sunset at Desert View.' },
      { day: 14, title: 'Departure', description: 'Morning at leisure before departure from Phoenix.' }
    ]
  },
  {
    id: 'costa-rica',
    title: 'Costa Rica Explorer',
    description: 'From rainforests to beaches, experience the natural wonders of Costa Rica.',
    longDescription: 'Immerse yourself in the biodiversity and natural beauty of Costa Rica on this 8-day expedition that showcases why this small country is a world leader in ecotourism. Your journey takes you from misty cloud forests to pristine beaches, with opportunities to observe exotic wildlife, experience thrilling adventures, and connect with local culture along the way.',
    days: 8,
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 10,
    travelers: 'Solo',
    price: 1950,
    rating: 4.6,
    locations: ['San Jose', 'Arenal', 'Monteverde', 'Manuel Antonio'],
    included: ['All transportation', 'Hotel accommodations', 'Daily breakfast', 'Selected activities', 'Expert naturalist guides'],
    dayByDay: [
      { day: 1, title: 'Arrive in San Jose', description: 'Welcome to Costa Rica! Transfer to hotel and orientation.' },
      { day: 2, title: 'Arenal Volcano', description: 'Travel to Arenal area, afternoon hot springs visit.' },
      { day: 3, title: 'Adventure Day', description: 'Choose between zipline, hanging bridges, or waterfall hike.' },
      { day: 4, title: 'Monteverde Cloud Forest', description: 'Travel to Monteverde, afternoon coffee plantation tour.' },
      { day: 5, title: 'Cloud Forest Exploration', description: 'Guided cloud forest hike and wildlife spotting.' },
      { day: 6, title: 'Manuel Antonio', description: 'Travel to Manuel Antonio, afternoon beach time.' },
      { day: 7, title: 'Manuel Antonio National Park', description: 'Guided tour in national park, wildlife viewing.' },
      { day: 8, title: 'Return to San Jose & Departure', description: 'Morning at leisure before return to San Jose for departure.' }
    ]
  },
  {
    id: 'japan-cherry-blossom',
    title: 'Japan Cherry Blossom Tour',
    description: 'Experience the magic of cherry blossom season across Japan\'s most beautiful cities.',
    longDescription: 'Time your visit to Japan perfectly with this curated 12-day journey during the breathtaking cherry blossom (sakura) season. This trip combines Japan\'s cultural highlights with the ethereal beauty of the spring blossoms. From ancient temples to modern cityscapes, you\'ll discover the unique harmony between tradition and innovation that defines contemporary Japanese culture.',
    days: 12,
    image: 'https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 14,
    travelers: 'Couples',
    price: 4500,
    rating: 4.9,
    locations: ['Tokyo', 'Hakone', 'Kyoto', 'Osaka', 'Hiroshima'],
    included: ['Japan Rail Pass', 'Hotel accommodations', 'Selected meals', 'Cultural experiences', 'English-speaking guides'],
    dayByDay: [
      { day: 1, title: 'Arrive in Tokyo', description: 'Arrival in Tokyo, transfer to hotel.' },
      { day: 2, title: 'Tokyo Exploration', description: 'Visit Meiji Shrine, Harajuku, and Shibuya.' },
      { day: 3, title: 'Tokyo Cherry Blossoms', description: 'Ueno Park and Sumida River cherry blossom viewing.' },
      { day: 4, title: 'Hakone Day Trip', description: 'Mt. Fuji views, Lake Ashi cruise, and hot springs.' },
      { day: 5, title: 'Travel to Kyoto', description: 'Bullet train to Kyoto, evening Gion district walk.' },
      { day: 6, title: 'Kyoto Temples', description: 'Visit Kinkaku-ji and Arashiyama Bamboo Grove.' },
      { day: 7, title: 'Kyoto Cherry Blossoms', description: 'Philosopher\'s Path and Maruyama Park cherry blossoms.' },
      { day: 8, title: 'Nara Day Trip', description: 'Visit ancient temples and feed the famous deer.' },
      { day: 9, title: 'Hiroshima', description: 'Day trip to Hiroshima Peace Memorial Park.' },
      { day: 10, title: 'Miyajima Island', description: 'Visit the floating torii gate and sacred island.' },
      { day: 11, title: 'Osaka', description: 'Explore Osaka Castle and Dotonbori district.' },
      { day: 12, title: 'Departure', description: 'Transfer to Osaka airport for departure.' }
    ]
  },
  {
    id: 'morocco-explorer',
    title: 'Morocco Explorer',
    description: 'Journey through the vibrant markets, ancient medinas, and stunning landscapes of Morocco.',
    longDescription: 'From the winding streets of ancient medinas to the vast expanse of the Sahara Desert, this 9-day Moroccan adventure delivers a perfect blend of cultural immersion and natural wonder. Experience the vibrant chaos of Marrakech\'s souks, the blue-washed buildings of Chefchaouen, and the endless dunes of the Sahara. Every moment in Morocco engages the senses with vivid colors, exotic spices, and the warm hospitality of its people.',
    days: 9,
    image: 'https://images.unsplash.com/photo-1539020140722-a84ac5be57a9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3',
    activities: 11,
    travelers: 'Friends',
    price: 1650,
    rating: 4.7,
    locations: ['Marrakech', 'Fes', 'Chefchaouen', 'Merzouga (Sahara)'],
    included: ['Private transportation', 'Riad accommodations', 'Daily breakfast', 'Camel trek', 'Local guides'],
    dayByDay: [
      { day: 1, title: 'Arrive in Marrakech', description: 'Welcome to Morocco! Transfer to traditional riad and orientation walk.' },
      { day: 2, title: 'Marrakech Exploration', description: 'Visit Bahia Palace, Koutoubia Mosque, and Jemaa el-Fnaa square.' },
      { day: 3, title: 'Atlas Mountains', description: 'Day trip to the High Atlas Mountains and Berber villages.' },
      { day: 4, title: 'Travel to Fes', description: 'Scenic drive to Fes, passing through Middle Atlas mountains.' },
      { day: 5, title: 'Fes Medina', description: 'Full day exploring the ancient Fes medina with local guide.' },
      { day: 6, title: 'Chefchaouen', description: 'Travel to the blue city of Chefchaouen, afternoon exploration.' },
      { day: 7, title: 'Sahara Desert', description: 'Long drive to Merzouga, evening camel trek into the Sahara and night in desert camp.' },
      { day: 8, title: 'Return to Marrakech', description: 'Morning desert sunrise before long drive back to Marrakech.' },
      { day: 9, title: 'Departure', description: 'Free time for shopping before departure transfer.' }
    ]
  }
];

const ItineraryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const itinerary = ITINERARIES_DATA.find(item => item.id === id);

  if (!itinerary) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Itinerary Not Found</h1>
            <p>We couldn't find the itinerary you're looking for.</p>
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
        {/* Hero Section */}
        <div className="relative w-full h-96">
          <img 
            src={itinerary.image} 
            alt={itinerary.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold text-white mb-2">{itinerary.title}</h1>
              <div className="flex items-center space-x-4 text-white">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{itinerary.locations.join(' • ')}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{itinerary.days} Days</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>Best for: {itinerary.travelers}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-700 mb-6">{itinerary.longDescription}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Calendar className="h-5 w-5 mx-auto mb-2 text-travel-blue" />
                    <p className="text-sm font-medium">{itinerary.days} Days</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Clock className="h-5 w-5 mx-auto mb-2 text-travel-teal" />
                    <p className="text-sm font-medium">{itinerary.activities} Activities</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Users className="h-5 w-5 mx-auto mb-2 text-travel-coral" />
                    <p className="text-sm font-medium">{itinerary.travelers}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <MapPin className="h-5 w-5 mx-auto mb-2 text-travel-navy" />
                    <p className="text-sm font-medium">{itinerary.locations.length} Destinations</p>
                  </div>
                </div>
              </section>
              
              {/* What's Included */}
              <section>
                <h2 className="text-2xl font-bold mb-4">What's Included</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {itinerary.included.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-travel-teal/20 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-travel-teal">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
              
              {/* Day by Day Itinerary */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-6">
                  {itinerary.dayByDay.map((day) => (
                    <div key={day.day} className="relative pl-8 pb-6">
                      <div className="absolute left-0 top-0 h-full">
                        <div className="h-6 w-6 rounded-full bg-travel-blue text-white text-sm flex items-center justify-center">
                          {day.day}
                        </div>
                        {day.day !== itinerary.dayByDay.length && (
                          <div className="h-full w-0.5 bg-gray-200 mx-auto mt-1"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{day.title}</h3>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-travel-blue">
                    ${itinerary.price}
                    <span className="text-lg font-normal text-gray-500">/person</span>
                  </div>
                  <div className="flex items-center justify-center mt-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(itinerary.rating) ? 'fill-current' : 'stroke-current fill-none'}`}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-700">{itinerary.rating}/5</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{itinerary.days} days, {itinerary.days - 1} nights</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Plane className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Start/End</p>
                      <p className="font-medium">{itinerary.locations[0]} / {itinerary.locations[itinerary.locations.length - 1]}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Meals</p>
                      <p className="font-medium">Some meals included</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Accommodation</p>
                      <p className="font-medium">Hotels included</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <Button className="w-full bg-travel-blue hover:bg-travel-blue/90 text-white">
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Ask a Question
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ItineraryDetails;
