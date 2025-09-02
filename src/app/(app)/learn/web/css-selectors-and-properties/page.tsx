
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Palette, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const cssRule = `/* selector { property: value; } */

h1 {
  color: blue;
  font-size: 24px;
}
`;

const selectorsExample = `/* Type Selector (selects all <p> elements) */
p {
  font-family: sans-serif;
}

/* Class Selector (selects any element with class="highlight") */
.highlight {
  background-color: yellow;
}

/* ID Selector (selects the one element with id="main-title") */
#main-title {
  border-bottom: 2px solid black;
}
`;

const propertiesExample = `<h1 style="color: purple; font-size: 32px;">Styled Heading</h1>

<style>
  p {
    color: green; /* Text color */
    font-size: 16px; /* Size of the font */
    background-color: #f0f0f0; /* Background of the element */
    border: 1px solid #ccc; /* A border around the element */
    padding: 10px; /* Space inside the border */
    margin: 20px; /* Space outside the border */
  }
</style>
`;

export default function CssSelectorsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Palette className="h-10 w-10 text-primary" />
            CSS Selectors and Properties
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to target HTML elements and apply styles to make your webpages beautiful.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is CSS?</CardTitle>
          <CardDescription>The language for describing the presentation of Web pages.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            CSS (Cascading Style Sheets) is the code you use to style your webpage. While HTML provides the structure, CSS provides the style. You can control colors, fonts, spacing, layout, and much more.
          </p>
          <p>
            A CSS rule consists of a **selector** and a **declaration block**. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value.
          </p>
          <SyntaxHighlighter language="css">{cssRule}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Common Selectors</CardTitle>
          <CardDescription>Ways to target specific HTML elements.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>There are many types of selectors, but these three are the most fundamental:</p>
           <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Type Selector:</strong> Selects elements by their tag name (e.g., `h1`, `p`, `div`).</li>
                <li><strong>Class Selector:</strong> Selects elements that have a specific `class` attribute. You denote a class with a period (`.`). An element can have multiple classes.</li>
                <li><strong>ID Selector:</strong> Selects the single element that has a specific `id` attribute. You denote an ID with a hash (`#`). An ID must be unique on the page.</li>
            </ul>
          <SyntaxHighlighter language="css">{selectorsExample}</SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Essential Properties</CardTitle>
          <CardDescription>Some of the most-used CSS properties to change an element's appearance.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>
                There are hundreds of CSS properties. Here are a few of the most common ones to get you started.
            </p>
          <SyntaxHighlighter language="html">{propertiesExample}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a simple HTML structure and then use CSS to change the color of headings and the background color of paragraphs.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
      </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>You're a Web Stylist!</AlertTitle>
        <AlertDescription>
          You now know how to select HTML elements and apply basic styles. This is the foundation of web design. Next, we'll explore the CSS Box Model, which governs how elements are sized and spaced.
        </AlertDescription>
      </Alert>
    </div>
  );
}
