'use client';

import Header from '../sections/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Euro } from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'Wine Tasting Evening',
    description: 'Join us for an exclusive wine tasting event featuring selections from Bordeaux.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'Friday, June 28, 2024',
    time: '7:00 PM',
    price: 85,
    capacity: 30,
    location: 'Wine Cellar',
    highlights: [
      'Premium wine selection',
      'Cheese pairing',
      'Expert sommelier guidance',
      'Take-home tasting notes'
    ]
  },
  {
    id: 2,
    name: 'Cooking Masterclass',
    description: 'Learn the secrets of French cuisine from our executive chef.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'Saturday, June 29, 2024',
    time: '3:00 PM',
    price: 120,
    capacity: 15,
    location: 'Main Kitchen',
    highlights: [
      'Hands-on cooking experience',
      'Recipe booklet',
      'Wine pairing',
      'Certificate of completion'
    ]
  },
  {
    id: 3,
    name: 'Summer Gala Dinner',
    description: 'An elegant evening of fine dining and live classical music.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'Saturday, July 6, 2024',
    time: '6:30 PM',
    price: 150,
    capacity: 80,
    location: 'Grand Ballroom',
    highlights: [
      '5-course gourmet menu',
      'Champagne reception',
      'Live classical music',
      'Formal dress code'
    ]
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full">
                    €{event.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{event.name}</h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="w-4 h-4" />
                      <span>Limited to {event.capacity} guests</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold">Event Highlights:</h4>
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600">
                    Book Event
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}