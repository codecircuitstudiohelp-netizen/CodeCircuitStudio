
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, PencilRuler, Trash2 } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const newDeleteCode = `
#include <iostream>

int main() {
    // Allocate an integer on the heap. 
    // 'intPtr' now holds the address of this new memory.
    int* intPtr = new int;

    *intPtr = 100; // Assign a value to the allocated memory.
    std::cout << "Value: " << *intPtr << std::endl;

    // IMPORTANT: Free the memory when you are done with it.
    delete intPtr;
    intPtr = nullptr; // Good practice: set pointer to null after deleting.

    return 0;
}
`;

const arrayCode = `
#include <iostream>

int main() {
    int size = 5;
    // Allocate an array of 5 integers on the heap.
    int* arrayPtr = new int[size];

    for (int i = 0; i < size; ++i) {
        arrayPtr[i] = i * 10;
        std::cout << arrayPtr[i] << " ";
    }
    std::cout << std::endl;

    // Use delete[] for arrays allocated with new[].
    delete[] arrayPtr;
    arrayPtr = nullptr;
    
    return 0;
}
`;

export default function DynamicMemoryAllocationPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Dynamic Memory Allocation</h1>
        <p className="text-lg text-muted-foreground">
          Create variables at runtime and manage their lifetimes yourself.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Stack vs. Heap</CardTitle>
          <CardDescription>Two places where your program stores data.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            So far, the variables you've created (like `int x = 5;`) have been stored on the **Stack**. Stack memory is fast, automatically managed (variables are destroyed when they go out of scope), and has a fixed size.
          </p>
          <p>
            The **Heap** is a large pool of memory available to the programmer. You can request blocks of memory from the heap at any time during your program's execution. This is called **dynamic memory allocation**. The key difference is: **you** are responsible for releasing the memory back to the system when you're done with it.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The `new` and `delete` Operators</CardTitle>
        </Header>
        <CardContent className="space-y-4">
            <p>You use the `new` keyword to allocate memory on the heap and `delete` to free it.</p>
            <SyntaxHighlighter language="cpp">{newDeleteCode}</SyntaxHighlighter>
             <Alert variant="destructive" className="mt-4">
                <Trash2 className="h-4 w-4" />
                <AlertTitle>Memory Leaks!</AlertTitle>
                <AlertDescription>
                If you allocate memory with `new` and forget to free it with `delete`, you create a **memory leak**. The program loses the pointer to that memory but the memory remains allocated. Doing this repeatedly can exhaust all available memory and crash your program or the whole system.
                </AlertDescription>
            </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>Dynamic Arrays</CardTitle>
        </Header>
        <CardContent className="space-y-4">
            <p>
                One of the most common uses for dynamic allocation is creating arrays whose size isn't known until runtime.
            </p>
            <SyntaxHighlighter language="cpp">{arrayCode}</SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a dynamic array of `double`s. Fill it with some values, print them out, and then remember to `delete[]` it.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Manual Memory Management</AlertTitle>
        <AlertDescription>
          You now understand the basics of heap allocation. This power comes with great responsibility. In the next lesson, we'll see how modern C++ makes this much safer with smart pointers.
        </AlertDescription>
      </Alert>
    </div>
  );
}
