import { EventCard } from '@/components/event-card';
import { eventsData } from '@/lib/dummy-data';

export default function EventsPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">Choral Events</h1>
        <p className="mt-2 max-w-2xl text-lg text-foreground/70">
          Find concerts, workshops, and festivals celebrating African choral music across the continent and beyond.
        </p>
        
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
