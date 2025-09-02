
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MousePointerClick, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const eventListenerCode = `
// HTML: <button id="myButton">Click Me</button>

// 1. Select the element
const button = document.getElementById('myButton');

// 2. Define the function to run when the event happens
function handleClick() {
  alert('Button was clicked!');
}

// 3. Attach the listener
// This tells the browser: "When a 'click' event happens on 'button', run the 'handleClick' function."
button.addEventListener('click', handleClick);
`;

export default function EventsAndListenersPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <MousePointerClick className="h-10 w-10 text-primary" />
            Events and Listeners
        </h1>
        <p className="text-lg text-muted-foreground">
            Make your webpages respond to user actions like clicks, mouse movements, and keyboard presses.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What are Events?</CardTitle>
          <CardDescription>Actions that happen in the browser.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Events are actions or occurrences that happen in the system you are programming — the system will fire a signal of some kind when an event occurs. Examples of events include:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>The user clicks the mouse (`click`).</li>
            <li>The user presses a key on the keyboard (`keydown`).</li>
            <li>The mouse is moved over an element (`mouseover`).</li>
            <li>A form is submitted (`submit`).</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Event Listeners</CardTitle>
          <CardDescription>Waiting for an event to happen and then reacting.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            An **event listener** is a JavaScript function that "listens" for a specific event on a specific HTML element. When that event occurs, the function is executed. This is the core of web interactivity.
          </p>
          <SyntaxHighlighter language="javascript">
            {eventListenerCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a button. Add an event listener so that when you click the button, it changes the text of a paragraph on the page.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>True Interactivity</AlertTitle>
        <AlertDescription>
          You can now create fully interactive web pages that respond to user input in real-time. This is the key to building engaging applications, forms, games, and more.
        </AlertDescription>
      </Alert>
    </div>
  );
}
