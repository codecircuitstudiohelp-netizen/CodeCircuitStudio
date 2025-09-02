
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Hand, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const selectionCode = `
// Selecting a single element by its ID
const titleElement = document.getElementById('main-title');

// Selecting the FIRST element that matches a CSS selector
const firstParagraph = document.querySelector('p');

// Selecting ALL elements that match a CSS selector
const allButtons = document.querySelectorAll('.btn');

// Changing the content of the selected title
titleElement.textContent = 'New Title from JavaScript!';
`;

const creationCode = `
// 1. Create a new <li> element
const newListItem = document.createElement('li');

// 2. Give it some content
newListItem.textContent = 'A new item added dynamically';

// 3. Find the parent element (a <ul> with id="item-list")
const list = document.getElementById('item-list');

// 4. Append the new element to the parent
list.appendChild(newListItem);
`;

export default function DomManipulationPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Hand className="h-10 w-10 text-primary" />
            DOM Manipulation
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn how JavaScript can interact with and change the content and structure of your HTML document.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is the DOM?</CardTitle>
          <CardDescription>The Document Object Model.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When a web page is loaded, the browser creates a **D**ocument **O**bject **M**odel of the page. The DOM is a tree-like representation of the HTML document. JavaScript can access and modify this tree, allowing you to dynamically change what the user sees.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Selecting Elements</CardTitle>
          <CardDescription>Finding the HTML elements you want to work with.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            Before you can change an element, you need to select it. JavaScript provides several methods to do this, often using CSS-style selectors.
          </p>
          <SyntaxHighlighter language="javascript">
            {selectionCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Creating and Appending Elements</CardTitle>
          <CardDescription>Adding new content to the page.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            You can also create brand new HTML elements from scratch and add them to the DOM.
          </p>
          <SyntaxHighlighter language="javascript">
            {creationCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Write some simple HTML with a button. Then, write JavaScript to select the button and change its text when you run the code.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Dynamic Pages</AlertTitle>
        <AlertDescription>
          You can now dynamically alter a webpage's content using JavaScript. This is the foundation for creating interactive experiences, like showing or hiding elements, updating text, and more.
        </AlertDescription>
      </Alert>
    </div>
  );
}
