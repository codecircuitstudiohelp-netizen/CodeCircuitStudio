
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Component, Cpu, Book } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

const threadingCode = `
import threading
import time

def task(name):
    print(f"Thread {name}: starting")
    time.sleep(2)
    print(f"Thread {name}: finishing")

# Create threads
t1 = threading.Thread(target=task, args=("one",))
t2 = threading.Thread(target=task, args=("two",))

# Start threads
t1.start()
t2.start()

print("Main: all threads started")

# Wait for threads to complete
t1.join()
t2.join()

print("Main: all done")
`;

const multiprocessingCode = `
import multiprocessing
import time

def worker(name):
    print(f"Worker {name}: starting")
    time.sleep(2)
    print(f"Worker {name}: finishing")

if __name__ == '__main__':
    # Create processes
    p1 = multiprocessing.Process(target=worker, args=('one',))
    p2 = multiprocessing.Process(target=worker, args=('two',))

    # Start processes
    p1.start()
    p2.start()

    print("Main: all processes started")

    # Wait for processes to complete
    p1.join()
    p2.join()

    print("Main: all done")
`;

export default function ThreadingVsMultiprocessingPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Component className="h-10 w-10 text-primary" />
            Threading vs. Multiprocessing
        </h1>
        <p className="text-lg text-muted-foreground">
            Understand how to run Python code concurrently to improve performance.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>The Global Interpreter Lock (GIL)</CardTitle>
          <CardDescription>A key concept in Python concurrency.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Python's Global Interpreter Lock (GIL) is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode at the same time. This means that even on a multi-core processor, only one thread can be executing Python code at any given moment.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Threading</CardTitle>
          <CardDescription>Best for I/O-bound tasks.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
            <p>
                **Threading** is useful for tasks that spend a lot of time waiting for external events, like network requests or file system operations (I/O-bound tasks). While one thread is waiting, the GIL can be released, allowing another thread to run.
            </p>
            <SyntaxHighlighter language="python">{threadingCode}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Multiprocessing</CardTitle>
          <CardDescription>Best for CPU-bound tasks.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
            <p>
                **Multiprocessing** creates separate processes, each with its own Python interpreter and memory space. This allows it to bypass the GIL and execute code in parallel on multiple CPU cores. It's ideal for computationally intensive tasks (CPU-bound tasks) like data analysis or video processing.
            </p>
            <SyntaxHighlighter language="python">{multiprocessingCode}</SyntaxHighlighter>
        </CardContent>
      </Card>

    </div>
  );
}
