
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Package, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const declarationCode = `
#include <iostream>
#include <string>

int main() {
    // Declaration and Initialization
    int userAge = 25;
    double price = 19.95;
    char grade = 'A';
    bool isStudent = true;
    std::string userName = "Alex";

    // Print the values
    std::cout << "User: " << userName << std::endl;
    std::cout << "Age: " << userAge << std::endl;

    return 0;
}
`;

const modifiersCode = `
// By default, int is signed.
// This can hold positive and negative numbers.
int temperature = -5;

// unsigned int can only hold non-negative numbers,
// but has a larger positive range.
unsigned int population = 40000;

// short is smaller than int
short smallNumber = 10;

// long long is larger than int
long long worldPopulation = 7800000000;
`;

export default function VariablesAndPrimitiveTypesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
          <Package className="h-10 w-10 text-primary" />
          Variables and Primitive Types
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn the fundamentals of storing and manipulating data in C++.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Static Typing in C++</CardTitle>
          <CardDescription>Declaring a variable's type is mandatory.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Unlike Python, C++ is a <strong>statically typed</strong> language. This means you must declare the data type of a variable before you can use it, and that type cannot change later. This helps catch errors at compile-time rather than at runtime.
          </p>
          <p>
            To declare a variable, you specify its type, followed by its name, and optionally initialize it with a value.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Primitive Data Types</CardTitle>
          <CardDescription>The basic building blocks for data storage.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            C++ has a core set of built-in data types. Here are the most common ones:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>`int`</strong>: For integer (whole) numbers. e.g., `10`, `-100`.</li>
            <li><strong>`double` / `float`</strong>: For floating-point (decimal) numbers. `double` has more precision. e.g., `3.14`, `-0.5`.</li>
            <li><strong>`char`</strong>: For a single character. e.g., `'a'`, `'B'`.</li>
            <li><strong>`bool`</strong>: For boolean values, which can be `true` or `false`.</li>
            <li><strong>`std::string`</strong>: For a sequence of characters. Note that you need to `#include <string>` to use it.</li>
          </ul>
          <SyntaxHighlighter language="cpp">
            {declarationCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
          <CardTitle>Type Modifiers</CardTitle>
          <CardDescription>Altering the behavior of basic types.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>You can use modifiers to change the properties of the primitive types. Common modifiers include:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>`signed` / `unsigned`</strong>: Determines if a type can hold negative values. `unsigned` types have a larger positive range.</li>
            <li><strong>`short` / `long`</strong>: Changes the size (and therefore the range) of integer types.</li>
          </ul>
           <SyntaxHighlighter language="cpp">
            {modifiersCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Head over to the Code Lab. Try declaring variables of different types and printing them to the console using `std::cout`.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Key Concepts Mastered</AlertTitle>
        <AlertDescription>
          You now understand how to declare and initialize variables with primitive types in C++. This strict type system is a core feature of the language that helps ensure code correctness and performance.
        </AlertDescription>
      </Alert>

    </div>
  );
}
