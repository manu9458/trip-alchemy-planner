
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users } from 'lucide-react';

interface ItineraryCardProps {
  id: string;
  title: string;
  description: string;
  days: number;
  image: string;
  activities: number;
  travelers: string;
}

export function ItineraryCard({
  id,
  title,
  description,
  days,
  image,
  activities,
  travelers,
}: ItineraryCardProps) {
  return (
    <div className="travel-card flex flex-col h-full">
      <Link to={`/itineraries/${id}`} className="flex-1">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="travel-card-image"
          />
        </div>
        
        <div className="p-5 flex-1">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="flex flex-col items-center p-2 bg-muted/50 rounded-lg">
              <Calendar className="h-4 w-4 text-travel-blue mb-1" />
              <span className="text-xs font-medium">{days} Days</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-muted/50 rounded-lg">
              <Clock className="h-4 w-4 text-travel-teal mb-1" />
              <span className="text-xs font-medium">{activities} Activities</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-muted/50 rounded-lg">
              <Users className="h-4 w-4 text-travel-coral mb-1" />
              <span className="text-xs font-medium">{travelers}</span>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="p-5 pt-0">
        <Link to={`/itineraries/${id}`}>
          <Button variant="outline" className="w-full border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white">
            View Itinerary
          </Button>
        </Link>
      </div>
    </div>
  );
}
