
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Cog, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const functionCode = `
# Define a simple function
def greet():
  print("Hello from a function!")

# Call the function to execute its code
greet()
`;

const argumentsCode = `
# A function that accepts one argument
def greet_user(name):
  print(f"Hello, {name}!")

greet_user("Alice") # Output: Hello, Alice!

# A function that accepts multiple arguments
def add_numbers(x, y):
  return x + y

sum_result = add_numbers(5, 3)
print(f"The sum is: {sum_result}") # Output: The sum is: 8
`;

export default function DefiningFunctionsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Cog className="h-10 w-10 text-primary" />
            Defining and Calling Functions
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn how to package your code into reusable blocks.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is a Function?</CardTitle>
          <CardDescription>A reusable block of code that performs a specific task.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Functions allow you to organize your code into logical blocks. This makes your code more modular, easier to read, and reusable. You define a function once and can then "call" it as many times as you need.
          </p>
          <SyntaxHighlighter language="python">
            {functionCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Arguments and Return Values</CardTitle>
          <CardDescription>Passing data into functions and getting data out.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            **Arguments** (or parameters) are pieces of information you can pass into a function for it to work with. The `return` statement is used to send a value back out of the function.
          </p>
          <SyntaxHighlighter language="python">
            {argumentsCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a function called `multiply` that takes two numbers as arguments and returns their product. Call the function and print the result.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Code Organization</AlertTitle>
        <AlertDescription>
          You've learned the most important concept for writing clean and efficient code. Functions are the backbone of any non-trivial program.
        </AlertDescription>
      </Alert>
    </div>
  );
}
