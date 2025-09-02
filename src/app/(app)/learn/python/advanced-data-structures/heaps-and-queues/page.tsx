
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Layers, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const heapqCode = `
import heapq

# A regular list
data = [1, 5, 2, 8, 3, 7, 4]

# Transform the list into a heap in-place
heapq.heapify(data)
print(f"Heap: {data}") # Note: it doesn't sort the list

# Push a new item onto the heap
heapq.heappush(data, 0)
print(f"After push: {data}")

# Pop the smallest item from the heap
smallest = heapq.heappop(data)
print(f"Smallest item: {smallest}")
print(f"After pop: {data}")
`;

export default function HeapsAndQueuesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Layers className="h-10 w-10 text-primary" />
            Heaps and Queues with `heapq`
        </h1>
        <p className="text-lg text-muted-foreground">
            Efficiently find the smallest or largest items in a collection.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is a Heap?</CardTitle>
          <CardDescription>A specialized tree-based data structure.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A heap is a binary tree where the parent node is always smaller than or equal to its children (in a min-heap). This property means that the smallest element is always at the root of the tree.
          </p>
          <p>Python's `heapq` module provides an efficient implementation of the min-heap algorithm. It's great for implementing priority queues.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Using `heapq`</CardTitle>
          <CardDescription>The module operates on standard Python lists.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            You don't create a special heap object. Instead, you use `heapq` functions on a regular list to maintain the heap property.
          </p>
          <SyntaxHighlighter language="python">
            {heapqCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a list of numbers. Use `heapq` to find the three smallest numbers in the list.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
      </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Priority Queues</AlertTitle>
        <AlertDescription>
            Heaps are the classic data structure for implementing priority queues, where items are processed based on their priority, not just when they were added. This is useful in many algorithms, like Dijkstra's shortest path algorithm.
        </AlertDescription>
      </Alert>
    </div>
  );
}
