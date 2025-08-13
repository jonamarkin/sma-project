import Image from 'next/image';
import Link from 'next/link';
import { type SheetMusic } from '@/lib/dummy-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface SheetMusicCardProps {
  music: SheetMusic;
}

export function SheetMusicCard({ music }: SheetMusicCardProps) {
  return (
    <Link href={`/sheet-music/${music.id}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src={music.imageUrl}
              alt={music.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="sheet music cover"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="font-headline text-xl leading-tight">
            {music.title}
          </CardTitle>
          <p className="mt-1 text-sm text-foreground/70">{music.composer}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <p className="text-lg font-bold text-accent">${music.price.toFixed(2)}</p>
          <Button variant="ghost" size="sm" className="opacity-0 transition-opacity group-hover:opacity-100">
            View
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
