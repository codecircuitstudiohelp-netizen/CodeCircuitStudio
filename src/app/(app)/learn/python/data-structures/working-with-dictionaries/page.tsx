
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BookOpen, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const dictionaryCode = `
# Creating a dictionary
student = {
    "name": "Alex",
    "age": 21,
    "courses": ["Math", "CompSci"]
}

# Accessing values by key
print(student["name"])  # Output: Alex

# Adding a new key-value pair
student["grade"] = "A"
print(student)

# Modifying a value
student["age"] = 22
print(student["age"])
`;

const iterationCode = `
student = {
    "name": "Alex",
    "age": 21,
    "grade": "A"
}

# Iterate over keys
for key in student.keys():
    print(key)

# Iterate over values
for value in student.values():
    print(value)

# Iterate over key-value pairs
for key, value in student.items():
    print(f"{key}: {value}")
`;

export default function DictionariesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <BookOpen className="h-10 w-10 text-primary" />
            Working with Dictionaries
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn to store data as key-value pairs, one of Python's most powerful features.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is a Dictionary?</CardTitle>
          <CardDescription>An unordered collection of data in a key-value format.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A dictionary stores data in `key: value` pairs. Each key must be unique, and it maps to a specific value. This is extremely useful for storing structured data where you need to look up values associated with a specific label.
          </p>
          <SyntaxHighlighter language="python">
            {dictionaryCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Iterating Through Dictionaries</CardTitle>
          <CardDescription>How to loop through the keys, values, or both.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            You can loop through a dictionary in several ways using its built-in methods: `.keys()`, `.values()`, and `.items()`.
          </p>
          <SyntaxHighlighter language="python">
            {iterationCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a dictionary to represent a car, with keys like "make", "model", and "year". Then, print out each key and its corresponding value.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Key-Value Mastery</AlertTitle>
        <AlertDescription>
          Dictionaries are fundamental to many Python applications, from web development backends to data science. Understanding them is a crucial step to becoming a proficient Python programmer.
        </AlertDescription>
      </Alert>
    </div>
  );
}
