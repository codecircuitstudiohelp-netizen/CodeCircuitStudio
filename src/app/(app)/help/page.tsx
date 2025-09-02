
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LifeBuoy } from "lucide-react";

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I start a new project?",
      answer: "You can start a new project from the 'Projects' page. Choose a template to get started with a pre-built setup, or start from scratch.",
    },
    {
      question: "How does the AI Co-Pilot work in the Circuit Designer?",
      answer: "The AI Co-Pilot helps you design circuits. Describe what you want to build in plain English, and the AI will suggest components, wiring instructions, and even provide you with the necessary code.",
    },
    {
      question: "Can I save my code from the Code Lab?",
      answer: "Currently, the Code Lab is a sandbox environment for experimentation. We are working on a feature to save your code snippets to your projects.",
    },
     {
      question: "What is the Simulation Room for?",
      answer: "The Simulation Room allows you to visualize and debug a complete IoT network. You can see how different devices interact and communicate with each other in real-time.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2 text-center">
        <LifeBuoy className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">Help Center</h1>
        <p className="text-lg text-muted-foreground">
          Find answers to your questions and get help with the platform.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
           <CardDescription>
            Here are some of the most common questions we get from our users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
