import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Code, Bot, BrainCircuit } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

export default function WhatIsPythonPage() {
  const simplePythonCode = `name = "World"
print("Hello, " + name + "!")`;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">What is Python?</h1>
        <p className="text-lg text-muted-foreground">
          An introduction to one of the world's most popular and versatile programming languages.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Python in a Nutshell</CardTitle>
          <CardDescription>High-level, interpreted, and easy to learn.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. It's known for its clean syntax and gentle learning curve, making it a perfect choice for beginners.
          </p>
          <p>
            One of Python's key features is that it's an <strong>interpreted</strong> language. This means you can run the code line by line as soon as you write it, without needing a separate compilation step. This makes development and debugging much faster.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Readability and Simplicity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Python's syntax is designed to be elegant and expressive. It allows you to write programs with fewer lines of code compared to other languages like C++ or Java.
          </p>
          <p>
            For example, here's how you print "Hello, World!" in Python:
          </p>
          <SyntaxHighlighter language="python">
            {simplePythonCode}
          </SyntaxHighlighter>
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Takeaway</AlertTitle>
            <AlertDescription>
              Notice the lack of semicolons, curly braces, or complex boilerplate code. It's clean, readable, and almost like writing in plain English.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What Can You Do With Python?</CardTitle>
          <CardDescription>Its versatility is its superpower.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">Artificial Intelligence & Machine Learning</h4>
              <p className="text-muted-foreground">Python is the king of AI/ML. Libraries like TensorFlow, PyTorch, and Scikit-learn make it easy to build and train complex models.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <Code className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">Web Development</h4>
              <p className="text-muted-foreground">Frameworks like Django and Flask allow you to build robust and scalable web applications and APIs quickly.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">Data Science & Automation</h4>
              <p className="text-muted-foreground">With libraries like Pandas and NumPy, Python is the go-to language for data analysis, visualization, and automating repetitive tasks.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Ready to Start?</AlertTitle>
        <AlertDescription>
          Python's power and simplicity make it an excellent language for your coding journey. Let's get your environment set up in the next lesson!
        </AlertDescription>
      </Alert>
    </div>
  );
}
