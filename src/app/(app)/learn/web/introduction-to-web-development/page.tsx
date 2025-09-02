
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Code, Palette, Component } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

export default function IntroWebDevPage() {
  const htmlExample = `<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>

    <h1>Welcome to my website!</h1>
    <p>This is a paragraph of text.</p>

</body>
</html>`;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Introduction to Web Development</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the exciting world of creating for the web! Let's explore the three core technologies that make websites work.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>The Three Pillars of the Web</CardTitle>
          <CardDescription>HTML, CSS, and JavaScript work together to create every website you visit.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <Code className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">HTML: The Structure</h4>
              <p className="text-muted-foreground">HyperText Markup Language (HTML) is the skeleton of a webpage. It provides the fundamental structure and content, like headings, paragraphs, images, and links.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <Palette className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">CSS: The Style</h4>
              <p className="text-muted-foreground">Cascading Style Sheets (CSS) is the clothing for the skeleton. It's used to style the HTML content, controlling colors, fonts, layout, and spacing to make the page visually appealing.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <Component className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">JavaScript: The Interactivity</h4>
              <p className="text-muted-foreground">JavaScript is the brain and muscles. It's a programming language that brings the page to life, handling user interactions, animations, data fetching, and dynamic content updates without needing to reload the page.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>An Analogy: Building a House</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>
                Think of building a website like building a house:
            </p>
             <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>HTML</strong> is the foundation, walls, and roof—the basic structure.</li>
                <li><strong>CSS</strong> is the paint, wallpaper, and furniture—the interior and exterior design that makes it look nice.</li>
                <li><strong>JavaScript</strong> is the electrical wiring, plumbing, and appliances—the systems that make the house functional and interactive (e.g., turning on lights, opening garage doors).</li>
            </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>A Glimpse at HTML</CardTitle>
          <CardDescription>Let's see what the structure of a webpage looks like in code.</CardDescription>
        </CardHeader>
        <CardContent>
            <SyntaxHighlighter language="html">
                {htmlExample}
            </SyntaxHighlighter>
             <Alert className="mt-4">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Don't worry if this looks confusing!</AlertTitle>
                <AlertDescription>
                    In the next lesson, we'll break down exactly what all these "tags" (like `<h1>` and `<p>`) mean and how to use them. For now, just recognize that HTML is all about defining different pieces of content.
                </AlertDescription>
            </Alert>
        </CardContent>
      </Card>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>The Journey Begins!</AlertTitle>
        <AlertDescription>
          You've taken the first step. Understanding these three core technologies is the key to mastering web development. Let's dive into HTML in the next lesson!
        </AlertDescription>
      </Alert>
    </div>
  );
}
