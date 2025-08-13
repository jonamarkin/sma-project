import Image from 'next/image';
import { notFound } from 'next/navigation';
import { sheetMusicData } from '@/lib/dummy-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Music, PlayCircle } from 'lucide-react';

export default function SheetMusicDetailPage({ params }: { params: { id: string } }) {
  const music = sheetMusicData.find((m) => m.id === params.id);

  if (!music) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={music.imageUrl}
                alt={music.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                data-ai-hint="sheet music cover"
              />
            </div>
          </Card>
        </div>
        <div className="lg:col-span-3">
          <p className="font-semibold text-accent">{music.category}</p>
          <h1 className="mt-2 font-headline text-4xl font-bold sm:text-5xl">{music.title}</h1>
          <h2 className="mt-2 text-2xl text-foreground/80">by {music.composer}</h2>
          
          <p className="mt-6 text-lg leading-relaxed">{music.description}</p>
          
          <div className="mt-8">
            <Card className="bg-card">
              <CardContent className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:justify-between">
                <div>
                  <p className="text-sm text-foreground/70">Price</p>
                  <p className="text-4xl font-bold text-primary">${music.price.toFixed(2)}</p>
                </div>
                <Button size="lg" className="w-full sm:w-auto">
                  <Music className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="font-headline text-3xl font-bold">Preview</h3>
        <div className="mt-6 space-y-8">
            <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center bg-secondary/30">
                    <p className="text-lg font-semibold text-foreground/80 mb-4">Listen to MIDI Preview</p>
                    <div className="flex items-center gap-4 text-accent cursor-pointer hover:text-primary transition-colors">
                        <PlayCircle size={64} />
                    </div>
                </CardContent>
            </Card>
            <Card className="overflow-hidden border-4 border-card">
                <Image
                    src={music.previewUrl}
                    alt={`Preview of ${music.title}`}
                    width={1200}
                    height={600}
                    className="w-full object-contain"
                    data-ai-hint="music score"
                />
            </Card>
        </div>
      </div>
    </div>
  );
}
