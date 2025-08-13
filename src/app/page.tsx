import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SheetMusicCard } from '@/components/sheet-music-card';
import { EventCard } from '@/components/event-card';
import { BlogPostCard } from '@/components/blog-post-card';
import { sheetMusicData, eventsData, blogData } from '@/lib/dummy-data';
import { ArrowRight, Music, CalendarDays, Newspaper } from 'lucide-react';

export default function Home() {
  const featuredMusic = sheetMusicData.slice(0, 3);
  const upcomingEvents = eventsData.slice(0, 3);
  const recentPosts = blogData.slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-card py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
            The Heartbeat of African Choral Music
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-wide text-foreground/80 sm:text-xl">
            Discover, purchase, and share the rich tapestry of sheet music from across the continent. Connect with composers, find events, and celebrate Africa's vibrant musical heritage.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="font-bold">
              <Link href="/sheet-music">
                Explore Music
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="font-bold">
              <Link href="/events">
                Find Events
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Sheet Music */}
      <section id="music" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Music className="h-8 w-8 text-accent" />
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              Featured Sheet Music
            </h2>
          </div>
          <p className="mt-2 text-lg text-foreground/70">
            Handpicked compositions from talented African composers.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {featuredMusic.map((music) => (
              <SheetMusicCard key={music.id} music={music} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/sheet-music">
                View All Sheet Music
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section id="events" className="bg-card py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <CalendarDays className="h-8 w-8 text-accent" />
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              Upcoming Choral Events
            </h2>
          </div>
          <p className="mt-2 text-lg text-foreground/70">
            Join workshops, concerts, and festivals celebrating African voices.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
           <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/events">
                Discover All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Newspaper className="h-8 w-8 text-accent" />
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              From Our Blog
            </h2>
          </div>
          <p className="mt-2 text-lg text-foreground/70">
            Insights and stories from the heart of Africa's music scene.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                Read More Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
