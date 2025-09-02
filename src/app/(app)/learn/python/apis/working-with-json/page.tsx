
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Code, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const jsonExample = `
// This is a JSON object
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": [
    {"title": "History", "credits": 3},
    {"title": "Math", "credits": 4}
  ]
}
`;

const pythonJsonCode = `
import json

# A JSON string
json_string = '{"name": "John Doe", "age": 30, "city": "New York"}'

# Parse the JSON string into a Python dictionary
data = json.loads(json_string)

print(data['name'])  # Output: John Doe
print(data['age'])   # Output: 30

# A Python dictionary
python_dict = {
  'name': 'Jane Doe',
  'is_active': True,
  'topics': ('Python', 'APIs')
}

# Convert the Python dictionary into a JSON string
json_output = json.dumps(python_dict, indent=2) # indent makes it readable

print(json_output)
`;

export default function WorkingWithJsonPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Code className="h-10 w-10 text-primary" />
            Working with JSON Data
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn to handle the most common data format for web APIs.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is JSON?</CardTitle>
          <CardDescription>JavaScript Object Notation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            JSON is a lightweight, text-based data interchange format. It's easy for humans to read and write and easy for machines to parse and generate. It is the most common format for data sent back and forth between a server and a web application.
          </p>
          <SyntaxHighlighter language="json">
            {jsonExample}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>JSON in Python</CardTitle>
          <CardDescription>Using the built-in `json` module.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            Python's built-in `json` library makes it incredibly easy to work with JSON data. You can convert JSON strings into Python dictionaries (`loads`) and convert Python objects into JSON strings (`dumps`).
          </p>
          <SyntaxHighlighter language="python">
            {pythonJsonCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a multi-line string containing some JSON. Use the `json` module to parse it into a dictionary and then print out one of its values.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
      </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Data Interchange</AlertTitle>
        <AlertDescription>
          You now know how to handle the lingua franca of the web. This skill is essential for any form of web development or API interaction.
        </AlertDescription>
      </Alert>
    </div>
  );
}
