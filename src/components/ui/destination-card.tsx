
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  rating: number;
  price: number;
  className?: string;
  featured?: boolean;
}

export function DestinationCard({
  id,
  title,
  location,
  image,
  rating,
  price,
  className,
  featured = false,
}: DestinationCardProps) {
  return (
    <div 
      className={cn(
        'travel-card group',
        featured ? 'col-span-full md:col-span-2' : '',
        className
      )}
    >
      <div>
        <div className="relative overflow-hidden">
          <Link to={`/destinations/${id}`}>
            <img 
              src={image} 
              alt={title} 
              className="travel-card-image group-hover:scale-105 transition-transform duration-300"
            />
            <div className="gradient-overlay"></div>
            
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <div className="flex justify-between">
                <span className="bg-travel-blue/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
                <div className="flex items-center bg-white/90 text-travel-navy px-2 py-1 rounded-full text-sm">
                  <Star className="text-travel-sand mr-1 h-4 w-4" fill="currentColor" />
                  <span className="font-medium">{rating}</span>
                </div>
              </div>
              
              <div className="text-white">
                <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
                <div className="flex items-center mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <p className="text-sm opacity-90">{location}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="text-xl font-bold text-travel-blue">${price}</p>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>5 days</span>
            </div>
          </div>
          
          <Link to={`/destinations/${id}`}>
            <Button className="w-full bg-travel-teal hover:bg-travel-teal/90">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
