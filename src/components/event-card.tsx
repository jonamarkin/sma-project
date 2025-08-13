import Image from 'next/image';
import Link from 'next/link';
import { type ChoralEvent } from '@/lib/dummy-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: ChoralEvent;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="choral event concert"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col p-4">
          <CardTitle className="font-headline text-xl leading-tight">
            {event.title}
          </CardTitle>
          <div className="mt-4 flex flex-grow flex-col space-y-2 text-sm text-foreground/70">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
              <span>{event.location}</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t">
            <p className="text-right text-lg font-bold text-accent">
              {typeof event.price === 'number' ? `$${event.price.toFixed(2)}` : 'Free'}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
