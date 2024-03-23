'use server';

import { saveMeal } from '@/lib/meals';
import { redirect } from 'next/navigation';

export interface MealFormData {
  title: string;
  image: File;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export async function shareMeal(state: { message: string }, formData: FormData) {
  const title: string = (formData.get('title') as string) ?? '';
  const summary: string = (formData.get('summary') as string) ?? '';
  const instructions: string = (formData.get('instructions') as string) ?? '';
  const creator: string = (formData.get('name') as string) ?? ''; // name of input
  const creator_email: string = (formData.get('email') as string) ?? '';

  const mealFormData: MealFormData = {
    title,
    image: formData.get('image') as File,
    summary,
    instructions,
    creator,
    creator_email,
  };

  function isValidText(text: string): boolean {
    return !text || text.trim() === '';
  }

  if (
    isValidText(title) ||
    isValidText(summary) ||
    isValidText(instructions) ||
    isValidText(creator) ||
    isValidText(creator_email) ||
    !creator_email.includes('@') ||
    !mealFormData.image ||
    mealFormData.image.size === 0
  ) {
    return { message: 'Please fill in all required fields.' };
  }

  const slug: string = await saveMeal(mealFormData);
  redirect(`/meals/${slug}`);
}
