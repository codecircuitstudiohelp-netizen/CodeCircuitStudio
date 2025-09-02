
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Book, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const listCode = `
# A list of numbers
numbers = [1, 2, 3, 4, 5]

# A list of strings
fruits = ["apple", "banana", "cherry"]

# Accessing elements by index (starts at 0)
print(fruits[1]) # Output: banana

# Changing an element
fruits[0] = "orange"
print(fruits) # Output: ['orange', 'banana', 'cherry']
`;

const tupleCode = `
# A tuple is created with parentheses
point = (10, 20)

# You can access elements just like a list
print(point[0]) # Output: 10

# But you cannot change them
# point[0] = 15 # This would cause a TypeError
`;

export default function ListsAndTuplesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Book className="h-10 w-10 text-primary" />
            Advanced Lists and Tuples
        </h1>
        <p className="text-lg text-muted-foreground">
            Master two of Python's most fundamental data structures.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Lists: Ordered and Mutable</CardTitle>
          <CardDescription>The workhorse of Python data collections.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A list is an ordered collection of items. They are mutable, which means you can change their content—add, remove, or modify elements.
          </p>
          <SyntaxHighlighter language="python">
            {listCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tuples: Ordered and Immutable</CardTitle>
          <CardDescription>When you need a list that cannot change.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A tuple is similar to a list, but it is immutable, meaning its contents cannot be changed after it's created. This makes them faster and safer for data that shouldn't be modified.
          </p>
          <SyntaxHighlighter language="python">
            {tupleCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a list of your favorite hobbies. Try adding a new one and removing another.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Data Structures</AlertTitle>
        <AlertDescription>
          Understanding the difference between mutable and immutable collections is a key concept in Python.
        </AlertDescription>
      </Alert>
    </div>
  );
}
