import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredListings = [
    {
      id: 1,
      title: "Cozy Studio Near SMU Campus",
      location: "University Park",
      price: 850,
      duration: "Summer Sublet",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviews: 12,
      amenities: ["WiFi", "Furnished", "Parking"],
      distance: "0.5 miles from SMU"
    },
    {
      id: 2,
      title: "Shared Apartment - Female Students",
      location: "Highland Park",
      price: 650,
      duration: "3 Month Lease",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviews: 8,
      amenities: ["Pool", "Gym", "Laundry"],
      distance: "1.2 miles from SMU"
    },
    {
      id: 3,
      title: "Private Room in House",
      location: "Park Cities",
      price: 750,
      duration: "Flexible",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      reviews: 15,
      amenities: ["Pet-Friendly", "Backyard", "Kitchen"],
      distance: "2.1 miles from SMU"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">SMU Housing Hub</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/listings" className="text-gray-600 hover:text-gray-900 transition-colors">Browse</Link>
              <Link to="/map" className="text-gray-600 hover:text-gray-900 transition-colors">Map View</Link>
              <Link to="/list-property" className="text-gray-600 hover:text-gray-900 transition-colors">List Property</Link>
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">Sign In</Button>
              <Button className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"> Summer Housing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover verified student housing near SMU. Connect with fellow Mustangs for sublets, shared apartments, and summer internship housing.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  placeholder="Search by neighborhood or property type..." 
                  className="h-12 border-gray-200 focus:border-red-400"
                />
              </div>
              <Button className="h-12 px-8 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">
                Search Housing
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">Summer Sublets</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">Furnished</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">Near Campus</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">Roommate Wanted</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Student Housing</h2>
            <p className="text-gray-600">Hand-picked listings from verified SMU students</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
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
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{listing.distance}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{listing.title}</h3>
                  <p className="text-gray-600 mb-3">{listing.location}</p>
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
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-red-200 text-red-600 hover:bg-red-50">
              View All Listings
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why SMU Students Choose Us</h2>
            <p className="text-gray-600">Built by students, for students</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Students</h3>
              <p className="text-gray-600 text-sm">All users verified with SMU email addresses</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Near Campus</h3>
              <p className="text-gray-600 text-sm">All listings within 5 miles of SMU</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Safe Messaging</h3>
              <p className="text-gray-600 text-sm">Secure communication between students</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Trusted Reviews</h3>
              <p className="text-gray-600 text-sm">Real reviews from SMU community</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Summer Home?</h2>
          <p className="text-xl text-red-100 mb-8">Join hundreds of SMU students who've found their perfect housing match</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              Browse Listings
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              List Your Property
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg"></div>
                <span className="text-xl font-bold">SMU Housing Hub</span>
              </div>
              <p className="text-gray-400">Connecting SMU students with perfect summer housing since 2024.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Renters</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Listings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Map Search</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Saved Properties</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Landlords</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">List Property</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manage Listings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tenant Screening</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SMU Housing Hub. Made with ❤️ for SMU students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
