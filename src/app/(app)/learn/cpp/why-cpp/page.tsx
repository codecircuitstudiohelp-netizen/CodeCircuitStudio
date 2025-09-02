
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Gamepad2, AreaChart, Cpu } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

export default function WhyCppPage() {
  const simpleCppCode = `#include <iostream>

int main() {
    std::cout << "Hello, C++!" << std::endl;
    return 0;
}`;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Why Choose C++?</h1>
        <p className="text-lg text-muted-foreground">
          Discover why C++ is a dominant force in performance-critical applications.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>C++: Power and Control</CardTitle>
          <CardDescription>A high-level language with low-level capabilities.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            C++ is a statically-typed, compiled, general-purpose, and case-sensitive programming language that supports procedural, object-oriented, and generic programming. It was designed with a bias toward system programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights.
          </p>
          <p>
            This means C++ gives you incredible power. You can manage memory directly, get close to the hardware, and optimize for the best possible performance. This makes it an ideal choice for tasks where speed is critical.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>A Glimpse of C++ Syntax</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
           <SyntaxHighlighter language="cpp">
            {simpleCppCode}
          </SyntaxHighlighter>
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Observation</AlertTitle>
            <AlertDescription>
              C++ syntax is more verbose than Python's. You'll notice elements like `#include`, `std::`, semicolons `;`, and a `main` function with a return type. These constructs give the programmer more explicit control over the program's structure and behavior.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Where is C++ Used?</CardTitle>
          <CardDescription>Its performance makes it essential in many industries.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <Gamepad2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">Game Development</h4>
              <p className="text-muted-foreground">Major game engines like Unreal Engine and CryEngine are written in C++. It's used to build high-performance games for PCs, consoles, and mobile devices.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">Systems & Embedded Programming</h4>
              <p className="text-muted-foreground">C++ is used to write operating systems, device drivers, and software for embedded systems like IoT devices, medical equipment, and automotive systems.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <AreaChart className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">High-Frequency Trading</h4>
              <p className="text-muted-foreground">In finance, every microsecond counts. C++ is the language of choice for developing high-frequency trading applications that require extreme speed and low latency.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Ready for the Challenge?</AlertTitle>
        <AlertDescription>
          Learning C++ is a challenging but rewarding journey that opens doors to some of the most exciting fields in software engineering. Let's get your compiler set up in the next lesson!
        </AlertDescription>
      </Alert>
    </div>
  );
}
