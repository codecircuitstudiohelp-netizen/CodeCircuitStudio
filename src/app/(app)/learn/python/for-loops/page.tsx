
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RefreshCw, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const forLoopListCode = `
fruits = ["apple", "banana", "cherry"]

# The loop will run once for each item in the list.
# In each run, the variable 'fruit' will hold the current item.
for fruit in fruits:
    print(f"I like to eat {fruit}s.")
`;

const forLoopRangeCode = `
# range(5) generates numbers from 0 up to (but not including) 5.
for i in range(5):
    print(f"This is loop number {i}")

# You can also specify a start, stop, and step.
# This will print 2, 4, 6, 8
for num in range(2, 10, 2):
    print(num)
`;

export default function ForLoopsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <RefreshCw className="h-10 w-10 text-primary" />
            For Loops
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn how to repeat actions a specific number of times.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Looping Over a List</CardTitle>
          <CardDescription>Performing an action for every item in a sequence.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A `for` loop is used for iterating over a sequence (like a list, tuple, dictionary, set, or string). This is less like the `for` keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.
          </p>
          <SyntaxHighlighter language="python">
            {forLoopListCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Looping with `range()`</CardTitle>
          <CardDescription>Running a loop a specific number of times.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            If you need to execute a block of code a certain number of times, the `range()` function is perfect. It generates a sequence of numbers, which the `for` loop then iterates over.
          </p>
          <SyntaxHighlighter language="python">
            {forLoopRangeCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Use a `for` loop and `range()` to print the numbers from 1 to 10.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Iteration Mastered</AlertTitle>
        <AlertDescription>
          `for` loops are a fundamental part of almost every program. You can now perform repetitive tasks efficiently without writing the same code over and over again.
        </AlertDescription>
      </Alert>
    </div>
  );
}
