'use server';
/**
 * @fileOverview A Genkit flow to generate detailed and persuasive service descriptions.
 *
 * - generateServiceDescription - A function that handles the service description generation process.
 * - GenerateServiceDescriptionInput - The input type for the generateServiceDescription function.
 * - GenerateServiceDescriptionOutput - The return type for the generateServiceDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceDescriptionInputSchema = z.object({
  serviceName: z.string().describe('The name of the service to describe.'),
  targetAudience: z.string().describe('The target audience for this service.'),
  keyFeatures: z.array(z.string()).describe('A list of key features of the service.').min(1),
  tone: z.string().optional().describe('The desired tone for the description (e.g., professional, innovative, friendly).'),
});
export type GenerateServiceDescriptionInput = z.infer<typeof GenerateServiceDescriptionInputSchema>;

const GenerateServiceDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated persuasive service description.'),
});
export type GenerateServiceDescriptionOutput = z.infer<typeof GenerateServiceDescriptionOutputSchema>;

export async function generateServiceDescription(input: GenerateServiceDescriptionInput): Promise<GenerateServiceDescriptionOutput> {
  return generateServiceDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServiceDescriptionPrompt',
  input: { schema: GenerateServiceDescriptionInputSchema },
  output: { schema: GenerateServiceDescriptionOutputSchema },
  prompt: `You are a marketing expert for Phantom Studio, a digital agency that creates unique and high-performing digital experiences.

Generate a detailed and persuasive service description based on the following information:

Service Name: {{{serviceName}}}
Target Audience: {{{targetAudience}}}
Key Features: 
{{#each keyFeatures}}
- {{{this}}}
{{/each}}

Desired Tone: {{{tone}}}.

Craft a description that highlights the unique value proposition of Phantom Studio, emphasizing innovation, performance, and client-centric solutions. Ensure the language is compelling and directly addresses the needs and aspirations of the target audience.
`,
});

const generateServiceDescriptionFlow = ai.defineFlow(
  {
    name: 'generateServiceDescriptionFlow',
    inputSchema: GenerateServiceDescriptionInputSchema,
    outputSchema: GenerateServiceDescriptionOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
