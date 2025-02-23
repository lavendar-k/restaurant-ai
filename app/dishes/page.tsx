'use client';

import { useState } from 'react';
import Header from '../sections/Header';
import ReservationModal from '../sections/modals/ReservationModal';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, Clock, Utensils } from 'lucide-react';

const dishes = [
  {
    id: 1,
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with black truffle and Parmesan',
    price: 32,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Main Course',
    preparationTime: '25 minutes',
    dietaryInfo: ['Vegetarian', 'Gluten-Free'],
    chefNote: 'Our signature dish featuring seasonal truffles'
  },
  {
    id: 2,
    name: 'Sea Bass',
    description: 'Pan-seared with herbs and lemon butter sauce',
    price: 38,
    image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Main Course',
    preparationTime: '30 minutes',
    dietaryInfo: ['Gluten-Free'],
    chefNote: 'Fresh catch of the day from local suppliers'
  },
  {
    id: 3,
    name: 'Chocolate Soufflé',
    description: 'Warm chocolate soufflé with vanilla ice cream',
    price: 16,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Dessert',
    preparationTime: '20 minutes',
    dietaryInfo: ['Vegetarian'],
    chefNote: 'Please allow extra preparation time'
  }
];

export default function DishesPage() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {dishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full">
                    ${dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{dish.name}</h3>
                      <p className="text-gray-600">{dish.description}</p>
                    </div>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      {dish.category}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{dish.preparationTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Utensils className="w-4 h-4" />
                      <div className="flex gap-2">
                        {dish.dietaryInfo.map((info, index) => (
                          <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                            {info}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <ChefHat className="w-4 h-4" />
                      <span className="italic">{dish.chefNote}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-amber-500 hover:bg-amber-600"
                    onClick={() => setIsReservationModalOpen(true)}
                  >
                    Reserve a Table
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <ReservationModal 
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </div>
  );
}