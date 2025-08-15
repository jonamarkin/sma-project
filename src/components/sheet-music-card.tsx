'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type SheetMusic } from '@/lib/dummy-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SheetMusicCardProps {
  music: SheetMusic;
}

export function SheetMusicCard({ music }: SheetMusicCardProps) {
    const { toast } = useToast();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        // In a real app, you would dispatch an action to a state manager like Redux or Zustand
        console.log(`Added ${music.title} to cart`);
        toast({
            title: "Added to Cart",
            description: `${music.title} has been added to your shopping cart.`,
        });
    };
  
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
        <Link href={`/sheet-music/${music.id}`} className="flex flex-col h-full">
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
            <CardTitle className="font-headline text-xl leading-tight group-hover:text-primary transition-colors">
                {music.title}
            </CardTitle>
            <p className="mt-1 text-sm text-foreground/70">{music.composer}</p>
            <div className="mt-2 flex flex-wrap gap-1">
                <span className="text-xs bg-secondary text-secondary-foreground py-0.5 px-2 rounded-full">{music.voicing}</span>
                <span className="text-xs bg-secondary text-secondary-foreground py-0.5 px-2 rounded-full">{music.difficulty}</span>
            </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 pt-0 mt-auto">
                <p className="text-lg font-bold text-accent">${music.price.toFixed(2)}</p>
                <Button variant="outline" size="sm" onClick={handleAddToCart}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                </Button>
            </CardFooter>
        </Link>
    </Card>
  );
}
