'use server';
/**
 * @fileOverview An AI agent that diagnoses potential issues in a circuit design based on a natural language description.
 *
 * - aiCopilotCircuitDoctor - A function that handles the AI Copilot circuit diagnosis process.
 * - AiCopilotCircuitDoctorInput - The input type for the aiCopilotCircuitDoctor function.
 * - AiCopilotCircuitDoctorOutput - The return type for the aiCopilotCircuitDoctor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiCopilotCircuitDoctorInputSchema = z.object({
  circuitDescription: z.string().describe('A natural language description of the circuit to be diagnosed, including components and connections.'),
});
export type AiCopilotCircuitDoctorInput = z.infer<typeof AiCopilotCircuitDoctorInputSchema>;

const AiCopilotCircuitDoctorOutputSchema = z.object({
  diagnosis: z.string().describe('A detailed diagnosis of potential issues in the circuit, such as wrong resistor values, short circuits, or incorrect pin connections.'),
  suggestions: z.string().describe('A list of concrete suggestions to fix the identified issues.'),
});
export type AiCopilotCircuitDoctorOutput = z.infer<typeof AiCopilotCircuitDoctorOutputSchema>;

export async function aiCopilotCircuitDoctor(input: AiCopilotCircuitDoctorInput): Promise<AiCopilotCircuitDoctorOutput> {
  return aiCopilotCircuitDoctorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCopilotCircuitDoctorPrompt',
  input: {schema: AiCopilotCircuitDoctorInputSchema},
  output: {schema: AiCopilotCircuitDoctorOutputSchema},
  prompt: `You are an AI "Circuit Doctor" that helps students diagnose problems in their electronic circuits. Analyze the user's circuit description for common issues.

Look for problems like:
- Incorrect resistor values for LEDs (e.g., no resistor, or too low a value).
- Short circuits (e.g., connecting power directly to ground).
- Incorrect VCC/GND connections for components.
- Mismatched logic levels between components.
- Potential for component damage (e.g., a motor driver without a heat sink under heavy load).

User's Circuit Description:
{{{circuitDescription}}}

Based on your analysis, provide a diagnosis of the problems and suggest specific fixes. If the circuit seems okay, state that you don't see any obvious issues.`,
});

const aiCopilotCircuitDoctorFlow = ai.defineFlow(
  {
    name: 'aiCopilotCircuitDoctorFlow',
    inputSchema: AiCopilotCircuitDoctorInputSchema,
    outputSchema: AiCopilotCircuitDoctorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
