
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { MapPin, Users, MessageCircle, Star, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Listings = () => {
  const [priceRange, setPriceRange] = useState([500, 1500]);
  const [searchTerm, setSearchTerm] = useState('');

  const listings = [
    {
      id: 1,
      title: "Cozy Studio Near SMU Campus",
      location: "University Park",
      price: 850,
      duration: "Summer Sublet",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 12,
      amenities: ["WiFi", "Furnished", "Parking"],
      distance: "0.5 miles from SMU",
      type: "Studio",
      available: "May 15 - Aug 15"
    },
    {
      id: 2,
      title: "Shared Apartment - Female Students",
      location: "Highland Park",
      price: 650,
      duration: "3 Month Lease",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 8,
      amenities: ["Pool", "Gym", "Laundry"],
      distance: "1.2 miles from SMU",
      type: "Shared Room",
      available: "June 1 - Aug 31"
    },
    {
      id: 3,
      title: "Private Room in House",
      location: "Park Cities",
      price: 750,
      duration: "Flexible",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 15,
      amenities: ["Pet-Friendly", "Backyard", "Kitchen"],
      distance: "2.1 miles from SMU",
      type: "Private Room",
      available: "Available Now"
    },
    {
      id: 4,
      title: "Modern 1BR Apartment",
      location: "Mockingbird Station",
      price: 1200,
      duration: "3-6 Month Lease",
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 23,
      amenities: ["AC", "Dishwasher", "Balcony"],
      distance: "3.2 miles from SMU",
      type: "1 Bedroom",
      available: "May 20 - Dec 20"
    },
    {
      id: 5,
      title: "Luxury Shared Townhouse",
      location: "Preston Center",
      price: 900,
      duration: "Summer Term",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 7,
      amenities: ["Pool", "Furnished", "Parking", "Gym"],
      distance: "4.1 miles from SMU",
      type: "Shared Room",
      available: "June 1 - Aug 15"
    },
    {
      id: 6,
      title: "Cozy Room Near Light Rail",
      location: "Bishop Arts District",
      price: 600,
      duration: "Month-to-Month",
      image: "/placeholder.svg",
      rating: 4.4,
      reviews: 19,
      amenities: ["Transit", "WiFi", "Kitchen Access"],
      distance: "4.8 miles from SMU",
      type: "Private Room",
      available: "Available Now"
    }
  ];

  const filteredListings = listings.filter(listing => 
    listing.price >= priceRange[0] && 
    listing.price <= priceRange[1] &&
    (listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     listing.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
              <span className="text-red-600 font-medium">Browse</span>
              <Link to="/map" className="text-gray-600 hover:text-gray-900 transition-colors">Map View</Link>
              <Link to="/list-property" className="text-gray-600 hover:text-gray-900 transition-colors">List Property</Link>
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">Sign In</Button>
              <Button className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              {/* Search */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">Search</label>
                <Input 
                  placeholder="Search listings..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Price Range */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">Price Range</label>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={2000}
                    min={400}
                    step={50}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Property Type */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">Property Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1br">1 Bedroom</SelectItem>
                    <SelectItem value="shared">Shared Room</SelectItem>
                    <SelectItem value="private">Private Room</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Duration */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">Lease Duration</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Duration</SelectItem>
                    <SelectItem value="summer">Summer Only</SelectItem>
                    <SelectItem value="3month">3 Months</SelectItem>
                    <SelectItem value="6month">6 Months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Distance */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">Distance from SMU</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Distance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Distance</SelectItem>
                    <SelectItem value="1mile">Within 1 mile</SelectItem>
                    <SelectItem value="2miles">Within 2 miles</SelectItem>
                    <SelectItem value="5miles">Within 5 miles</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Amenities */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Amenities</label>
                <div className="space-y-2">
                  {['Furnished', 'Parking', 'WiFi', 'Pool', 'Gym', 'Laundry', 'Pet-Friendly'].map((amenity) => (
                    <label key={amenity} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Listings */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Student Housing Near SMU</h1>
                <p className="text-gray-600">{filteredListings.length} properties available</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Map className="w-4 h-4 mr-2" />
                  Map View
                </Button>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="distance">Distance</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredListings.map((listing) => (
                <Card key={listing.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={listing.image} 
                      alt={listing.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-700">
                      {listing.duration}
                    </Badge>
                    <Badge className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700">
                      {listing.type}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{listing.distance}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{listing.title}</h3>
                    <p className="text-gray-600 mb-1">{listing.location}</p>
                    <p className="text-sm text-green-600 mb-3">{listing.available}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{listing.rating}</span>
                      <span className="text-sm text-gray-500">({listing.reviews} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {listing.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">${listing.price}</span>
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
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredListings.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No listings match your criteria.</p>
                <p className="text-gray-400">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
