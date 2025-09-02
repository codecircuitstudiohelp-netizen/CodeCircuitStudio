
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Layers, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const setCode = `
# Create a set from a list. Duplicates are automatically removed.
numbers_list = [1, 2, 2, 3, 4, 4, 4]
numbers_set = set(numbers_list)
print(numbers_set) # Output: {1, 2, 3, 4}

# Adding an element to a set
numbers_set.add(5)
print(numbers_set) # Output: {1, 2, 3, 4, 5}

# Removing an element
numbers_set.remove(2)
print(numbers_set) # Output: {1, 3, 4, 5}
`;

const operationsCode = `
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}

# Union (all unique elements from both sets)
union_set = set_a.union(set_b)
print(f"Union: {union_set}") # {1, 2, 3, 4, 5, 6}

# Intersection (elements that are in both sets)
intersection_set = set_a.intersection(set_b)
print(f"Intersection: {intersection_set}") # {3, 4}

# Difference (elements in set_a but not in set_b)
difference_set = set_a.difference(set_b)
print(f"Difference: {difference_set}") # {1, 2}
`;

export default function SetsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Layers className="h-10 w-10 text-primary" />
            Understanding Sets
        </h1>
        <p className="text-lg text-muted-foreground">
            Explore unordered collections of unique items.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is a Set?</CardTitle>
          <CardDescription>A collection where every element is unique.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A set is an unordered collection of items where every element must be unique. They are useful when you want to store a group of items but don't care about their order and need to ensure there are no duplicates.
          </p>
          <SyntaxHighlighter language="python">
            {setCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Set Operations</CardTitle>
          <CardDescription>Efficiently compare and combine sets.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            Sets are powerful because they provide methods that correspond to mathematical set operations, such as union, intersection, and difference.
          </p>
          <SyntaxHighlighter language="python">
            {operationsCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create two sets of your favorite colors and find the colors that are in both sets (the intersection).</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Unique Collections</AlertTitle>
        <AlertDescription>
          You have now learned about all of Python's main built-in data structures. Sets are particularly useful for tasks like finding unique items in a list or checking for membership.
        </AlertDescription>
      </Alert>
    </div>
  );
}
