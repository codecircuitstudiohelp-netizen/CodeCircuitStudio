'use server';
/**
 * @fileOverview An AI agent that generates a multiple-choice assessment question for a given topic.
 *
 * - generateAssessmentQuestion - A function that generates a single assessment question.
 * - GenerateAssessmentQuestionInput - The input type for the function.
 * - GenerateAssessmentQuestionOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAssessmentQuestionInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate an assessment question. e.g., "Python Dictionaries", "CSS Flexbox"'),
});
export type GenerateAssessmentQuestionInput = z.infer<typeof GenerateAssessmentQuestionInputSchema>;

const GenerateAssessmentQuestionOutputSchema = z.object({
    question: z.string().describe('The generated multiple-choice question.'),
    options: z.array(z.string()).length(4).describe('An array of four possible answers.'),
    correctAnswerIndex: z.number().min(0).max(3).describe('The index (0-3) of the correct answer in the options array.'),
});
export type GenerateAssessmentQuestionOutput = z.infer<typeof GenerateAssessmentQuestionOutputSchema>;

export async function generateAssessmentQuestion(input: GenerateAssessmentQuestionInput): Promise<GenerateAssessmentQuestionOutput> {
  return generateAssessmentQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAssessmentQuestionPrompt',
  input: {schema: GenerateAssessmentQuestionInputSchema},
  output: {schema: GenerateAssessmentQuestionOutputSchema},
  prompt: `You are an expert educator and curriculum designer. Your task is to generate a single, high-quality multiple-choice question to assess a student's understanding of a specific topic.

Topic: {{{topic}}}

Instructions:
1.  Create a clear and concise question that targets a key concept within the given topic.
2.  Provide four distinct options.
3.  One option must be clearly correct.
4.  The other three options should be plausible but incorrect (these are called "distractors").
5.  Identify the index of the correct answer (from 0 to 3).
`,
});

const generateAssessmentQuestionFlow = ai.defineFlow(
  {
    name: 'generateAssessmentQuestionFlow',
    inputSchema: GenerateAssessmentQuestionInputSchema,
    outputSchema: GenerateAssessmentQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
