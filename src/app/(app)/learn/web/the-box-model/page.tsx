
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Box, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const boxModelCode = `
.my-box {
  width: 300px;
  height: 200px;
  padding: 20px; /* Space inside the box, between content and border */
  border: 5px solid black; /* The box's own border */
  margin: 15px; /* Space outside the box, between it and other elements */
  background-color: lightblue;
}
`;

export default function TheBoxModelPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Box className="h-10 w-10 text-primary" />
            The CSS Box Model
        </h1>
        <p className="text-lg text-muted-foreground">
            Understand the fundamental concept that governs layout and spacing on the web.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Everything is a Box</CardTitle>
          <CardDescription>How browsers think about layout.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            In CSS, every HTML element is treated as a rectangular box. The CSS box model describes how these boxes are sized and how they interact with each other.
          </p>
          <p>The box model consists of four parts, from the inside out:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Content:</strong> The actual content of the box, where text and images appear.</li>
            <li><strong>Padding:</strong> A transparent area around the content, clearing space within the box.</li>
            <li><strong>Border:</strong> A border that goes around the padding and content.</li>
            <li><strong>Margin:</strong> A transparent area outside the border, clearing space between this box and other elements.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Visualizing the Box Model</CardTitle>
        </Header>
        <CardContent className="space-y-4">
          <SyntaxHighlighter language="css">
            {boxModelCode}
          </SyntaxHighlighter>
          <div className="p-4 bg-muted rounded-lg">
            <div style={{margin: '15px', backgroundColor: 'rgba(255,0,0,0.2)', padding: '5px'}}>
                Margin
                <div style={{border: '5px solid black', backgroundColor: 'rgba(0,255,0,0.2)'}}>
                    Border
                    <div style={{padding: '20px', backgroundColor: 'rgba(0,0,255,0.2)'}}>
                        Padding
                        <div className="bg-background p-4 text-center">Content</div>
                    </div>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a `div` element and give it a border. Then, experiment with changing the `padding` and `margin` values to see how it affects the layout.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Layout Fundamentals</AlertTitle>
        <AlertDescription>
          Mastering the box model is the key to controlling layout in CSS. Understanding how margin, border, and padding work together is essential for building any webpage.
        </AlertDescription>
      </Alert>
    </div>
  );
}
