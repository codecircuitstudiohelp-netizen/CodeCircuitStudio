
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Zap, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const lambdaCode = `
# A regular function
def double(x):
  return x * 2

# The equivalent lambda function
double_lambda = lambda x: x * 2

print(double(5))         # Output: 10
print(double_lambda(5))  # Output: 10
`;

const usageCode = `
points = [(1, 2), (4, 1), (5, 4), (2, 3)]

# Sort the list of tuples based on the second element (the y-coordinate)
points.sort(key=lambda item: item[1])

print(points) # Output: [(4, 1), (1, 2), (2, 3), (5, 4)]
`;

export default function LambdaFunctionsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Zap className="h-10 w-10 text-primary" />
            Lambda Functions
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn to create small, anonymous functions on the fly.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What are Lambda Functions?</CardTitle>
          <CardDescription>A shorthand for writing simple, one-line functions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A lambda function is a small anonymous function. It can take any number of arguments, but can only have one expression. They are syntactically restricted to a single expression.
          </p>
          <SyntaxHighlighter language="python">
            {lambdaCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>When to Use Them</CardTitle>
          <CardDescription>Perfect for when you need a quick function for a short period.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Lambdas are most useful when you need a simple function for a short period, often as an argument to a higher-order function (a function that takes other functions as arguments), like `sorted()`, `map()`, or `filter()`.
          </p>
          <SyntaxHighlighter language="python">
            {usageCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a list of names. Use `sorted()` with a lambda function to sort the list by the last letter of each name.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Pythonic Power</AlertTitle>
        <AlertDescription>
          Lambda functions are a "Pythonic" feature that can make your code more concise and readable in certain situations. They are a powerful tool in a Python programmer's toolkit.
        </AlertDescription>
      </Alert>
    </div>
  );
}
