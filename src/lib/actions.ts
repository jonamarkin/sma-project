'use server';

import { redirect } from 'next/navigation';
import { sheetMusicSearch } from '@/ai/flows/sheet-music-search';
import { moderateBlogContent, type ModerateBlogContentOutput } from '@/ai/flows/blog-content-moderation';
import { recommendMusic, type MusicRecommendationOutput } from '@/ai/flows/music-recommendation';


export async function handleSearch(formData: FormData) {
  const keywords = formData.get('keywords') as string;

  if (!keywords) {
    return;
  }

  const searchResult = await sheetMusicSearch({ keywords });
  const params = new URLSearchParams({
    query: keywords,
    results: JSON.stringify(searchResult.results),
  });

  redirect(`/search?${params.toString()}`);
}

export interface ModerationState {
  result?: ModerateBlogContentOutput;
  error?: string;
}

export async function handleModeratePost(
  prevState: ModerationState,
  formData: FormData
): Promise<ModerationState> {
  const blogContent = formData.get('content') as string;

  if (!blogContent || blogContent.trim().length < 50) {
    return { error: 'Blog content must be at least 50 characters long.' };
  }

  try {
    const result = await moderateBlogContent({ blogContent });
    return { result };
  } catch (e) {
    console.error(e);
    return { error: 'An unexpected error occurred during moderation.' };
  }
}

export interface RecommendationState {
  result?: MusicRecommendationOutput;
  error?: string;
}

export async function handleRecommendMusic(
  prevState: RecommendationState,
  formData: FormData
): Promise<RecommendationState> {
  const theme = formData.get('theme') as string;
  const musicType = formData.get('musicType') as string;
  const country = formData.get('country') as string;

  if (!theme || !musicType || !country) {
    return { error: 'Please fill out all fields.' };
  }

  try {
    const result = await recommendMusic({ theme, musicType, country });
    return { result };
  } catch (e) {
    console.error(e);
    return { error: 'An unexpected error occurred while getting recommendations.' };
  }
}
