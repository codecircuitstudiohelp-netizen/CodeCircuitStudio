
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PartyPopper, Lightbulb, Terminal } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const helloWorldCode = `print("Hello, Coder!")`;
const variablesCode = `message = "This is a variable."
print(message)

# You can change it!
message = "The value has changed."
print(message)`;

const inputCode = `name = input("What is your name? ")
print("Hello, " + name + "!")`;

export default function FirstProgramPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
          <PartyPopper className="h-10 w-10 text-primary" />
          Your First Python Program
        </h1>
        <p className="text-lg text-muted-foreground">
          It's time to write some code! This is the traditional first step for any new programmer.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>The Classic: "Hello, World!"</CardTitle>
          <CardDescription>Let's make the computer talk.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The goal is simple: write a program that displays the text "Hello, Coder!" on the screen. In Python, this is incredibly straightforward using the `print()` function.
          </p>
          <SyntaxHighlighter language="python">
            {helloWorldCode}
          </SyntaxHighlighter>
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>What's happening here?</AlertTitle>
            <AlertDescription>
              `print()` is a built-in Python function that outputs whatever you put inside its parentheses to the console. The text inside the quotes is called a <strong>string</strong>.
            </AlertDescription>
          </Alert>
          <div className="pt-4">
            <h3 className="font-semibold mb-2">Try it Yourself!</h3>
            <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab and run this code to see the output.</p>
            <Button asChild>
                <Link href="/code-lab">Go to Code Lab</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Storing Information with Variables</CardTitle>
          <CardDescription>Variables are like labeled boxes for your data.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            Instead of typing the same text over and over, we can store it in a <strong>variable</strong>. Think of a variable as a name that refers to a value.
          </p>
          <SyntaxHighlighter language="python">
            {variablesCode}
          </SyntaxHighlighter>
           <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>How it Works</AlertTitle>
            <AlertDescription>
             We use the equals sign (`=`) to assign a value to a variable name. Here, the variable `message` first holds one string, and then we re-assign it to hold a new one.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
          <CardTitle>Making it Interactive: User Input</CardTitle>
          <CardDescription>Let's get the user involved.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            Programs are much more interesting when they can interact with the user. The `input()` function pauses the program and waits for the user to type something and press Enter.
          </p>
          <SyntaxHighlighter language="python">
            {inputCode}
          </SyntaxHighlighter>
           <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Run this in the Code Lab!</AlertTitle>
            <AlertDescription>
             When you run this code in the lab, the program will wait for you to type in the output area. The text you enter will be stored in the `name` variable and then printed back to you in a greeting.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PartyPopper className="h-4 w-4" />
        <AlertTitle>You're a Programmer!</AlertTitle>
        <AlertDescription>
          You've just written three fundamental types of programs: one that displays static text, one that uses variables, and one that takes user input. You're well on your way to mastering Python!
        </AlertDescription>
      </Alert>

    </div>
  );
}
