'use client';

import Header from '../sections/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of French Cuisine: A Journey Through Tradition',
    excerpt: 'Discover the rich history and techniques behind classic French cooking methods and how they influence modern gastronomy.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    author: 'Chef Jean Pierre',
    date: 'June 15, 2024',
    readTime: '8 min read',
    slug: 'art-of-french-cuisine'
  },
  {
    id: 2,
    title: 'Wine Pairing: A Guide to Enhancing Your Dining Experience',
    excerpt: 'Learn the principles of wine pairing and how to select the perfect wine to complement your meal.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    author: 'Sommelier Marie Claire',
    date: 'June 10, 2024',
    readTime: '6 min read',
    slug: 'wine-pairing-guide'
  },
  {
    id: 3,
    title: 'Behind the Scenes: A Day in Our Kitchen',
    excerpt: 'Experience the energy and precision of a professional kitchen as we take you through a typical day at La Maison D\'Or.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    author: 'Chef David Chen',
    date: 'June 5, 2024',
    readTime: '10 min read',
    slug: 'behind-the-scenes'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Culinary Stories</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}