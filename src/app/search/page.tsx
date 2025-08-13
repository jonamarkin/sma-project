'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music } from 'lucide-react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const resultsJson = searchParams.get('results');
  
  const results: string[] = resultsJson ? JSON.parse(resultsJson) : [];

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <h1 className="font-headline text-3xl font-bold sm:text-4xl">Search Results</h1>
      <p className="mt-2 text-lg text-foreground/70">
        Showing results for: <span className="font-semibold text-primary">{query}</span>
      </p>

      <div className="mt-10">
        {results.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>AI-Suggested Sheet Music</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {results.map((title, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 rounded-md border hover:bg-card">
                    <Music className="h-5 w-5 flex-shrink-0 text-accent mt-1" />
                    <span className="font-medium">{title}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold">No results found.</h2>
            <p className="mt-2 text-muted-foreground">Try searching with different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
