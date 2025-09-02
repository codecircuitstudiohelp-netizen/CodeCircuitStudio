
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Code, Link as LinkIcon, Image as ImageIcon } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const basicStructure = `<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`;

const tagsExample = `<!-- Headings for structure -->
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section Heading</h3>

<!-- A paragraph of text -->
<p>This is a standard paragraph. You can write multiple sentences here. HTML will handle wrapping the text.</p>

<!-- A link to another website -->
<a href="https://www.google.com">Visit Google</a>

<!-- An image with a description -->
<img src="https://picsum.photos/800/400" alt="A random placeholder image" data-ai-hint="random abstract">`;

export default function HtmlStructurePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">HTML Structure and Tags</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to give your webpage a solid foundation with the essential building blocks of HTML.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>The Anatomy of an HTML Document</CardTitle>
          <CardDescription>Every HTML page follows a standard structure.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            An HTML document is a simple text file, but it uses specific "tags" to tell the browser how to display content. The basic structure looks like this:
          </p>
          <SyntaxHighlighter language="html">{basicStructure}</SyntaxHighlighter>
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Breaking it Down</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><code>&lt;!DOCTYPE html&gt;</code>: Declares this is an HTML5 document. It's always the very first line.</li>
                <li><code>&lt;html&gt;</code>: The root element that wraps all the content on the page.</li>
                <li><code>&lt;head&gt;</code>: Contains meta-information about the document, like the page title, links to stylesheets, and character sets. This content is not displayed on the page itself.</li>
                <li><code>&lt;body&gt;</code>: Contains all the visible content of the webpage—headings, paragraphs, images, links, etc.</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Essential Content Tags</CardTitle>
          <CardDescription>These are the tags you'll use most often to create content.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>Tags are keywords surrounded by angle brackets, like <code>&lt;p&gt;</code>. They usually come in pairs: an opening tag and a closing tag (e.g., <code>&lt;p&gt;Content&lt;/p&gt;</code>).</p>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <Code className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">Headings (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>)</h4>
              <p className="text-muted-foreground">Used to define headings. <code>&lt;h1&gt;</code> is the most important (main title), and <code>&lt;h6&gt;</code> is the least important.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <Code className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">Paragraphs (<code>&lt;p&gt;</code>)</h4>
              <p className="text-muted-foreground">The standard tag for blocks of text.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <LinkIcon className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">Links (<code>&lt;a&gt;</code>)</h4>
              <p className="text-muted-foreground">The "anchor" tag creates hyperlinks. The `href` attribute specifies the destination URL.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <ImageIcon className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">Images (<code>&lt;img&gt;</code>)</h4>
              <p className="text-muted-foreground">Embeds an image into the page. The `src` attribute is the path to the image, and `alt` provides descriptive text for accessibility.</p>
            </div>
          </div>
           <div className="rounded-md overflow-hidden border">
              <Image src="https://picsum.photos/800/400" alt="A random placeholder image" width={800} height={400} data-ai-hint="random abstract" />
           </div>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Try creating your own simple webpage with a heading, a paragraph, and a link to your favorite website.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Content is King!</AlertTitle>
        <AlertDescription>
          You now know how to structure an HTML document and add the most common types of content. In the next lesson, we'll learn how to create forms to collect user input.
        </AlertDescription>
      </Alert>
    </div>
  );
}
