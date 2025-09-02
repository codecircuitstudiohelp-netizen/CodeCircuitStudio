
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Package, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const pointerCode = `
#include <iostream>

int main() {
    int score = 100;
    
    // Declare a pointer 'ptr' that can hold the address of an integer.
    // The '&' operator gets the memory address of 'score'.
    int* ptr = &score;

    std::cout << "Value of score: " << score << std::endl;
    std::cout << "Memory address of score: " << &score << std::endl;
    std::cout << "Value of pointer (the address it holds): " << ptr << std::endl;
    
    // The '*' operator dereferences the pointer to get the value at that address.
    std::cout << "Value at the address stored in ptr: " << *ptr << std::endl;

    return 0;
}
`;

const manipulationCode = `
#include <iostream>

int main() {
    int value = 10;
    int* valuePtr = &value;

    std::cout << "Original value: " << value << std::endl; // 10

    // Modify the value *through* the pointer
    *valuePtr = 25;

    std::cout << "Modified value: " << value << std::endl; // 25
    
    return 0;
}
`;


export default function UnderstandingPointersPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Understanding Pointers</h1>
        <p className="text-lg text-muted-foreground">
          Dive into one of C++'s most powerful and feared features: direct memory management.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is a Pointer?</CardTitle>
          <CardDescription>A variable that stores a memory address.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Instead of holding a direct value like `10` or `"Hello"`, a pointer holds the **memory address** of another variable. Think of your computer's memory as a giant street of numbered houses. A normal variable is the content inside a house, while a pointer is a piece of paper with the house number written on it.
          </p>
          <p>
            Pointers are declared using an asterisk (`*`) between the data type and the variable name.
          </p>
          <SyntaxHighlighter language="cpp">
            {pointerCode}
          </SyntaxHighlighter>
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Two Key Operators</AlertTitle>
            <AlertDescription>
               <ul className="list-disc list-inside space-y-2 mt-2">
                <li><strong>Address-of Operator (`&`):</strong> Gets the memory address where a variable is stored.</li>
                <li><strong>Dereference Operator (`*`):</strong> Gets the value stored at the memory address a pointer is holding.</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why Use Pointers?</CardTitle>
          <CardDescription>They are essential for several advanced C++ features.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Dynamic Memory Allocation:</strong> Creating variables on the "heap" at runtime, allowing for flexible data structures that can grow or shrink.</li>
            <li><strong>Efficient Function Arguments:</strong> Passing large objects to functions by reference (using their address) avoids making slow, memory-intensive copies.</li>
            <li><strong>Polymorphism:</strong> A core concept in object-oriented programming, allowing you to work with objects of different types through a common base pointer.</li>
            <li><strong>Interacting with Hardware:</strong> Directly reading from or writing to specific memory locations for low-level systems programming.</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Manipulating Data via Pointers</CardTitle>
        </Header>
        <CardContent className="space-y-4">
            <p>
                By dereferencing a pointer, you can not only read the value of the variable it points to but also change it.
            </p>
            <SyntaxHighlighter language="cpp">{manipulationCode}</SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Declare a `double` variable, create a pointer to it, and then use the pointer to change the variable's value.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Direct Memory Access</AlertTitle>
        <AlertDescription>
          You now understand the fundamental concept of pointers. While they require careful handling to avoid bugs, they are the key to unlocking the full performance and low-level control that C++ offers.
        </AlertDescription>
      </Alert>
    </div>
  );
}
