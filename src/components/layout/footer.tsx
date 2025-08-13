import Link from 'next/link';
import { Music } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center space-x-2">
            <Music className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">
              Harmonia Africa
            </span>
          </div>
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Harmonia Africa. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="text-sm text-foreground/60 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-foreground/60 hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
