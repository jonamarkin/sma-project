import { SheetMusicCard } from '@/components/sheet-music-card';
import { sheetMusicData } from '@/lib/dummy-data';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  // Dummy favorites data for UI demonstration
  const favoriteMusic = [sheetMusicData[1], sheetMusicData[3], sheetMusicData[5]];

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="flex items-center gap-4 mb-8">
        <Heart className="h-8 w-8 text-primary" />
        <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">Your Favorites</h1>
      </div>
      
      {favoriteMusic.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {favoriteMusic.map((music) => (
              <SheetMusicCard key={music.id} music={music} />
            ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-lg">
          <Heart className="mx-auto h-16 w-16 text-muted-foreground" />
          <h2 className="mt-6 text-2xl font-semibold">You have no favorites yet.</h2>
          <p className="mt-2 text-muted-foreground">Browse our sheet music and click the heart icon to save your favorites.</p>
        </div>
      )}
    </div>
  );
}
