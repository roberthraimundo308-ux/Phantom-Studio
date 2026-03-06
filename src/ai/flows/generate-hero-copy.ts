'use server';
/**
 * @fileOverview A Genkit flow that generates creative taglines and headlines for a hero section.
 *
 * - generateHeroCopy - A function that handles the generation process.
 * - GenerateHeroCopyInput - The input type for the generateHeroCopy function.
 * - GenerateHeroCopyOutput - The return type for the generateHeroCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroCopyInputSchema = z.object({
  keywords: z.array(z.string()).describe('A list of keywords relevant to the studio/website.'),
  brief: z.string().describe('A brief description of the studio, its services, and target audience.'),
});
export type GenerateHeroCopyInput = z.infer<typeof GenerateHeroCopyInputSchema>;

const GenerateHeroCopyOutputSchema = z.object({
  taglines: z.array(z.string()).describe('An array of 3-5 creative and compelling taglines.'),
  headlines: z.array(z.string()).describe('An array of 3-5 attention-grabbing headlines.'),
});
export type GenerateHeroCopyOutput = z.infer<typeof GenerateHeroCopyOutputSchema>;

export async function generateHeroCopy(input: GenerateHeroCopyInput): Promise<GenerateHeroCopyOutput> {
  return generateHeroCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeroCopyPrompt',
  input: {schema: GenerateHeroCopyInputSchema},
  output: {schema: GenerateHeroCopyOutputSchema},
  prompt: `You are a creative marketing assistant specialized in writing compelling copy for digital agencies.
Your goal is to generate taglines and headlines for a studio's website hero section.

The studio's brief is: {{{brief}}}
Keywords: {{{#each keywords}}}{{{this}}}{{#unless @last}}, {{/unless}}{{{/each}}}

Generate 3-5 creative and attention-grabbing taglines and 3-5 headlines based on the provided brief and keywords.
Ensure the tone is modern, sophisticated, and impactful.`,
});

const generateHeroCopyFlow = ai.defineFlow(
  {
    name: 'generateHeroCopyFlow',
    inputSchema: GenerateHeroCopyInputSchema,
    outputSchema: GenerateHeroCopyOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
