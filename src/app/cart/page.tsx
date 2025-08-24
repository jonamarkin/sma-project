"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sheetMusicData } from "@/lib/dummy-data";
import {
  MinusCircle,
  PlusCircle,
  ShoppingCart,
  Trash2,
  CreditCard,
  Smartphone,
  X,
} from "lucide-react";

// Dummy cart data for UI demonstration
const cartItems = [
  {
    ...sheetMusicData[0],
    quantity: 1,
    format: "softcopy" as "softcopy" | "hardcopy",
  },
  {
    ...sheetMusicData[2],
    quantity: 1,
    format: "hardcopy" as "softcopy" | "hardcopy",
  },
];

export default function CartPage() {
  const [isPaymentDrawerOpen, setIsPaymentDrawerOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "mobile">("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 10.0; // Dummy shipping cost
  const total = subtotal + shipping;

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaymentDrawerOpen(false);
      alert("Payment successful! Your order has been placed.");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="flex items-center gap-4 mb-8">
        <ShoppingCart className="h-8 w-8 text-primary" />
        <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">
          Your Cart
        </h1>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4 p-4"
              >
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
                  <h2 className="text-lg font-bold font-headline">
                    {item.title}
                  </h2>
                  <p className="text-sm text-foreground/70">{item.composer}</p>
                  <p className="text-sm font-medium mt-1">
                    Format:{" "}
                    <span className="capitalize text-primary">
                      {item.format}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <MinusCircle />
                    </Button>
                    <span className="w-8 text-center font-bold">
                      {item.quantity}
                    </span>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <PlusCircle />
                    </Button>
                  </div>
                  <p className="w-20 text-right font-bold text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive h-8 w-8"
                  >
                    <Trash2 />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  Order Summary
                </CardTitle>
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
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => setIsPaymentDrawerOpen(true)}
                >
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-lg">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
          <h2 className="mt-6 text-2xl font-semibold">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">
            Looks like you haven't added any music yet.
          </p>
          <Button asChild className="mt-6">
            <Link href="/sheet-music">Browse Music</Link>
          </Button>
        </div>
      )}

      {/* Payment Drawer */}
      {isPaymentDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsPaymentDrawerOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-xl z-50 overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-headline">
                  Payment Details
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsPaymentDrawerOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Order Summary */}
              <Card className="mb-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Order Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={paymentMethod === "card" ? "default" : "outline"}
                    className="h-20 flex flex-col gap-2"
                    onClick={() => setPaymentMethod("card")}
                  >
                    <CreditCard className="h-6 w-6" />
                    <span>Card</span>
                  </Button>
                  <Button
                    variant={paymentMethod === "mobile" ? "default" : "outline"}
                    className="h-20 flex flex-col gap-2"
                    onClick={() => setPaymentMethod("mobile")}
                  >
                    <Smartphone className="h-6 w-6" />
                    <span>Mobile Money</span>
                  </Button>
                </div>
              </div>

              {/* Payment Forms */}
              {paymentMethod === "card" ? (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Card Number
                    </label>
                    <Input placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Expiry
                      </label>
                      <Input placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        CVV
                      </label>
                      <Input placeholder="123" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Cardholder Name
                    </label>
                    <Input placeholder="John Doe" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mobile Number
                    </label>
                    <Input placeholder="+256 700 123 456" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mobile Money Provider
                    </label>
                    <select className="w-full p-2 border rounded-md">
                      <option>MTN Mobile Money</option>
                      <option>Airtel Money</option>
                      <option>M-Pesa</option>
                    </select>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="text-sm text-blue-700">
                      You will receive a prompt on your phone to complete the
                      payment of ${total.toFixed(2)}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsPaymentDrawerOpen(false)}
                  disabled={isProcessing}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
