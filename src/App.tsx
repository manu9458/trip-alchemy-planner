
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Destinations from "./pages/Destinations";
import Itineraries from "./pages/Itineraries";
import AIPlanner from "./pages/AIPlanner";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import DestinationDetails from "./pages/DestinationDetails";
import ItineraryDetails from "./pages/ItineraryDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/itineraries/:id" element={<ItineraryDetails />} />
          <Route path="/ai-planner" element={<AIPlanner />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
