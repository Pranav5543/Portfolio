'use server';
/**
 * @fileOverview Handles contact form submissions by sending an email and generating an AI reply.
 *
 * - sendContactEmail - A function that handles the contact form submission process.
 * - ContactFormInput - The input type for the sendContactEmail function.
 * - ContactFormOutput - The return type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The content of the message.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  reply: z.string().describe('A personalized, friendly reply to the user.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

const contactPrompt = ai.definePrompt({
  name: 'contactPrompt',
  input: { schema: ContactFormInputSchema },
  output: { schema: ContactFormOutputSchema },
  prompt: `You are a friendly and professional AI assistant for Pranav Nuthi, a full-stack developer.
  A user has just sent a message through his portfolio contact form.
  Your task is to generate a short, personalized, and welcoming reply to the user.

  Acknowledge their message and mention that Pranav will get back to them personally as soon as possible.
  Keep the tone warm and encouraging.
  If their message mentions a specific technology (like React, Next.js, Python, etc.), briefly acknowledge their interest in it.
  
  Do not make up any facts about Pranav or promise a specific response time.
  The reply should be addressed to the user by their name.

  User's Name: {{{name}}}
  User's Message:
  "{{{message}}}"
  `,
});

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    // Generate the AI reply first.
    const { output: aiReply } = await contactPrompt(input);

    if (!aiReply) {
      throw new Error('Failed to generate AI reply.');
    }

    // Then, send the original email to the portfolio owner.
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['nuthipranav@gmail.com'],
      subject: `Message from ${input.name} via Portfolio Ascent`,
      reply_to: input.email,
      text: `From: ${input.name} <${input.email}>\n\n${input.message}`,
    });

    if (error) {
      console.error('Resend API Error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    // Return the generated reply to be shown to the user.
    return aiReply;
  }
);


export async function sendContactEmail(input: ContactFormInput): Promise<ContactFormOutput> {
  try {
    return await contactFlow(input);
  } catch (e) {
    console.error('Caught exception sending email:', e);
    if (e instanceof Error) {
        // Re-throw the error to be handled by the client
        throw e;
    }
    // Throw a generic error if it's not an Error instance
    throw new Error('An unexpected error occurred while processing your message.');
  }
}
