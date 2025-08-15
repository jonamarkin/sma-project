import { MusicRecommendationForm } from '@/components/music-recommendation-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
       <div className="text-center">
        <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">AI-Powered Music Tools</h1>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/70">
          Leverage artificial intelligence to discover new music and streamline your creative process.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 gap-12">
        <Card>
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Lightbulb className="h-8 w-8 text-accent"/>
                    <CardTitle className="font-headline text-3xl">Get Music Recommendations</CardTitle>
                </div>
                <CardDescription className="text-base pt-2">
                    Let our AI assistant help you find the perfect music for your service or event. Provide a theme, music type, and country to get tailored suggestions.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <MusicRecommendationForm />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
