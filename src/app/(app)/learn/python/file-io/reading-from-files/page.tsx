
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileText, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const readFileCode = `
# The 'with' statement is recommended because it automatically closes the file
# even if errors occur.
# 'r' stands for read mode.

try:
    with open('example.txt', 'r') as file:
        content = file.read() # Reads the entire file content into a string
        print(content)
except FileNotFoundError:
    print("The file 'example.txt' was not found.")

# To read a file line by line:
try:
    with open('example.txt', 'r') as file:
        for line in file:
            print(line.strip()) # .strip() removes leading/trailing whitespace
except FileNotFoundError:
    print("The file 'example.txt' was not found.")
`;

export default function ReadingFilesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <FileText className="h-10 w-10 text-primary" />
            Reading from Files
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn how to read data from text files using Python.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Opening and Reading Files</CardTitle>
          <CardDescription>Accessing data stored on your disk.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Python makes it simple to read from files. The key function is `open()`, which returns a file object. The best practice is to use the `with` statement, which ensures the file is properly closed after its suite finishes.
          </p>
          <SyntaxHighlighter language="python">
            {readFileCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">The Code Lab doesn't support file I/O directly. Try this on your local machine! Create a file named `hello.txt`, write some text in it, and then use a Python script to read and print its content.</p>
        <Button disabled>Code Lab (File I/O Disabled)</Button>
      </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>File Input</AlertTitle>
        <AlertDescription>
          You can now write programs that read configuration, process data files, and interact with the filesystem, a crucial skill for real-world applications.
        </AlertDescription>
      </Alert>
    </div>
  );
}
