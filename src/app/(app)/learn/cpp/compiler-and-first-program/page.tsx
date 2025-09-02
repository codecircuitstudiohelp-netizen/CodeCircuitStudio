
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

const helloWorldCode = `#include <iostream>

// This is the main entry point of our program
int main() {
    // std::cout is used to print to the console
    // "<<" is the stream insertion operator
    // std::endl inserts a newline character
    std::cout << "Hello, World!" << std::endl;
    
    // Return 0 to indicate successful execution
    return 0;
}`;

export default function CompilerFirstProgramPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Compiler and First Program</h1>
        <p className="text-lg text-muted-foreground">
          Let's dive in, write our first C++ program, and understand how to turn our code into an executable file.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is a Compiler?</CardTitle>
          <CardDescription>The translator that turns your code into machine language.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Unlike Python which is an interpreted language, C++ is a <strong>compiled</strong> language. This means that before you can run your program, you must first translate your C++ code (`.cpp` files) into machine code that the computer's processor can directly understand. This translation process is done by a program called a **compiler**.
          </p>
          <p>The compilation process generally involves a few steps:</p>
           <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Preprocessing:</strong> Handles directives like `#include`.</li>
            <li><strong>Compilation:</strong> Translates the C++ code into assembly language.</li>
            <li><strong>Assembly:</strong> Converts the assembly code into machine code (object files).</li>
            <li><strong>Linking:</strong> Combines your object files with libraries to create a single executable file.</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Setting Up a Compiler</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>The most common C++ compiler is part of the GNU Compiler Collection, called **g++**.</p>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Action: Install a C++ Compiler</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><strong>Windows:</strong> We recommend installing MinGW-w64 via <a href="https://www.msys2.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">MSYS2</a>. It provides a full GNU development environment, including g++.</li>
                <li><strong>macOS:</strong> Install the Xcode Command Line Tools by running `xcode-select --install` in your terminal. This includes the `clang` compiler, which is fully compatible with g++.</li>
                <li><strong>Linux:</strong> Install the `build-essential` package. For Debian/Ubuntu, run `sudo apt-get install build-essential`.</li>
              </ul>
            </AlertDescription>
          </Alert>
          <p className="mt-4">To verify your installation, open a terminal and type `g++ --version` or `clang++ --version`. You should see information about the installed compiler.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your First C++ Program: "Hello, World!"</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>It's a tradition to start with a program that prints "Hello, World!". Create a file named `hello.cpp` and type the following code:</p>
           <SyntaxHighlighter language="cpp">
            {helloWorldCode}
          </SyntaxHighlighter>
           <div className="pt-4">
                <h3 className="font-semibold mb-2">Compile and Run</h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Open a terminal in the same directory as your `hello.cpp` file and run the following command to compile it:
                </p>
                <SyntaxHighlighter language="bash">{`g++ hello.cpp -o hello`}</SyntaxHighlighter>
                 <p className="text-sm text-muted-foreground my-4">
                    This command tells the g++ compiler to take `hello.cpp` as input and create an executable file named `hello`. To run your program, type:
                </p>
                 <SyntaxHighlighter language="bash">{`./hello`}</SyntaxHighlighter>
                 <p className="text-sm text-muted-foreground mt-4">You should see `Hello, World!` printed to your console. You can also try this out in the Code Lab!</p>
                <Button asChild className="mt-2">
                    <Link href="/code-lab">Go to Code Lab</Link>
                </Button>
            </div>
        </CardContent>
      </Card>
      
      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>You've Compiled and Run C++ Code!</AlertTitle>
        <AlertDescription>
          Congratulations! You now understand the role of a compiler and have successfully created and executed your first C++ program. Next, we'll learn how to store information using variables.
        </AlertDescription>
      </Alert>
    </div>
  );
}
