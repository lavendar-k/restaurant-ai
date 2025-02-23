'use client';

import Header from '../sections/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, GlassWater, UtensilsCrossed, Calendar, Clock, MapPin } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Private Dining',
    description: 'Host your special occasions in our elegant private dining rooms. Perfect for celebrations of 10-40 guests.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Users,
    features: [
      'Customizable menu options',
      'Private waitstaff',
      'Ambient lighting and music',
      'Flexible seating arrangements'
    ],
    pricing: 'Starting from €75 per person'
  },
  {
    id: 2,
    name: 'Wine Pairing Experience',
    description: 'Experience our sommelier\'s expertly curated wine pairings with each course of your meal.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: GlassWater,
    features: [
      'Premium wine selection',
      'Expert sommelier guidance',
      'Tasting notes',
      'Food pairing recommendations'
    ],
    pricing: 'Starting from €45 per person'
  },
  {
    id: 3,
    name: 'Catering Service',
    description: 'Bring the excellence of La Maison D\'Or to your venue. Available for events of all sizes.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: UtensilsCrossed,
    features: [
      'Full-service catering',
      'Equipment rental',
      'Professional staff',
      'Custom menu planning'
    ],
    pricing: 'Custom quotes available'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Special Services</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                      <IconComponent className="w-6 h-6 text-amber-500" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-4 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-amber-600 font-semibold mb-6">
                      {service.pricing}
                    </div>
                    <Button className="w-full bg-amber-500 hover:bg-amber-600">
                      Book Now
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}