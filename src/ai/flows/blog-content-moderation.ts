'use server';
/**
 * @fileOverview A blog content moderation AI agent.
 *
 * - moderateBlogContent - A function that handles the blog content moderation process.
 * - ModerateBlogContentInput - The input type for the moderateBlogContent function.
 * - ModerateBlogContentOutput - The return type for the moderateBlogContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModerateBlogContentInputSchema = z.object({
  blogContent: z.string().describe('The content of the blog post.'),
});
export type ModerateBlogContentInput = z.infer<typeof ModerateBlogContentInputSchema>;

const ModerateBlogContentOutputSchema = z.object({
  meetsGuidelines: z.boolean().describe('Whether the blog content meets the guidelines.'),
  reasoning: z.string().describe('The reasoning for the decision.'),
  suggestedAugmentations: z.string().optional().describe('Suggested AI-driven augmentations if the content does not meet the guidelines.'),
});
export type ModerateBlogContentOutput = z.infer<typeof ModerateBlogContentOutputSchema>;

export async function moderateBlogContent(input: ModerateBlogContentInput): Promise<ModerateBlogContentOutput> {
  return moderateBlogContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'moderateBlogContentPrompt',
  input: {schema: ModerateBlogContentInputSchema},
  output: {schema: ModerateBlogContentOutputSchema},
  prompt: `You are a blog content moderator for Sheet Music Africa, a platform for African sheet music and choral events.

  Your task is to review the provided blog content and determine if it meets the platform's content guidelines.

  Content Guidelines:
  - The content must be relevant to choral music, classical music, or the African music scene.
  - The content must be original and not plagiarized.
  - The content must be respectful and not contain hate speech or offensive material.
  - The content must be well-written and grammatically correct.

  Based on these guidelines, evaluate the following blog content:
  {{blogContent}}

  Reasoning:
  Explain your reasoning for determining whether the content meets the guidelines. Be specific and cite the relevant guidelines.

  Suggested Augmentations (Optional):
  If the content does not meet the guidelines, suggest specific AI-driven augmentations that could improve the content and make it suitable for publication. For example, suggest ways to improve the writing, add more relevant information, or remove offensive material.

  Output the following schema with your response:
  {
    meetsGuidelines: boolean, // true if the content meets the guidelines, false otherwise
    reasoning: string, // Your reasoning for the decision
    suggestedAugmentations?: string // Suggested AI-driven augmentations, if applicable
  }`,
});

const moderateBlogContentFlow = ai.defineFlow(
  {
    name: 'moderateBlogContentFlow',
    inputSchema: ModerateBlogContentInputSchema,
    outputSchema: ModerateBlogContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
