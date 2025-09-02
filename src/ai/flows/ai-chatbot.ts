'use server';
/**
 * @fileOverview A simple chatbot flow that responds to user queries.
 *
 * - chat - A function that handles the chatbot interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  history: z.array(z.object({
      role: z.enum(['user', 'model']),
      content: z.string(),
  })).describe('The chat history between the user and the model.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The AI model\'s response to the user.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;


export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: ChatOutputSchema},
  prompt: `You are a friendly and helpful AI tutor for CodeCircuit Studio, a platform for learning programming and electronics. Your goal is to help users with their questions about coding, circuits, or any of the learning materials on the platform.

Keep your answers concise and easy to understand for a student.

Here is the conversation history:
{{#each history}}
- **{{role}}**: {{content}}
{{/each}}
`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
