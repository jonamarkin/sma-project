'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { sheetMusicData } from '@/lib/dummy-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Music, PlayCircle, ShoppingCart } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function SheetMusicDetailPage({ params }: { params: { id: string } }) {
  const [format, setFormat] = useState<'softcopy' | 'hardcopy'>('softcopy');
  const { toast } = useToast();
  
  const music = sheetMusicData.find((m) => m.id === params.id);

  if (!music) {
    notFound();
  }
  
  const handleAddToCart = () => {
    console.log(`Added ${music.title} (${format}) to cart`);
    toast({
        title: "Added to Cart",
        description: `${music.title} (${format}) has been added to your shopping cart.`,
    });
  };

  const hardcopyPrice = music.price + 5; // Example price difference

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden sticky top-24">
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
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm bg-secondary text-secondary-foreground py-1 px-3 rounded-full">{music.voicing}</span>
            <span className="text-sm bg-secondary text-secondary-foreground py-1 px-3 rounded-full">{music.difficulty}</span>
            <span className="text-sm bg-secondary text-secondary-foreground py-1 px-3 rounded-full">{music.occasion}</span>
            <span className="text-sm bg-secondary text-secondary-foreground py-1 px-3 rounded-full">{music.country}</span>
          </div>

          <p className="mt-6 text-lg leading-relaxed">{music.description}</p>
          
          <div className="mt-8">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Choose Format</h3>
                    <RadioGroup defaultValue="softcopy" value={format} onValueChange={(value) => setFormat(value as 'softcopy' | 'hardcopy')}>
                        <Label htmlFor="softcopy" className="flex items-center justify-between p-4 border rounded-md cursor-pointer has-[[data-state=checked]]:bg-secondary has-[[data-state=checked]]:border-primary">
                            <div>
                                <p className="font-semibold">Soft Copy (PDF)</p>
                                <p className="text-sm text-foreground/70">Instant digital download.</p>
                            </div>
                            <p className="font-bold text-lg">${music.price.toFixed(2)}</p>
                            <RadioGroupItem value="softcopy" id="softcopy" />
                        </Label>
                        <Label htmlFor="hardcopy" className="flex items-center justify-between p-4 border rounded-md cursor-pointer has-[[data-state=checked]]:bg-secondary has-[[data-state=checked]]:border-primary mt-2">
                            <div>
                                <p className="font-semibold">Hard Copy</p>
                                <p className="text-sm text-foreground/70">Printed & shipped to you (+$5.00).</p>
                            </div>
                             <p className="font-bold text-lg">${hardcopyPrice.toFixed(2)}</p>
                            <RadioGroupItem value="hardcopy" id="hardcopy" />
                        </Label>
                    </RadioGroup>
                </div>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                    <div>
                        <p className="text-sm text-foreground/70">Price</p>
                        <p className="text-4xl font-bold text-primary">
                            ${(format === 'hardcopy' ? hardcopyPrice : music.price).toFixed(2)}
                        </p>
                    </div>
                    <Button size="lg" className="w-full sm:w-auto" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                    </Button>
                </div>
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
