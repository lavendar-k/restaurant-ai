'use client';

import { useParams } from 'next/navigation';
import Header from '../../sections/Header';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, User, Facebook, Twitter, Linkedin as LinkedIn } from 'lucide-react';

const blogPosts = {
  'art-of-french-cuisine': {
    title: 'The Art of French Cuisine: A Journey Through Tradition',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    author: 'Chef Jean Pierre',
    date: 'June 15, 2024',
    readTime: '8 min read',
    content: `
      <p class="mb-4">French cuisine is renowned worldwide for its sophistication, attention to detail, and rich history. At La Maison D'Or, we take pride in preserving these culinary traditions while adding our own contemporary twist.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">The Foundation of French Cooking</h2>
      <p class="mb-4">The foundation of French cuisine lies in its mother sauces - Béchamel, Espagnole, Hollandaise, Tomato, and Velouté. These five sauces form the basis of many classic French dishes and demonstrate the importance of technique in French cooking.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Essential Techniques</h2>
      <p class="mb-4">Mastering French cuisine requires perfecting various cooking techniques:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Sautéing - Quick cooking over high heat</li>
        <li>Braising - Slow cooking in liquid</li>
        <li>Poaching - Gentle cooking in liquid</li>
        <li>Flambéing - Adding and igniting spirits</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Modern Interpretations</h2>
      <p class="mb-4">While we honor traditional techniques, modern French cuisine embraces innovation and global influences. At La Maison D'Or, we combine classic methods with contemporary presentations to create unique dining experiences.</p>
    `
  },
  'wine-pairing-guide': {
    title: 'Wine Pairing: A Guide to Enhancing Your Dining Experience',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    author: 'Sommelier Marie Claire',
    date: 'June 10, 2024',
    readTime: '6 min read',
    content: `
      <p class="mb-4">The right wine can elevate a meal from excellent to extraordinary. Understanding the basics of wine pairing opens up a world of flavor combinations.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Basic Principles of Wine Pairing</h2>
      <p class="mb-4">When pairing wine with food, consider these key factors:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Weight and texture</li>
        <li>Acidity levels</li>
        <li>Tannin content</li>
        <li>Flavor intensity</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Classic Pairings</h2>
      <p class="mb-4">Some time-tested combinations include:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Champagne with oysters</li>
        <li>Bordeaux with lamb</li>
        <li>Burgundy with mushroom dishes</li>
        <li>Sauternes with foie gras</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Modern Approaches</h2>
      <p class="mb-4">Contemporary wine pairing has become more adventurous, breaking traditional rules while respecting fundamental principles of taste and balance.</p>
    `
  },
  'behind-the-scenes': {
    title: 'Behind the Scenes: A Day in Our Kitchen',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    author: 'Chef David Chen',
    date: 'June 5, 2024',
    readTime: '10 min read',
    content: `
      <p class="mb-4">Ever wondered what happens behind the kitchen doors of a fine dining restaurant? Join us for a day at La Maison D'Or as we prepare for service.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Early Morning Preparations</h2>
      <p class="mb-4">Our day begins at 6 AM with:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Fresh ingredient deliveries</li>
        <li>Stock preparation</li>
        <li>Mise en place</li>
        <li>Team briefing</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">The Art of Organization</h2>
      <p class="mb-4">A professional kitchen operates like a well-oiled machine, with each team member playing a crucial role in the smooth running of service.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Service Time</h2>
      <p class="mb-4">During service, timing and coordination are everything. Each dish is carefully orchestrated to ensure perfect execution and presentation.</p>
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="relative h-[400px]">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center gap-6 mb-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Share this article:</span>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-600 hover:text-amber-500">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-amber-500">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-amber-500">
                      <LinkedIn className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}