
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Text, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const concatenationCode = `
first_name = "Alex"
last_name = "Doe"

# Using the + operator
full_name = first_name + " " + last_name
print(full_name) # "Alex Doe"

# Using an f-string (formatted string literal) - Recommended
full_name_fstring = f"{first_name} {last_name}"
print(full_name_fstring) # "Alex Doe"
`;

const methodsCode = `
sentence = " The quick brown fox jumps over the lazy dog. "

# Get the length of the string
print(len(sentence))

# Convert to uppercase or lowercase
print(sentence.upper())
print(sentence.lower())

# Remove leading/trailing whitespace
print(sentence.strip())

# Replace a word
print(sentence.replace("fox", "cat"))

# Check if a string starts or ends with something
print(sentence.strip().startswith("The")) # True
`;

export default function WorkingWithStringsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Text className="h-10 w-10 text-primary" />
            Working with Strings
        </h1>
        <p className="text-lg text-muted-foreground">
            Manipulate text data, one of the most common data types you'll encounter.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>String Concatenation</CardTitle>
          <CardDescription>Combining strings together.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            You can combine multiple strings into one. The most modern and readable way to do this is with f-strings.
          </p>
          <SyntaxHighlighter language="python">
            {concatenationCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common String Methods</CardTitle>
          <CardDescription>Built-in functions to transform strings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Strings come with many useful "methods" (functions attached to the data) that let you perform common tasks.
          </p>
          <SyntaxHighlighter language="python">
            {methodsCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a variable with your favorite quote. Use string methods to make it all uppercase and then count how many characters it has.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Text Manipulation Unlocked</AlertTitle>
        <AlertDescription>
          You can now effectively handle and manipulate text data in Python, a fundamental skill for web development, data analysis, and more.
        </AlertDescription>
      </Alert>
    </div>
  );
}
