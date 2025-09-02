
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Zap, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const asyncioCode = `
import asyncio
import time

async def say_after(delay, what):
    await asyncio.sleep(delay)
    print(what)

async def main():
    print(f"started at {time.strftime('%X')}")

    # Use asyncio.gather to run coroutines concurrently
    await asyncio.gather(
        say_after(1, 'hello'),
        say_after(2, 'world')
    )

    print(f"finished at {time.strftime('%X')}")

# To run the top-level async function
asyncio.run(main())
`;

export default function AsyncioPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Zap className="h-10 w-10 text-primary" />
            Async I/O with \`asyncio\`
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn to write highly concurrent code using the \`async/await\` syntax.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is Async I/O?</CardTitle>
          <CardDescription>A single-threaded, single-process design that uses cooperative multitasking.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            \`asyncio\` is a library to write concurrent code using the \`async/await\` syntax. It is used to build high-performance I/O-bound applications. Instead of using threads or processes, \`asyncio\` uses an **event loop**.
          </p>
          <p>An \`async\` function is called a **coroutine**. It can be paused and resumed, allowing other code to run while it's "waiting" for an operation (like a network request) to complete.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>A Basic Example</CardTitle>
        </Header>
        <CardContent className="space-y-4">
          <p>
            This example shows how to run two \`say_after\` coroutines concurrently. Even though the total sleep time is 3 seconds, the program finishes in about 2 seconds because \`asyncio.sleep\` doesn't block the entire program.
          </p>
          <SyntaxHighlighter language="python">
            {asyncioCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create an \`async\` function that simulates fetching data from a URL with a 2-second delay. Create another that simulates a 3-second delay. Run them concurrently using \`asyncio.gather\`.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Modern Concurrency</AlertTitle>
        <AlertDescription>
          \`async/await\` is a powerful and modern way to handle concurrency that is common in many languages, including JavaScript and C#. It is particularly well-suited for web servers and network clients.
        </AlertDescription>
      </Alert>
    </div>
  );
}
