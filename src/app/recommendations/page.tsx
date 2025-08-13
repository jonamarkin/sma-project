import { MusicRecommendationForm } from '@/components/music-recommendation-form';

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold text-primary">Get Music Recommendations</h1>
        <p className="mt-2 text-lg text-foreground/70">
          Let our AI assistant help you find the perfect music for your service or event.
        </p>
      </div>
      <div className="mt-10">
        <MusicRecommendationForm />
      </div>
    </div>
  );
}
