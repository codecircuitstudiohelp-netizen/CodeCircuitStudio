
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bug, Terminal } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

const pdbCode = `
import pdb

def my_buggy_function(x, y):
    # Set a trace, which will pause execution and start the debugger
    pdb.set_trace()
    
    result = x / y
    return result

print(my_buggy_function(10, 0))
`;

const pdbCommands = `
(Pdb) l(ist)          # Show current location in the code
(Pdb) n(ext)          # Execute the current line and move to the next
(Pdb) c(ontinue)      # Continue execution until another breakpoint
(Pdb) p(rint) x       # Print the value of variable 'x'
(Pdb) q(uit)          # Exit the debugger
`;

export default function DebuggingWithPdbPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Bug className="h-10 w-10 text-primary" />
            Debugging with PDB
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn to use Python's built-in debugger to find and fix bugs.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>The Python Debugger (`pdb`)</CardTitle>
          <CardDescription>An interactive tool for stepping through your code.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When `print()` statements aren't enough, the Python Debugger (`pdb`) allows you to pause your program's execution, inspect the state of variables, and execute code line by line.
          </p>
          <p>You can set a breakpoint in your code by inserting `pdb.set_trace()`.</p>
          <SyntaxHighlighter language="python">{pdbCode}</SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common PDB Commands</CardTitle>
        </Header>
        <CardContent className="space-y-4">
          <p>
            When you hit a breakpoint, you'll be dropped into an interactive`(Pdb)` prompt in your terminal. Here are some of the most useful commands:
          </p>
          <SyntaxHighlighter language="bash">{pdbCommands}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <Terminal className="h-4 w-4" />
        <AlertTitle>IDE Debuggers</AlertTitle>
        <AlertDescription>
          While `pdb` is great for command-line debugging, modern IDEs like VS Code and PyCharm have graphical debuggers built-in that provide an even more powerful and user-friendly experience, often using `pdb` under the hood.
        </AlertDescription>
      </Alert>
    </div>
  );
}
