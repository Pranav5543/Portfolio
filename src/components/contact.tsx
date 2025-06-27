"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, Github, Linkedin, Download, Loader2 } from "lucide-react";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  sendContactEmail,
  type ContactFormInput,
} from "@/ai/flows/send-contact-email";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormInput) {
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(values);
      form.reset();
      toast({
        title: "Message Sent!",
        description: result.reply,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          error instanceof Error
            ? error.message
            : "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="contact" className="bg-secondary">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-headline text-2xl font-bold tracking-tight md:text-3xl">
            Contact Me
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            I'm open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:nuthipranav@gmail.com"
              className="flex items-center gap-4 text-lg transition-colors hover:text-accent"
            >
              <Mail className="h-6 w-6 text-accent" />
              <span>nuthipranav@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 text-lg">
              <Phone className="h-6 w-6 text-accent" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <Button asChild>
              <a
                href="https://drive.google.com/file/d/16w0LsRCjpLdqjVngO1DvHYp5AhlHwvoA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>
          <div className="flex gap-4 border-t pt-6 mt-6">
            <Link
              href="https://github.com/Pranav5543"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pranav235"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
          </div>
        </div>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john.doe@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Hi Pranav, let's connect!"
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} size="lg">
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Section>
  );
}
