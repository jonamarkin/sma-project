'use server';

/**
 * @fileOverview An AI agent to recommend music based on a theme, type, and country.
 *
 * - recommendMusic - A function that handles the music recommendation process.
 * - MusicRecommendationInput - The input type for the recommendMusic function.
 * - MusicRecommendationOutput - The return type for the recommendMusic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MusicRecommendationInputSchema = z.object({
  theme: z.string().describe('The theme for the church service or event.'),
  musicType: z.string().describe('The type of music, e.g., Hymns, Choral, Gospel.'),
  country: z.string().describe('The country for which the music should be appropriate.'),
});
export type MusicRecommendationInput = z.infer<typeof MusicRecommendationInputSchema>;

const MusicRecommendationOutputSchema = z.object({
  recommendations: z
    .array(
      z.object({
        title: z.string().describe('The title of the music piece.'),
        composer: z.string().describe('The composer of the music piece.'),
        reason: z.string().describe('The reason for the recommendation.'),
      })
    )
    .describe('A list of music recommendations.'),
});
export type MusicRecommendationOutput = z.infer<typeof MusicRecommendationOutputSchema>;

export async function recommendMusic(input: MusicRecommendationInput): Promise<MusicRecommendationOutput> {
  return musicRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'musicRecommendationPrompt',
  input: {schema: MusicRecommendationInputSchema},
  output: {schema: MusicRecommendationOutputSchema},
  prompt: `You are an expert in choral and church music, with a specialization in music from {{{country}}}.

A music director needs recommendations for a service/event with the theme "{{{theme}}}". They are looking for music of the type: "{{{musicType}}}".

Please provide a list of 5 recommendations. For each piece, include the title, composer, and a brief reason why it's a good fit for the theme. Ensure the recommendations are appropriate for the specified country.
`,
});

const musicRecommendationFlow = ai.defineFlow(
  {
    name: 'musicRecommendationFlow',
    inputSchema: MusicRecommendationInputSchema,
    outputSchema: MusicRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
