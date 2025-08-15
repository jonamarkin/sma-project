'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { sheetMusicData } from '@/lib/dummy-data';
import { MinusCircle, PlusCircle, ShoppingCart, Trash2 } from 'lucide-react';

// Dummy cart data for UI demonstration
const cartItems = [
  { ...sheetMusicData[0], quantity: 1, format: 'softcopy' as 'softcopy' | 'hardcopy' },
  { ...sheetMusicData[2], quantity: 1, format: 'hardcopy' as 'softcopy' | 'hardcopy' },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10.00; // Dummy shipping cost
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="flex items-center gap-4 mb-8">
        <ShoppingCart className="h-8 w-8 text-primary" />
        <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">Your Cart</h1>
      </div>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <Card key={item.id} className="flex flex-col sm:flex-row items-center gap-4 p-4">
                <div className="relative h-32 w-24 flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md"
                    data-ai-hint="sheet music cover"
                  />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h2 className="text-lg font-bold font-headline">{item.title}</h2>
                  <p className="text-sm text-foreground/70">{item.composer}</p>
                  <p className="text-sm font-medium mt-1">Format: <span className="capitalize text-primary">{item.format}</span></p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-7 w-7"><MinusCircle/></Button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <Button variant="ghost" size="icon" className="h-7 w-7"><PlusCircle/></Button>
                  </div>
                  <p className="w-20 text-right font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                  <Button variant="ghost" size="icon" className="text-destructive h-8 w-8"><Trash2 /></Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full">Proceed to Checkout</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-lg">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
          <h2 className="mt-6 text-2xl font-semibold">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">Looks like you haven't added any music yet.</p>
          <Button asChild className="mt-6">
            <Link href="/sheet-music">Browse Music</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
