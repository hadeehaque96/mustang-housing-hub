
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, ArrowLeft, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedListing, setSelectedListing] = useState<any>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  // Sample listings with coordinates near SMU
  const listings = [
    {
      id: 1,
      title: "Cozy Studio Near SMU Campus",
      location: "University Park",
      price: 850,
      duration: "Summer Sublet",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reviews: 12,
      amenities: ["WiFi", "Furnished", "Parking"],
      distance: "0.5 miles from SMU",
      coordinates: [-96.7836, 32.8412] // Very close to SMU
    },
    {
      id: 2,
      title: "Shared Apartment - Female Students",
      location: "Highland Park",
      price: 650,
      duration: "3 Month Lease",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reviews: 8,
      amenities: ["Pool", "Gym", "Laundry"],
      distance: "1.2 miles from SMU",
      coordinates: [-96.7897, 32.8335]
    },
    {
      id: 3,
      title: "Private Room in House",
      location: "Park Cities",
      price: 750,
      duration: "Flexible",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      reviews: 15,
      amenities: ["Pet-Friendly", "Backyard", "Kitchen"],
      distance: "2.1 miles from SMU",
      coordinates: [-96.7725, 32.8598]
    },
    {
      id: 4,
      title: "Modern 1BR Apartment",
      location: "Mockingbird Station",
      price: 1200,
      duration: "3-6 Month Lease",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
      reviews: 23,
      amenities: ["AC", "Dishwasher", "Balcony"],
      distance: "3.2 miles from SMU",
      coordinates: [-96.7614, 32.8338]
    }
  ];

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-96.7836, 32.8412], // SMU coordinates
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each listing
    listings.forEach((listing) => {
      const marker = new mapboxgl.Marker({
        color: '#dc2626' // Red color matching SMU theme
      })
        .setLngLat(listing.coordinates as [number, number])
        .addTo(map.current!);

      // Add click event to marker
      marker.getElement().addEventListener('click', () => {
        setSelectedListing(listing);
      });
    });

    // Add SMU campus marker
    new mapboxgl.Marker({
      color: '#1d4ed8' // Blue color for SMU
    })
      .setLngLat([-96.7836, 32.8412])
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">SMU Housing Hub</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/listings" className="text-gray-600 hover:text-gray-900 transition-colors">Browse</Link>
              <span className="text-red-600 font-medium">Map View</span>
              <Link to="/list-property" className="text-gray-600 hover:text-gray-900 transition-colors">List Property</Link>
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">Sign In</Button>
              <Button className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
        {/* Map Container */}
        <div className="flex-1 relative">
          {!mapboxToken ? (
            <div className="absolute inset-0 bg-gray-100">
              {/* Static Map Image with Overlaid Markers */}
              <div className="relative w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Map view of Dallas area"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-50/30"></div>
                
                {/* Simulated Map Markers */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium text-blue-600 mt-1 whitespace-nowrap">SMU Campus</div>
                </div>
                
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setSelectedListing(listings[0])}>
                  <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium text-red-600 mt-1 whitespace-nowrap">$850/mo</div>
                </div>
                
                <div className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setSelectedListing(listings[1])}>
                  <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium text-red-600 mt-1 whitespace-nowrap">$650/mo</div>
                </div>
                
                <div className="absolute top-1/4 right-1/3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setSelectedListing(listings[2])}>
                  <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium text-red-600 mt-1 whitespace-nowrap">$750/mo</div>
                </div>
              </div>
              
              {/* Token Input Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <Card className="p-6 max-w-md mx-4 bg-white/95 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-4">Interactive Map</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Enter your Mapbox token for an interactive map experience. 
                    Get one free at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mapbox.com</a>
                  </p>
                  <div className="space-y-3">
                    <Input
                      placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi..."
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                    />
                    <Button 
                      onClick={() => {
                        if (mapboxToken.startsWith('pk.')) {
                          // Token looks valid
                        } else {
                          alert('Please enter a valid Mapbox token starting with "pk."');
                        }
                      }}
                      className="w-full"
                    >
                      Load Interactive Map
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          ) : (
            <div ref={mapContainer} className="absolute inset-0" />
          )}
          
          {/* Back to List Button */}
          <div className="absolute top-4 left-4 z-10">
            <Link to="/listings">
              <Button variant="outline" className="bg-white shadow-lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to List
              </Button>
            </Link>
          </div>

          {/* Legend */}
          <Card className="absolute bottom-4 left-4 z-10 p-3">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span>Available Housing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span>SMU Campus</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Selected Listing Panel */}
        {selectedListing && (
          <div className="lg:w-96 bg-white border-l border-gray-200 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Property Details</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedListing(null)}
              >
                ×
              </Button>
            </div>
            
            <Card className="border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={selectedListing.image} 
                  alt={selectedListing.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-red-600">
                  {selectedListing.duration}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">{selectedListing.distance}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{selectedListing.title}</h4>
                <p className="text-gray-600 mb-3">{selectedListing.location}</p>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{selectedListing.rating}</span>
                  <span className="text-sm text-gray-500">({selectedListing.reviews} reviews)</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {selectedListing.amenities.map((amenity: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${selectedListing.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
