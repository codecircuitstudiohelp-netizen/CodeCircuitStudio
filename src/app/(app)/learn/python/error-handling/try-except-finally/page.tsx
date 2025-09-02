
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const tryExceptCode = `
try:
  # Code that might cause an error
  numerator = 10
  denominator = 0
  result = numerator / denominator
  print(result)
except ZeroDivisionError:
  # This block runs only if a ZeroDivisionError occurs
  print("Error: Cannot divide by zero!")

print("The program continues to run.")
`;

const finallyCode = `
try:
  file = open('data.txt', 'r')
  # ... process the file
except FileNotFoundError:
  print("File not found.")
finally:
  # This block ALWAYS runs, whether an error occurred or not.
  # It's perfect for cleanup tasks.
  if 'file' in locals() and not file.closed:
    file.close()
    print("File has been closed.")
`;

export default function TryExceptFinallyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <ShieldAlert className="h-10 w-10 text-primary" />
            Error Handling
        </h1>
        <p className="text-lg text-muted-foreground">
            Write robust programs that can gracefully handle unexpected errors.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>The `try...except` Block</CardTitle>
          <CardDescription>Handling exceptions without crashing your program.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When an error occurs, or **exception** as we call it, Python will normally stop and generate an error message. The `try...except` statement allows you to test a block of code for errors and define a response if one occurs.
          </p>
          <SyntaxHighlighter language="python">
            {tryExceptCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The `finally` Block</CardTitle>
          <CardDescription>Executing code regardless of the outcome.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            The `finally` block, if specified, will be executed regardless if the `try` block raises an error or not. This is useful for cleanup actions, like closing files or database connections.
          </p>
          <SyntaxHighlighter language="python">
            {finallyCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Write a program that asks for a number as input. Use a `try...except` block to handle the `ValueError` that occurs if the user types text instead of a number.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Robust Code</AlertTitle>
        <AlertDescription>
          Proper error handling is a hallmark of professional code. It prevents your applications from crashing and provides a better user experience.
        </AlertDescription>
      </Alert>
    </div>
  );
}
