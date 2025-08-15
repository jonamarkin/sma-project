import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Music } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-card p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
             <Link href="/" className="mb-4 inline-block">
                <Music className="h-10 w-10 text-primary" />
            </Link>
            <CardTitle className="font-headline text-3xl">Create an Account</CardTitle>
            <CardDescription>Join our community to discover, share, and purchase sheet music.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
               <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="e.g., Ayo Bankole" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Create Account
              </Button>
            </form>
             <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-primary hover:underline">
                Log in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
