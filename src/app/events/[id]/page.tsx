import Image from 'next/image';
import { notFound } from 'next/navigation';
import { eventsData } from '@/lib/dummy-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = eventsData.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                sizes="(max-width: 1024px) 100vw, 67vw"
                className="object-cover"
                data-ai-hint="choral event concert"
              />
            </div>
            <div className="mt-8">
              <h1 className="font-headline text-4xl font-bold sm:text-5xl">{event.title}</h1>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-lg text-foreground/80">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-accent" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-accent" />
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="prose prose-lg max-w-none mt-6 text-foreground/90">
                <p>{event.description}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                  <Ticket className="h-6 w-6 text-primary" />
                  Register or Get Tickets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 rounded-md border bg-background p-4 text-center">
                  <p className="text-sm text-foreground/70">Price</p>
                  <p className="text-4xl font-bold text-accent">
                    {typeof event.price === 'number' ? `$${event.price.toFixed(2)}` : 'Free'}
                  </p>
                </div>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <Label htmlFor="tickets">Number of Tickets</Label>
                    <Input id="tickets" type="number" min="1" defaultValue="1" />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Proceed to Payment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
