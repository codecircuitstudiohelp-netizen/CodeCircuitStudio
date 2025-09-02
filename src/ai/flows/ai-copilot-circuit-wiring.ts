'use server';
/**
 * @fileOverview An AI agent that suggests wiring and code for a circuit based on a natural language description.
 *
 * - aiCopilotCircuitWiring - A function that handles the AI Copilot circuit wiring process.
 * - AiCopilotCircuitWiringInput - The input type for the aiCopilotCircuitWiring function.
 * - AiCopilotCircuitWiringOutput - The return type for the aiCopilotCircuitWiring function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiCopilotCircuitWiringInputSchema = z.object({
  circuitDescription: z.string().describe('A natural language description of the circuit to be designed.'),
});
export type AiCopilotCircuitWiringInput = z.infer<typeof AiCopilotCircuitWiringInputSchema>;

const AiCopilotCircuitWiringOutputSchema = z.object({
  wiringInstructions: z.string().describe('Step-by-step instructions for wiring the circuit.'),
  codeSnippet: z.string().describe('An optimized code snippet (C++ or Python) to control the circuit.'),
  componentsList: z.string().describe('A list of components required for the circuit')
});
export type AiCopilotCircuitWiringOutput = z.infer<typeof AiCopilotCircuitWiringOutputSchema>;

export async function aiCopilotCircuitWiring(input: AiCopilotCircuitWiringInput): Promise<AiCopilotCircuitWiringOutput> {
  return aiCopilotCircuitWiringFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCopilotCircuitWiringPrompt',
  input: {schema: AiCopilotCircuitWiringInputSchema},
  output: {schema: AiCopilotCircuitWiringOutputSchema},
  prompt: `You are an AI Copilot that helps students design and wire electronic circuits. Based on the user's natural language description, provide a list of components, step-by-step wiring instructions, and an optimized C++ or Python code snippet to control the circuit.

User's desired circuit behavior:
"{{{circuitDescription}}}"

Your output should be structured clearly with separate sections for the components list, wiring instructions, and the code snippet. The code should be well-commented to explain how it works.`,
});

const aiCopilotCircuitWiringFlow = ai.defineFlow(
  {
    name: 'aiCopilotCircuitWiringFlow',
    inputSchema: AiCopilotCircuitWiringInputSchema,
    outputSchema: AiCopilotCircuitWiringOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
