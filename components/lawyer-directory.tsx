'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

// Mock data for lawyers
const lawyers = [
  {
    id: 1,
    name: 'Jane Smith',
    specialization: 'Family Law',
    location: 'New York, NY',
    rating: 4.8,
    imageUrl: '/placeholder.svg',
  },
  {
    id: 2,
    name: 'John Doe',
    specialization: 'Corporate Law',
    location: 'Los Angeles, CA',
    rating: 4.5,
    imageUrl: '/placeholder.svg',
  },
];

export function LawyerDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [location, setLocation] = useState('');

  const filteredLawyers = lawyers.filter(
    lawyer =>
      lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (specialization === '' || lawyer.specialization === specialization) &&
      (location === '' ||
        lawyer.location.toLowerCase().includes(location.toLowerCase()))
  );

  return (
    <div className="min-h-screen py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Find a Lawyer
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Search for experienced lawyers by name, specialization, or location.
          </p>

          {/* Filters Section */}
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="md:w-1/3 w-full bg-white border border-gray-300 text-gray-800 placeholder-gray-500"
            />
            <Select
              value={specialization}
              onValueChange={setSpecialization}
              className="md:w-1/3 w-full bg-white border border-gray-300 text-gray-800"
            >
              <option value="">All Specializations</option>
              <option value="Family Law">Family Law</option>
              <option value="Corporate Law">Corporate Law</option>
              <option value="Criminal Law">Criminal Law</option>
            </Select>
            <Input
              type="text"
              placeholder="Location"
              value={location}
              onChange={e => setLocation(e.target.value)}
              className="md:w-1/3 w-full bg-white border border-gray-300 text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Lawyers List */}
        {filteredLawyers.length === 0 ? (
          <p className="text-center text-gray-500">
            No lawyers found matching your criteria.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLawyers.map(lawyer => (
              <Card
                key={lawyer.id}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200 rounded-lg"
              >
                <CardHeader className="flex items-center gap-4 border-b border-gray-100 p-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={lawyer.imageUrl} alt={lawyer.name} />
                    <AvatarFallback>
                      {lawyer.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {lawyer.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {lawyer.specialization}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-600 mb-2">{lawyer.location}</p>
                  <div className="flex items-center text-yellow-500 mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-gray-800">
                      {lawyer.rating.toFixed(1)}
                    </span>
                  </div>
                  <Button className="w-full bg-primary text-white hover:bg-primary-dark transition">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
