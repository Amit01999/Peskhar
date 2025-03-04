'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  MapPin,
  Star,
  Briefcase,
  Calendar,
  MessageSquare,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock data for lawyers with expanded information
const lawyers = [
  {
    id: 1,
    name: 'Ahsan Ali',
    specialization: 'Family Law',
    location: 'Dhaka, Bangladesh',
    rating: 4.8,
    reviews: 127,
    experience: '12 years',
    education: 'University of Dhaka, Faculty of Law',
    consultationFee: '৳2500',
    availability: 'Available this week',
    imageUrl: '/lawyer/3.jpeg',
    badges: ['Top Rated', 'Quick Response'],
  },
  {
    id: 2,
    name: 'Fatima Rahman',
    specialization: 'Corporate Law',
    location: 'Chittagong, Bangladesh',
    rating: 4.5,
    reviews: 98,
    experience: '8 years',
    education: 'Bangladesh University of Professionals',
    consultationFee: '৳2000',
    availability: 'Available tomorrow',
    imageUrl: '/lawyer/2.jpeg',
    badges: ['Certified Specialist'],
  },
  {
    id: 3,
    name: 'Shahina Begum',
    specialization: 'Immigration Law',
    location: 'Sylhet, Bangladesh',
    rating: 4.9,
    reviews: 156,
    experience: '15 years',
    education: 'North South University, Law Department',
    consultationFee: '৳2750',
    availability: 'Available today',
    imageUrl: '/lawyer/4.jpeg',
    badges: ['Top Rated', 'Multilingual'],
  },
  {
    id: 4,
    name: 'Mizanur Rahman',
    specialization: 'Criminal Law',
    location: 'Rajshahi, Bangladesh',
    rating: 4.7,
    reviews: 112,
    experience: '10 years',
    education: 'Jahangirnagar University',
    consultationFee: '৳2250',
    availability: 'Available next week',
    imageUrl: '/lawyer/5.jpeg',
    badges: ['Former Prosecutor'],
  },
  {
    id: 5,
    name: 'Mostofa Rahman',
    specialization: 'Criminal Law',
    location: 'Rajshahi, Bangladesh',
    rating: 4.5,
    reviews: 112,
    experience: '10 years',
    education: 'Jahangirnagar University',
    consultationFee: '৳2250',
    availability: 'Available next week',
    imageUrl: '/lawyer/6.jpeg',
    badges: ['Former Prosecutor'],
  },
  {
    id: 6,
    name: 'Feroj Rahman',
    specialization: 'Criminal Law',
    location: 'Rajshahi, Bangladesh',
    rating: 4.8,
    reviews: 112,
    experience: '10 years',
    education: 'Jahangirnagar University',
    consultationFee: '৳2250',
    availability: 'Available next week',
    imageUrl: '/lawyer/1.jpeg',
    badges: ['Former Prosecutor'],
  },
];

