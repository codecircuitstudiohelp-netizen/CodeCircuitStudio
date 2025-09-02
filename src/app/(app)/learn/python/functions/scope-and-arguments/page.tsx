
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Layers, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const scopeCode = `
# This is a global variable
x = 10

def my_function():
  # This is a local variable, it only exists inside this function
  y = 5
  print(f"Inside function, x is {x} and y is {y}")

my_function()
print(f"Outside function, x is {x}")
# print(y) # This would cause a NameError because y is not defined globally
`;

const argumentsCode = `
# Positional arguments must be in the correct order
def describe_pet(animal_type, pet_name):
    print(f"I have a {animal_type} named {pet_name}.")

describe_pet("hamster", "Harry")

# Keyword arguments can be in any order
describe_pet(pet_name="Willy", animal_type="whale")

# Default arguments provide a fallback value
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Bob") # Uses the default greeting
greet("Charlie", "Howdy") # Overrides the default
`;

export default function ScopeAndArgumentsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Layers className="h-10 w-10 text-primary" />
            Scope and Arguments
        </h1>
        <p className="text-lg text-muted-foreground">
            Understand where variables can be accessed and how to pass data to functions flexibly.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Variable Scope</CardTitle>
          <CardDescription>The region where a variable is recognized.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            **Scope** refers to the visibility of variables. Variables defined inside a function are in the **local scope**, while variables defined outside of any function are in the **global scope**.
          </p>
          <SyntaxHighlighter language="python">
            {scopeCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Arguments</CardTitle>
          <CardDescription>Different ways to pass data into your functions.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            Python provides flexible ways to pass arguments to functions, including positional, keyword, and default arguments.
          </p>
          <SyntaxHighlighter language="python">
            {argumentsCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a function that calculates the area of a rectangle with default values for width and height.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Function Mastery</AlertTitle>
        <AlertDescription>
          Understanding scope and argument types will help you write more robust and flexible functions, avoiding common bugs related to variable access.
        </AlertDescription>
      </Alert>
    </div>
  );
}
