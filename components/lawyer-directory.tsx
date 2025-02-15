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
  // Add more mock lawyers here
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
    <div className=" text-white min-h-screen py-8">
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="md:w-1/3 bg-gray-800 text-white placeholder-gray-400"
        />
        <Select
          value={specialization}
          onValueChange={setSpecialization}
          className="md:w-1/3 bg-gray-800 text-white"
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
          className="md:w-1/3 bg-gray-800 text-white placeholder-gray-400"
        />
      </div>

      {filteredLawyers.length === 0 ? (
        <p className="text-center text-gray-400">
          No lawyers found with the given filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLawyers.map(lawyer => (
            <Card
              key={lawyer.id}
              className="bg-gray-800 text-white border border-gray-700 hover:border-gray-500"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={lawyer.imageUrl} alt={lawyer.name} />
                    <AvatarFallback>
                      {lawyer.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{lawyer.name}</h3>
                    <p className="text-sm text-gray-400">
                      {lawyer.specialization}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{lawyer.location}</p>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{lawyer.rating.toFixed(1)}</span>
                </div>
                <Button className="w-full mt-4">View Profile</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
