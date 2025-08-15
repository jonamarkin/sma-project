'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleRecommendMusic, type RecommendationState } from '@/lib/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader, Music, Sparkles, XCircle } from 'lucide-react';

const initialState: RecommendationState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
      Get Recommendations
    </Button>
  );
}

export function MusicRecommendationForm() {
  const [state, formAction] = useFormState(handleRecommendMusic, initialState);

  return (
      <form action={formAction}>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <Label htmlFor="theme">Service/Event Theme</Label>
            <Input id="theme" name="theme" placeholder="e.g., Thanksgiving, Easter, Unity" required />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="musicType">Type of Music</Label>
              <Select name="musicType" required>
                <SelectTrigger id="musicType">
                  <SelectValue placeholder="Select a type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hymns">Hymns</SelectItem>
                  <SelectItem value="Choral">Choral Music</SelectItem>
                  <SelectItem value="Gospel">Gospel</SelectItem>
                  <SelectItem value="Classical">Classical</SelectItem>
                  <SelectItem value="Contemporary">Contemporary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" name="country" placeholder="e.g., Nigeria, Kenya, South Africa" required />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <SubmitButton />
          
          {state.error && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          {state.result && (
            <div className="w-full space-y-6 pt-6 border-t mt-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold font-headline">AI Recommendations</h3>
              </div>
              <div className="space-y-4">
                {state.result.recommendations?.map((rec, index) => (
                  <Card key={index} className="bg-card/50">
                    <CardHeader>
                      <CardTitle className="flex items-start gap-3">
                        <Music className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <span>{rec.title}</span>
                      </CardTitle>
                      <CardDescription>by {rec.composer}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">{rec.reason}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardFooter>
      </form>
  );
}
