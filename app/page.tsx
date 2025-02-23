'use client';

import { useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import ChatBot from './sections/ChatBot';
import ReservationModal from './sections/modals/ReservationModal';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ChefHat,
  Users,
  GlassWater,
  UtensilsCrossed,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

export default function Home() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Hero />

      {/* Today's Dishes */}
      <section className="max-w-7xl mx-auto py-20 px-4" id="menu">
        <h2 className="text-3xl font-bold text-center mb-12">Today's Special Dishes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Dish 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Truffle Risotto</h3>
              <p className="text-gray-600 mb-4">Creamy Arborio rice with black truffle and Parmesan</p>
              <p className="text-amber-600 font-semibold mb-4">$32</p>
              <Button 
                className="w-full bg-amber-500 hover:bg-amber-600"
                onClick={() => setIsReservationModalOpen(true)}
              >
                Reserve a Table
              </Button>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Dish 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sea Bass</h3>
              <p className="text-gray-600 mb-4">Pan-seared with herbs and lemon butter sauce</p>
              <p className="text-amber-600 font-semibold mb-4">$38</p>
              <Button 
                className="w-full bg-amber-500 hover:bg-amber-600"
                onClick={() => setIsReservationModalOpen(true)}
              >
                Reserve a Table
              </Button>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Dish 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Chocolate Soufflé</h3>
              <p className="text-gray-600 mb-4">Warm chocolate soufflé with vanilla ice cream</p>
              <p className="text-amber-600 font-semibold mb-4">$16</p>
              <Button 
                className="w-full bg-amber-500 hover:bg-amber-600"
                onClick={() => setIsReservationModalOpen(true)}
              >
                Reserve a Table
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Special Services */}
      <section className="bg-amber-100 py-20" id="specials">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Special Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white">
              <Users className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Private Dining</h3>
              <p className="text-gray-600 mb-4">
                Host your special occasions in our elegant private dining rooms. Perfect for celebrations of 10-40 guests.
              </p>
              <Button className="bg-amber-500 hover:bg-amber-600 w-full">
                Book Private Room
              </Button>
            </Card>
            <Card className="p-8 bg-white">
              <GlassWater className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Wine Pairing</h3>
              <p className="text-gray-600 mb-4">
                Experience our sommelier's expertly curated wine pairings with each course of your meal.
              </p>
              <Button className="bg-amber-500 hover:bg-amber-600 w-full">
                Learn More
              </Button>
            </Card>
            <Card className="p-8 bg-white">
              <UtensilsCrossed className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Catering Service</h3>
              <p className="text-gray-600 mb-4">
                Bring the excellence of La Maison D'Or to your venue. Available for events of all sizes.
              </p>
              <Button className="bg-amber-500 hover:bg-amber-600 w-full">
                Request Quote
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="max-w-7xl mx-auto py-20 px-4" id="events">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <Calendar className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Wine Tasting Evening</h3>
            <p className="text-gray-600">Join us for an exclusive wine tasting event featuring selections from Bordeaux.</p>
            <p className="mt-4 text-amber-600">Friday, 7:00 PM</p>
          </Card>
          <Card className="p-6">
            <ChefHat className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cooking Masterclass</h3>
            <p className="text-gray-600">Learn the secrets of French cuisine from our executive chef.</p>
            <p className="mt-4 text-amber-600">Saturday, 3:00 PM</p>
          </Card>
        </div>
      </section>

      {/* Our Chefs */}
      <section className="max-w-7xl mx-auto py-20 px-4" id="chefs">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Chefs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Chef 1"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Chef Jean Pierre</h3>
            <p className="text-gray-600">Executive Chef</p>
          </Card>
          <Card className="text-center p-6">
            <img 
              src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Chef 2"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Chef Maria Silva</h3>
            <p className="text-gray-600">Pastry Chef</p>
          </Card>
          <Card className="text-center p-6">
            <img 
              src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Chef 3"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Chef David Chen</h3>
            <p className="text-gray-600">Sous Chef</p>
          </Card>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact & Location</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-500" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-500" />
                    <span>reservations@lamaisondor.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <span>123 Gourmet Street, Culinary City, CC 12345</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <div>
                      <p>Monday - Friday: 11:00 AM - 11:00 PM</p>
                      <p>Saturday - Sunday: 10:00 AM - 12:00 AM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-600 hover:text-amber-500"><Facebook /></a>
                    <a href="#" className="text-gray-600 hover:text-amber-500"><Instagram /></a>
                    <a href="#" className="text-gray-600 hover:text-amber-500"><Twitter /></a>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647834456925!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600">
                    Get Directions
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">La Maison D'Or</h3>
              <p className="text-gray-400">Experience the finest in French cuisine</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#menu" className="hover:text-amber-500">Menu</a></li>
                <li><a href="#events" className="hover:text-amber-500">Events</a></li>
                <li><a href="#specials" className="hover:text-amber-500">Specials</a></li>
                <li><a href="#contact" className="hover:text-amber-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <div className="text-gray-400">
                <p>Monday - Friday</p>
                <p>11:00 AM - 11:00 PM</p>
                <p className="mt-2">Saturday - Sunday</p>
                <p>10:00 AM - 12:00 AM</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for special offers and updates</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700"
                />
                <Button className="bg-amber-500 hover:bg-amber-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 La Maison D'Or. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatBot />
      
      <ReservationModal 
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </div>
  );
}