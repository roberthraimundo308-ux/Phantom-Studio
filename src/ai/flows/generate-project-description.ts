'use server';
/**
 * @fileOverview This file implements a Genkit flow to generate project descriptions.
 *
 * - generateProjectDescription: A function that generates a compelling project description.
 * - GenerateProjectDescriptionInput: The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput: The return type for the generateProjectDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// 1. Define the input schema for the flow
const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectType: z.string().describe('The type of project (e.g., website, e-commerce, mobile app).'),
  client: z.string().describe('The client for whom the project was developed.'),
  servicesProvided: z.array(z.string()).describe('A list of services provided for the project.'),
  technologiesUsed: z.array(z.string()).describe('A list of technologies used in the project.'),
  keywords: z.array(z.string()).describe('A list of keywords to highlight in the description.'),
  brief: z.string().describe('A brief overview or goal of the project.'),
});

export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

// 2. Define the output schema for the flow
const GenerateProjectDescriptionOutputSchema = z.object({
  description: z.string().describe('A compelling and creative description for the project.'),
});

export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

// 3. Define the Genkit prompt
const generateDescriptionPrompt = ai.definePrompt({
  name: 'generateDescriptionPrompt',
  input: { schema: GenerateProjectDescriptionInputSchema },
  output: { schema: GenerateProjectDescriptionOutputSchema },
  prompt: `You are an AI assistant for Phantom Studio, a digital agency that creates exceptional digital experiences.
Your task is to generate a compelling and creative project description based on the provided details.
Focus on highlighting the unique aspects, problem-solving, and positive outcomes for the client.

Project Name: {{{projectName}}}
Project Type: {{{projectType}}}
Client: {{{client}}}
Services Provided: {{#each servicesProvided}}- {{{this}}}\n{{/each}}
Technologies Used: {{#each technologiesUsed}}- {{{this}}}\n{{/each}}
Project Brief: {{{brief}}}
Keywords to highlight: {{#each keywords}}- {{{this}}}\n{{/each}}

Generate a concise, engaging, and professional project description that could be used for our portfolio or case studies.`,
});

// 4. Define the Genkit flow
const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await generateDescriptionPrompt(input);
    return output!;
  }
);

// 5. Export a wrapper function to call the flow
export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}
