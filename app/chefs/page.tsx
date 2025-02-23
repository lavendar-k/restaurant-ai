'use client';

import Header from '../sections/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Award, BookOpen } from 'lucide-react';

const chefs = [
  {
    id: 1,
    name: 'Chef Jean Pierre',
    role: 'Executive Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    bio: 'With over 20 years of experience in French cuisine, Chef Jean Pierre brings his passion for traditional cooking methods and innovative flavors to La Maison D\'Or.',
    specialties: ['French Classical Cuisine', 'Modern Gastronomy', 'Wine Pairing'],
    awards: ['2 Michelin Stars', 'Best Chef 2023', 'Culinary Excellence Award'],
    signature: 'Truffle Risotto with Gold Leaf'
  },
  {
    id: 2,
    name: 'Chef Maria Silva',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    bio: 'A master of French pastry, Chef Maria combines traditional techniques with contemporary presentation to create unforgettable dessert experiences.',
    specialties: ['French Pastry', 'Chocolate Work', 'Wedding Cakes'],
    awards: ['Best Pastry Chef 2023', 'Innovation in Desserts', 'Golden Whisk Award'],
    signature: 'Grand Chocolate Soufflé'
  },
  {
    id: 3,
    name: 'Chef David Chen',
    role: 'Sous Chef',
    image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    bio: 'Chef David\'s innovative approach to French-Asian fusion has brought a unique dimension to our menu, while maintaining the essence of classic French cooking.',
    specialties: ['French-Asian Fusion', 'Seafood', 'Sauce Creation'],
    awards: ['Rising Star Chef 2023', 'Innovation Award', 'Best Sous Chef'],
    signature: 'Miso-Glazed Sea Bass'
  }
];

export default function ChefsPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Meet Our Chefs</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef) => (
              <Card key={chef.id} className="overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-2xl font-semibold text-white">{chef.name}</h3>
                    <p className="text-amber-300">{chef.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{chef.bio}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-5 h-5 text-amber-500" />
                        <h4 className="font-semibold">Specialties</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {chef.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-amber-500" />
                        <h4 className="font-semibold">Awards</h4>
                      </div>
                      <ul className="space-y-1">
                        {chef.awards.map((award, index) => (
                          <li key={index} className="text-gray-700">• {award}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-5 h-5 text-amber-500" />
                        <h4 className="font-semibold">Signature Dish</h4>
                      </div>
                      <p className="text-gray-700 italic">{chef.signature}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-amber-500 hover:bg-amber-600">
                    Book a Table
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