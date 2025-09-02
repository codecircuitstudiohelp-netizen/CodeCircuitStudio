
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Milestone, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ifCode = `
age = 20

# The code inside this block will only run if the condition (age >= 18) is True.
if age >= 18:
    print("You are eligible to vote.")

print("This line will always run.")
`;

const ifElseCode = `
temperature = 15

if temperature > 25:
    print("It's a warm day.")
else:
    print("It's a bit chilly.")
`;

const ifElifElseCode = `
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")

# Output will be "Grade: B" because the first true condition was score >= 80
`;

export default function ConditionalStatementsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Milestone className="h-10 w-10 text-primary" />
            Conditional Statements
        </h1>
        <p className="text-lg text-muted-foreground">
            Make your programs intelligent by teaching them how to make decisions based on conditions.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>The `if` Statement</CardTitle>
          <CardDescription>The simplest way to make a decision.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            An `if` statement checks if a certain condition is `True`. If it is, a block of code indented below it will be executed. If the condition is `False`, the indented block is skipped.
          </p>
          <SyntaxHighlighter language="python">
            {ifCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The `else` Statement</CardTitle>
          <CardDescription>Providing an alternative path.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Often, you want your program to do something else if the `if` condition is not met. The `else` statement provides a block of code that runs only when the `if` condition is `False`.
          </p>
          <SyntaxHighlighter language="python">
            {ifElseCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>The `elif` Statement</CardTitle>
          <CardDescription>Checking multiple conditions in order.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            What if you have more than two possibilities? The `elif` (short for "else if") statement lets you check for additional conditions. Python will test each condition in order, from top to bottom. As soon as it finds one that is `True`, it runs that block and skips all the rest.
          </p>
          <SyntaxHighlighter language="python">
            {ifElifElseCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Write a program that asks for a user's name. If the name is "Alice" or "Bob", greet them personally. Otherwise, just say "Hello!".</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Decision Making Mastered</AlertTitle>
        <AlertDescription>
          You can now control the flow of your programs using `if`, `elif`, and `else`. This is a fundamental concept that allows you to create responsive and intelligent applications.
        </AlertDescription>
      </Alert>
    </div>
  );
}
