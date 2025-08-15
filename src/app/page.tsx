import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SheetMusicCard } from '@/components/sheet-music-card';
import { EventCard } from '@/components/event-card';
import { BlogPostCard } from '@/components/blog-post-card';
import { sheetMusicData, eventsData, blogData } from '@/lib/dummy-data';
import { ArrowRight, Music, CalendarDays, Newspaper, PenTool } from 'lucide-react';

export default function Home() {
  const featuredMusic = sheetMusicData.slice(0, 4);
  const upcomingEvents = eventsData.slice(0, 3);
  const recentPosts = blogData.slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-card to-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-32">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              The Heartbeat of African Choral Music
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-wide text-foreground/80 sm:text-xl lg:mx-0">
              Discover, purchase, and share the rich tapestry of sheet music from across the continent. Connect with composers, find events, and celebrate Africa's vibrant musical heritage.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="font-bold w-full sm:w-auto">
                <Link href="/sheet-music">
                  Explore Music
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-bold w-full sm:w-auto">
                <Link href="/upload">
                  Upload Your Music
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 w-full lg:h-full">
             <Image 
                src="https://placehold.co/800x600.png"
                alt="African musicians playing guitars in front of sheet music"
                fill
                priority
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint="african musicians"
              />
          </div>
        </div>
      </section>

      {/* Featured Sheet Music */}
      <section id="music" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Music className="h-10 w-10 text-accent" />
            <h2 className="mt-4 font-headline text-3xl font-bold text-foreground sm:text-4xl">
              Featured Sheet Music
            </h2>
            <p className="mt-2 max-w-2xl text-lg text-foreground/70">
              Handpicked compositions from talented African composers, ready for your choir.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredMusic.map((music) => (
              <SheetMusicCard key={music.id} music={music} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/sheet-music">
                Browse All Sheet Music
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section id="events" className="bg-card py-16 sm:py-24">
        <div className="container mx-auto px-4">
           <div className="flex flex-col items-center text-center">
            <CalendarDays className="h-10 w-10 text-accent" />
            <h2 className="mt-4 font-headline text-3xl font-bold text-foreground sm:text-4xl">
              Upcoming Choral Events
            </h2>
            <p className="mt-2 max-w-2xl text-lg text-foreground/70">
              Join workshops, concerts, and festivals celebrating African voices.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
           <div className="flex flex-col items-center text-center">
            <PenTool className="h-10 w-10 text-accent" />
            <h2 className="mt-4 font-headline text-3xl font-bold text-foreground sm:text-4xl">
              From Our Blog
            </h2>
            <p className="mt-2 max-w-2xl text-lg text-foreground/70">
              Insights, stories, and news from the heart of Africa's music scene.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                Read More From The Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
