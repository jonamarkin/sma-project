'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleModeratePost, type ModerationState } from '@/lib/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, Info, Loader, ThumbsDown, ThumbsUp, XCircle } from 'lucide-react';

const initialState: ModerationState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
      Check & Submit
    </Button>
  );
}

export function BlogModerationForm() {
  const [state, formAction] = useFormState(handleModeratePost, initialState);

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Your Content</CardTitle>
          <CardDescription>
            Write your blog post below. Our AI assistant will check if it meets our community guidelines before submission.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-2">
            <Label htmlFor="content" className="sr-only">Blog Content</Label>
            <Textarea 
              id="content"
              name="content"
              placeholder="Start writing your amazing article here..." 
              rows={15}
              required 
              minLength={50}
            />
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
            <div className="w-full space-y-4">
              {state.result.meetsGuidelines ? (
                <Alert variant="default" className="bg-green-100/80 border-green-300 dark:bg-green-900/50 dark:border-green-700">
                  <ThumbsUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertTitle className="text-green-800 dark:text-green-300">Content Approved!</AlertTitle>
                  <AlertDescription className="text-green-700 dark:text-green-400">
                    {state.result.reasoning}
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert variant="destructive">
                  <ThumbsDown className="h-4 w-4" />
                  <AlertTitle>Needs Improvement</AlertTitle>
                  <AlertDescription>
                    {state.result.reasoning}
                  </AlertDescription>
                </Alert>
              )}
              {state.result.suggestedAugmentations && (
                 <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>AI-Powered Suggestions</AlertTitle>
                  <AlertDescription>
                    {state.result.suggestedAugmentations}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
