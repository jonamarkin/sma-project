import { SheetMusicCard } from '@/components/sheet-music-card';
import { sheetMusicData } from '@/lib/dummy-data';
import { Music } from 'lucide-react';

export default function SheetMusicPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">Sheet Music</h1>
          <p className="mt-2 max-w-2xl text-lg text-foreground/70">
            Browse our collection of choral and classical music from African composers.
          </p>
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {sheetMusicData.map((music) => (
          <SheetMusicCard key={music.id} music={music} />
        ))}
      </div>
    </div>
  );
}
