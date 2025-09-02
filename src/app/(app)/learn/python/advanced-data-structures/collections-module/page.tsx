
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const namedtupleCode = `
from collections import namedtuple

# Define a Point namedtuple
Point = namedtuple('Point', ['x', 'y'])

# Create an instance
p = Point(11, y=22)

# Access by name or index
print(p.x, p.y)  # 11 22
print(p[0], p[1]) # 11 22
`;

const dequeCode = `
from collections import deque

d = deque(['task1', 'task2', 'task3'])
d.append('task4') # Add to the right
print(d)

d.appendleft('task0') # Add to the left
print(d)

print(d.pop()) # Remove from the right
print(d.popleft()) # Remove from the left
`;

const counterCode = `
from collections import Counter

# Count items in a list
colors = ['red', 'blue', 'red', 'green', 'blue', 'blue']
color_counts = Counter(colors)
print(color_counts) # Counter({'blue': 3, 'red': 2, 'green': 1})

# Find the most common items
print(color_counts.most_common(1)) # [('blue', 3)]
`;


export default function CollectionsModulePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Book className="h-10 w-10 text-primary" />
            The `collections` Module
        </h1>
        <p className="text-lg text-muted-foreground">
            Explore specialized, high-performance container datatypes.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>`namedtuple`</CardTitle>
          <CardDescription>Tuple subclasses with named fields.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Tired of accessing tuple elements by index? `namedtuple` gives you the ability to access fields by name in a memory-efficient way.
          </p>
          <SyntaxHighlighter language="python">{namedtupleCode}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>`deque`</CardTitle>
          <CardDescription>List-like container with fast appends and pops from both ends.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A `deque` (pronounced "deck") is a "double-ended queue". It is optimized for adding and removing elements from both the front and the back.
          </p>
          <SyntaxHighlighter language="python">{dequeCode}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>`Counter`</CardTitle>
          <CardDescription>A dict subclass for counting hashable objects.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A `Counter` is a dictionary where elements are stored as keys and their counts are stored as values.
          </p>
          <SyntaxHighlighter language="python">{counterCode}</SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a `Counter` for a sentence to count how many times each word appears.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>
    </div>
  );
}
