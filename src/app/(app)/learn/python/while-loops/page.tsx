
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfinityIcon, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const whileLoopCode = `
count = 0

# This loop will continue as long as 'count' is less than 5.
while count < 5:
    print(f"The count is {count}")
    count = count + 1 # Increment the counter

print("Loop finished!")
`;

const infiniteLoopCode = `
# This is an infinite loop!
# Use Ctrl+C in a terminal to stop it.
# Our Code Lab has a timeout to prevent this from crashing your browser.
while True:
    print("This will print forever!")
`;

export default function WhileLoopsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <InfinityIcon className="h-10 w-10 text-primary" />
            While Loops
        </h1>
        <p className="text-lg text-muted-foreground">
            Repeat actions as long as a certain condition remains true.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Condition-Based Repetition</CardTitle>
          <CardDescription>Running code until a condition becomes false.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A `while` loop executes a block of code as long as a specified condition is `True`.
          </p>
          <p>
            It's crucial to ensure that the condition will eventually become `False`. Otherwise, you'll create an **infinite loop**.
          </p>
          <SyntaxHighlighter language="python">
            {whileLoopCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The Infinite Loop</CardTitle>
          <CardDescription>A loop that never ends.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Sometimes an infinite loop is useful, for example in a program that should constantly be running and listening for events. But often, it's a bug caused by a condition that never changes.
          </p>
          <SyntaxHighlighter language="python">
            {infiniteLoopCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Write a `while` loop that asks the user for input and only stops when they type the word "quit".</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Flexible Repetition</AlertTitle>
        <AlertDescription>
          You've learned how `while` loops provide a way to repeat code based on a dynamic condition. This is perfect for situations where you don't know ahead of time how many repetitions are needed.
        </AlertDescription>
      </Alert>
    </div>
  );
}
