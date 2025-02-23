import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative h-[70vh] bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80')] bg-cover bg-center pt-16">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">La Maison D'Or</h1>
          <p className="text-xl mb-8">Experience Culinary Excellence</p>
          <Button 
            className="bg-amber-500 hover:bg-amber-600 text-white"
            size="lg"
          >
            Reserve Now
          </Button>
        </div>
      </div>
    </div>
  );
}