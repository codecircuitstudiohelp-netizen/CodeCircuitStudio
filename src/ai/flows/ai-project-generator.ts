
'use server';
/**
 * @fileOverview An AI agent that generates a custom project idea based on user interests.
 *
 * - generateProjectIdea - A function that generates a project idea.
 * - GenerateProjectIdeaInput - The input type for the function.
 * - GenerateProjectIdeaOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectIdeaInputSchema = z.object({
  interests: z.string().describe('The user\'s interests, e.g., "game development", "data science", "music"'),
  language: z.string().describe('The preferred programming language, e.g., "Python", "JavaScript"'),
});
export type GenerateProjectIdeaInput = z.infer<typeof GenerateProjectIdeaInputSchema>;

const GenerateProjectIdeaOutputSchema = z.object({
    title: z.string().describe('A catchy and descriptive title for the project.'),
    description: z.string().describe('A one or two-sentence summary of the project idea.'),
    features: z.string().describe('A bulleted list of 3-5 key features the user should implement. Use markdown for the list.'),
});
export type GenerateProjectIdeaOutput = z.infer<typeof GenerateProjectIdeaOutputSchema>;

export async function generateProjectIdea(input: GenerateProjectIdeaInput): Promise<GenerateProjectIdeaOutput> {
  return generateProjectIdeaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectIdeaPrompt',
  input: {schema: GenerateProjectIdeaInputSchema},
  output: {schema: GenerateProjectIdeaOutputSchema},
  prompt: `You are an AI that helps student programmers come up with project ideas. Generate a suitable beginner-to-intermediate level project idea based on the user's interests and preferred programming language.

User Interests: {{{interests}}}
Programming Language: {{{language}}}

Instructions:
1.  Create a catchy but clear project title.
2.  Write a brief, engaging description of the project.
3.  List 3 to 5 core features as a simple markdown bulleted list that a student could implement.
`,
});

const generateProjectIdeaFlow = ai.defineFlow(
  {
    name: 'generateProjectIdeaFlow',
    inputSchema: GenerateProjectIdeaInputSchema,
    outputSchema: GenerateProjectIdeaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
