
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FilePlus, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import { Button } from "@/components/ui/button";

const writeFileCode = `
# 'w' is for write mode.
# WARNING: This will overwrite the file if it already exists!
with open('output.txt', 'w') as file:
    file.write("Hello, file!\\n")
    file.write("This is a new line.")

# 'a' is for append mode.
# This will add to the end of the file without overwriting.
with open('output.txt', 'a') as file:
    file.write("\\nAppending another line.")

print("Wrote to output.txt")
`;

export default function WritingFilesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <FilePlus className="h-10 w-10 text-primary" />
            Writing to Files
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn how to save your program's output to text files.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Write and Append Modes</CardTitle>
          <CardDescription>Creating new files or adding to existing ones.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            You can open files in different modes. For writing, the two most common modes are:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>**Write (`'w'`)**: Creates a new file for writing. If the file already exists, it is erased.</li>
            <li>**Append (`'a'`)**: Opens a file for appending new information at the end. If the file doesn't exist, it's created.</li>
          </ul>
          <SyntaxHighlighter language="python">
            {writeFileCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">This is best tried on your local machine. Write a script that asks the user for their name and then appends it to a file called `guests.txt`.</p>
        <Button disabled>Code Lab (File I/O Disabled)</Button>
      </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>File Output</AlertTitle>
        <AlertDescription>
          Being able to write data to files is essential for logging, saving program state, and generating reports.
        </AlertDescription>
      </Alert>
    </div>
  );
}
