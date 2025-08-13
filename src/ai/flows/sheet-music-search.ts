'use server';

/**
 * @fileOverview An AI agent to search for sheet music based on keywords.
 *
 * - sheetMusicSearch - A function that handles the sheet music search process.
 * - SheetMusicSearchInput - The input type for the sheetMusicSearch function.
 * - SheetMusicSearchOutput - The return type for the sheetMusicSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SheetMusicSearchInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'Keywords related to the sheet music, such as style, era, region, and tonality.'
    ),
});
export type SheetMusicSearchInput = z.infer<typeof SheetMusicSearchInputSchema>;

const SheetMusicSearchOutputSchema = z.object({
  results: z
    .array(z.string())
    .describe('A list of sheet music titles that match the search criteria.'),
});
export type SheetMusicSearchOutput = z.infer<typeof SheetMusicSearchOutputSchema>;

export async function sheetMusicSearch(input: SheetMusicSearchInput): Promise<SheetMusicSearchOutput> {
  return sheetMusicSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sheetMusicSearchPrompt',
  input: {schema: SheetMusicSearchInputSchema},
  output: {schema: SheetMusicSearchOutputSchema},
  prompt: `You are a sheet music expert. Based on the user's keywords, find relevant sheet music titles.

Keywords: {{{keywords}}}

Return a list of sheet music titles that match the search criteria.
`,
});

const sheetMusicSearchFlow = ai.defineFlow(
  {
    name: 'sheetMusicSearchFlow',
    inputSchema: SheetMusicSearchInputSchema,
    outputSchema: SheetMusicSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
