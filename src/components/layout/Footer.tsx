
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-travel-navy text-white">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <Globe className="h-6 w-6" />
              <span>TripAlchemy</span>
            </Link>
            <p className="text-sm text-gray-300 mt-2">
              Transform your travel dreams into reality with AI-powered trip planning.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h6 className="text-lg font-medium mb-4">Explore</h6>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/itineraries" className="hover:text-white transition-colors">
                  Itineraries
                </Link>
              </li>
              <li>
                <Link to="/ai-planner" className="hover:text-white transition-colors">
                  AI Planner
                </Link>
              </li>
              <li>
                <Link to="/travel-guides" className="hover:text-white transition-colors">
                  Travel Guides
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h6 className="text-lg font-medium mb-4">Company</h6>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h6 className="text-lg font-medium mb-4">Support</h6>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} TripAlchemy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
