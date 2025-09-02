'use server';
/**
 * @fileOverview Recommends relevant lessons based on the user's progress and identified knowledge gaps.
 *
 * - recommendLesson - A function that recommends a lesson.
 * - RecommendLessonInput - The input type for the recommendLesson function.
 * - RecommendLessonOutput - The return type for the recommendLesson function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendLessonInputSchema = z.object({
  studentGoals: z.string().describe('The student goals'),
  studentInterests: z.string().describe('The student interests'),
  studentCurrentTrack: z.string().describe('The student current learning track such as Python or Javascript'),
  studentProgress: z.string().describe('The student progress in the current track.'),
  studentKnowledgeGaps: z.string().describe('The student knowledge gaps in the current track.'),
});
export type RecommendLessonInput = z.infer<typeof RecommendLessonInputSchema>;

const RecommendLessonOutputSchema = z.object({
  lessonTitle: z.string().describe('The title of the recommended lesson.'),
  lessonDescription: z.string().describe('A brief description of the recommended lesson.'),
  reason: z.string().describe('The reason why this lesson is recommended.'),
});
export type RecommendLessonOutput = z.infer<typeof RecommendLessonOutputSchema>;

export async function recommendLesson(input: RecommendLessonInput): Promise<RecommendLessonOutput> {
  return recommendLessonFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendLessonPrompt',
  input: {schema: RecommendLessonInputSchema},
  output: {schema: RecommendLessonOutputSchema},
  prompt: `You are an AI learning assistant. Your job is to recommend the next best lesson for a student based on their goals, interests, current track, progress, and knowledge gaps.

Here is the student's information:
Goals: {{{studentGoals}}}
Interests: {{{studentInterests}}}
Current Track: {{{studentCurrentTrack}}}
Progress: {{{studentProgress}}}
Knowledge Gaps: {{{studentKnowledgeGaps}}}

Based on this information, what lesson do you recommend the student take next? Explain your reason.
`,
});

const recommendLessonFlow = ai.defineFlow(
  {
    name: 'recommendLessonFlow',
    inputSchema: RecommendLessonInputSchema,
    outputSchema: RecommendLessonOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
