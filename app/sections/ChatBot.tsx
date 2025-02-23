'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChefHat, MessageCircle, X, Maximize2, Minimize2, ArrowLeftRight, ArrowUpDown } from 'lucide-react';

interface ChatMessage {
  type: 'user' | 'bot';
  content: string;
  image?: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    type: 'bot',
    content: "👋 Welcome to La Maison D'Or! I'm your culinary assistant. How may I help you today?"
  },
  {
    type: 'user',
    content: "Hi! I'm looking for a table for 4 this Saturday evening."
  },
  {
    type: 'bot',
    content: "I'd be happy to help with your reservation! Our most popular weekend special is our Chef's Tasting Menu:",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    type: 'bot',
    content: "✨ 7-Course Tasting Menu includes:\n- Amuse-bouche\n- Caviar & Champagne\n- Truffle Risotto\n- Wagyu Beef\n- Cheese Selection\n- Pre-dessert\n- Grand Dessert\n\nWould you like me to check table availability?"
  },
  {
    type: 'user',
    content: "That sounds amazing! Do you have any vegetarian options?"
  },
  {
    type: 'bot',
    content: "Absolutely! Our vegetarian tasting menu is equally exquisite:",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    type: 'bot',
    content: "🌱 Vegetarian Tasting Menu:\n- Wild Mushroom Cappuccino\n- Heritage Tomato Tartare\n- Black Truffle Pasta\n- Roasted Root Vegetables\n- Artisanal Cheese\n- Exotic Fruit Dessert"
  },
  {
    type: 'user',
    content: "Perfect! What time do you recommend for the best experience?"
  },
  {
    type: 'bot',
    content: "For the full tasting menu experience, I recommend arriving at 7:00 PM. You'll be seated in our main dining room with this stunning view:",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    type: 'user',
    content: "What about wine pairings?"
  },
  {
    type: 'bot',
    content: "Our sommelier has curated the perfect wine selection:",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    type: 'bot',
    content: "🍷 Premium Wine Pairing includes:\n- Vintage Champagne\n- White Burgundy\n- Barolo\n- Sauternes\n\nWe also offer non-alcoholic pairings featuring craft mocktails and premium juices."
  },
  {
    type: 'user',
    content: "Is there a dress code?"
  },
  {
    type: 'bot',
    content: "Yes, we maintain an elegant atmosphere for our guests. Smart casual or formal attire is recommended. Gentlemen typically wear jackets, though ties are optional. We provide extra jackets if needed."
  },
  {
    type: 'user',
    content: "Great, and what about parking?"
  },
  {
    type: 'bot',
    content: "We offer complimentary valet parking for all our dinner guests. Our entrance and parking area:",
    image: "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    type: 'bot',
    content: "🚗 Parking Options:\n- Valet Service (Complimentary)\n- Private Garage (€10/evening)\n- Street Parking Available\n\nValet service starts from 6:00 PM."
  },
  {
    type: 'user',
    content: "Perfect! Can you check availability for 4 people this Saturday at 7 PM?"
  },
  {
    type: 'bot',
    content: "I've found a perfect table for 4 this Saturday at 7 PM in our main dining room. Would you like me to proceed with the reservation?"
  },
  {
    type: 'user',
    content: "Yes, please!"
  },
  {
    type: 'bot',
    content: "Excellent! I've reserved your table. Here's what to expect:",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    type: 'bot',
    content: "✨ Reservation Details:\n- Date: This Saturday\n- Time: 7:00 PM\n- Party: 4 people\n- Table: Main Dining Room\n- Duration: ~3 hours for full experience\n\nWould you like to receive the confirmation by email?"
  }
];

export default function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [width, setWidth] = useState(480);
  const [height, setHeight] = useState(600);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: 'user', content: input }]);
    setInput('');
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const increaseSize = () => {
    setWidth(prev => Math.min(prev + 80, 800));
    setHeight(prev => Math.min(prev + 80, 800));
  };

  const decreaseSize = () => {
    setWidth(prev => Math.max(prev - 80, 400));
    setHeight(prev => Math.max(prev - 80, 500));
  };

  if (!isChatOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 rounded-full w-16 h-16 bg-amber-500 hover:bg-amber-600 z-[100]"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    );
  }

  const chatStyle = isMaximized
    ? {
        width: '100vw',
        height: '100vh',
        bottom: 0,
        right: 0,
        maxWidth: '100%',
        maxHeight: '100%',
        zIndex: 9999
      }
    : {
        width: `${width}px`,
        height: `${height}px`,
        bottom: '1rem',
        right: '1rem',
        zIndex: 9999
      };

  return (
    <div 
      className="fixed bg-white rounded-lg shadow-xl flex flex-col"
      style={chatStyle}
    >
      <div className="p-4 bg-amber-500 text-white rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ChefHat className="w-6 h-6" />
          <span className="font-semibold">Culinary Assistant</span>
        </div>
        <div className="flex items-center gap-2">
          {!isMaximized && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white/80"
                onClick={decreaseSize}
                title="Decrease size"
              >
                <ArrowLeftRight className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white/80"
                onClick={increaseSize}
                title="Increase size"
              >
                <ArrowUpDown className="w-4 h-4" />
              </Button>
            </>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80"
            onClick={toggleMaximize}
            title={isMaximized ? "Minimize" : "Maximize"}
          >
            {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80"
            onClick={() => setIsChatOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.type === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg max-w-[80%] ${
                message.type === 'user'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="whitespace-pre-line">{message.content}</p>
              {message.image && (
                <img
                  src={message.image}
                  alt="Preview"
                  className="mt-2 rounded-lg w-full h-48 object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button
            className="bg-amber-500 hover:bg-amber-600"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}