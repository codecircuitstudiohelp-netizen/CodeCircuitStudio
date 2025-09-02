
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ToggleRight, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const booleanCode = `
is_learning = True
is_tired = False

print(type(is_learning)) # <class 'bool'>

# Booleans are often the result of comparisons
age = 20
can_vote = age >= 18 # This results in True
print(f"Can vote: {can_vote}")
`;

const noneCode = `
# A variable is initialized but has no value yet
winner = None

# ... some time later, the game is played
# winner = "Player 1" 

if winner is None:
    print("The game isn't over yet.")
else:
    print(f"The winner is {winner}!")
`;

export default function BooleansAndNonePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <ToggleRight className="h-10 w-10 text-primary" />
            Booleans and None
        </h1>
        <p className="text-lg text-muted-foreground">
            Understand truth values and the concept of "nothingness" in Python.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Booleans: `True` and `False`</CardTitle>
          <CardDescription>The foundation of logic in programming.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A boolean (`bool`) is a data type that can only have one of two values: `True` or `False`. They are essential for controlling the flow of a program in conditional statements (like `if` statements).
          </p>
          <SyntaxHighlighter language="python">
            {booleanCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The `None` Type</CardTitle>
          <CardDescription>Representing the absence of a value.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            `None` is a special value in Python that represents nothing, or the absence of a value. It's often used as a placeholder for a variable that you know you'll assign a value to later.
          </p>
          <SyntaxHighlighter language="python">
            {noneCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a variable `is_raining` and set it to `True` or `False`. Then, write an `if` statement that prints "Bring an umbrella!" only if it's true.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Logic and Null Values</AlertTitle>
        <AlertDescription>
          You've now completed your understanding of Python's basic data types. `bool` and `None` are critical for creating programs with logic and handling situations where data may not yet exist.
        </AlertDescription>
      </Alert>
    </div>
  );
}
