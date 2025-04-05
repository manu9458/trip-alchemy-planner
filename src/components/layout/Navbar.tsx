
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, PlaneLanding, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-travel-blue">
            <Globe className="h-6 w-6" />
            <span className="hidden md:inline">TripAlchemy</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/destinations" className="text-foreground/80 hover:text-foreground transition-colors">
            Destinations
          </Link>
          <Link to="/itineraries" className="text-foreground/80 hover:text-foreground transition-colors">
            Itineraries
          </Link>
          <Link to="/ai-planner" className="text-foreground/80 hover:text-foreground transition-colors">
            AI Planner
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/search">
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="ghost" size="icon" className="rounded-full text-foreground/80 hover:text-foreground">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button className="hidden md:flex gap-2 bg-travel-blue hover:bg-travel-blue/90">
            <PlaneLanding className="h-4 w-4" />
            Start Planning
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background p-6 transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6">
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="flex flex-col gap-6 text-lg">
            <Link to="/destinations" className="flex items-center gap-2" onClick={toggleMenu}>
              Destinations
            </Link>
            <Link to="/itineraries" className="flex items-center gap-2" onClick={toggleMenu}>
              Itineraries
            </Link>
            <Link to="/ai-planner" className="flex items-center gap-2" onClick={toggleMenu}>
              AI Planner
            </Link>
            <Link to="/about" className="flex items-center gap-2" onClick={toggleMenu}>
              About
            </Link>
          </nav>
          
          <Button className="mt-4 w-full bg-travel-blue hover:bg-travel-blue/90">
            <PlaneLanding className="mr-2 h-4 w-4" />
            Start Planning
          </Button>
        </div>
      </div>
    </header>
  );
}