export default function LawyerDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', { searchTerm, specialization, location });
  };

  const filteredLawyers = lawyers.filter(
    lawyer =>
      lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (specialization === '' || lawyer.specialization === specialization) &&
      (location === '' ||
        lawyer.location.toLowerCase().includes(location.toLowerCase()))
  );

  // Function to render star rating
  const renderStars = (rating, reviews) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'text-amber-500 fill-amber-500'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-amber-600 font-semibold">
          {rating.toFixed(1)}
        </span>
        <span className="ml-1 text-gray-500 text-sm">({reviews})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <div
        className="relative text-white mb-5 pt-20" // Added padding-top to push content below the navbar
        style={{
          backgroundImage:
            "url('https://www.legalservicesdelhi.com/images/banner1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>{' '}
        {/* Optional dark overlay for text readability */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Legal Representation
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Connect with top-rated lawyers specialized in your specific legal
              needs
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 ">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
          <div className="grid mt-5 grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search by Name */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Search by Name
              </label>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  type="text"
                  placeholder="Enter lawyer name"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
                />
              </div>
            </div>

            {/* Specialization */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Specialization
              </label>
              <Select value={specialization} onValueChange={setSpecialization}>
                <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all">
                  <SelectValue placeholder="Select specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Specializations">
                    All Specializations
                  </SelectItem>
                  <SelectItem value="Family Law">Family Law</SelectItem>
                  <SelectItem value="Corporate Law">Corporate Law</SelectItem>
                  <SelectItem value="Criminal Law">Criminal Law</SelectItem>
                  <SelectItem value="Immigration Law">
                    Immigration Law
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Location
              </label>
              <div className="relative">
                <MapPin
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  type="text"
                  placeholder="City or state"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className="pl-10 bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleSearch}
              className="bg-black hover:bg-gray-800 text-white px-8 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Find Lawyers
            </Button>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Briefcase className="mr-2 text-rose-600 sm:text-xs" size={24} />
            Available Legal Professionals
            {/* <span className="hidden md:block ml-3 text-sm font-normal text-gray-500">
              ({filteredLawyers.length} found)
            </span> */}
          </h2>

          {filteredLawyers.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center shadow">
              <div className="text-gray-500 mb-4">
                No lawyers found matching your criteria.
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSpecialization('');
                  setLocation('');
                }}
                className="text-rose-600 border-rose-600 hover:bg-rose-50"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLawyers.map(lawyer => (
                <Card
                  key={lawyer.id}
                  className="overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl group"
                >
                  {/* Lawyer Image as Background (Adjusted for Face Visibility) */}
                  <div
                    className="relative h-56 bg-top bg-cover"
                    style={{ backgroundImage: `url(${lawyer.imageUrl})` }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10"></div>

                    {/* Badges (Top Right) */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      {lawyer.badges.map((badge, index) => (
                        <Badge
                          key={index}
                          className="bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    {/* Lawyer Info (Name & Location) */}
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-xl font-bold text-white">
                        {lawyer.name}
                      </h3>
                      <div className="flex items-center text-white text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {lawyer.location}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-6">
                    <Badge
                      variant="outline"
                      className="bg-black text-white border-black px-3 py-1 rounded-full text-xs font-medium mb-3"
                    >
                      {lawyer.specialization}
                    </Badge>

                    <div className="mb-4">
                      {renderStars(lawyer.rating, lawyer.reviews)}
                    </div>

                    <div className="space-y-3 text-gray-600 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        {lawyer.experience} experience
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 mr-2 text-gray-500" />
                        {lawyer.education}
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-gray-500" />
                        {lawyer.availability}
                      </div>
                    </div>
                  </CardContent>

                  {/* Card Footer */}
                  <CardFooter className="p-6 pt-5 flex justify-between items-center border-t border-gray-200">
                    <div className="text-black font-bold text-lg">
                      {lawyer.consultationFee}
                    </div>
                    <Button className="bg-black hover:bg-gray-800 text-white rounded-lg shadow group-hover:shadow-lg transition-all duration-300 flex items-center">
                      View Profile
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>

                // <Card
                //   key={lawyer.id}
                //   className="overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl group"
                // >
                //   <div className="relative h-56 bg-gradient-to-r from-gray-100 to-gray-50 overflow-hidden">
                //     <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10"></div>
                //     <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                //       {lawyer.badges.map((badge, index) => (
                //         <Badge
                //           key={index}
                //           className="bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded-full"
                //         >
                //           {badge}
                //         </Badge>
                //       ))}
                //     </div>

                //     {/* Avatar Centered */}
                //     <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                //       <Avatar className="w-40 h-40 border-4 border-white shadow-xl rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                //         <AvatarImage
                //           src={lawyer.imageUrl}
                //           alt={lawyer.name}
                //           className="w-full h-full object-cover"
                //         />
                //         <AvatarFallback className="flex items-center justify-center bg-gray-800 text-white text-2xl font-semibold">
                //           {lawyer.name
                //             .split(' ')
                //             .map(n => n[0])
                //             .join('')}
                //         </AvatarFallback>
                //       </Avatar>
                //     </div>

                //     {/* Lawyer Info (Name & Location) */}
                //     <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                //       <h3 className="text-xl font-bold text-white">
                //         {lawyer.name}
                //       </h3>
                //       <div className="flex items-center text-white text-sm">
                //         <MapPin className="w-4 h-4 mr-1" />
                //         {lawyer.location}
                //       </div>
                //     </div>
                //   </div>

                //   <CardContent className="p-6">
                //     <Badge
                //       variant="outline"
                //       className="bg-black text-white border-black px-3 py-1 rounded-full text-xs font-medium mb-3"
                //     >
                //       {lawyer.specialization}
                //     </Badge>

                //     <div className="mb-4">
                //       {renderStars(lawyer.rating, lawyer.reviews)}
                //     </div>

                //     <div className="space-y-3 text-gray-600 text-sm">
                //       <div className="flex items-center">
                //         <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                //         {lawyer.experience} experience
                //       </div>
                //       <div className="flex items-center">
                //         <GraduationCap className="w-4 h-4 mr-2 text-gray-500" />
                //         {lawyer.education}
                //       </div>
                //       <div className="flex items-center">
                //         <MessageSquare className="w-4 h-4 mr-2 text-gray-500" />
                //         {lawyer.availability}
                //       </div>
                //     </div>
                //   </CardContent>

                //   <CardFooter className="p-6 pt-5 flex justify-between items-center border-t border-gray-200">
                //     <div className="text-black font-bold text-lg">
                //       {lawyer.consultationFee}
                //     </div>
                //     <Button className="bg-black hover:bg-gray-800 text-white rounded-lg shadow group-hover:shadow-lg transition-all duration-300 flex items-center">
                //       View Profile
                //       <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                //     </Button>
                //   </CardFooter>
                // </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
