
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Smartphone, Tablet, Monitor, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const mediaQueryCode = `
.container {
  width: 90%;
  margin: 0 auto;
}

/* Base styles for mobile first */
.box {
  background-color: hsl(var(--primary));
  height: 100px;
  margin-bottom: 10px;
}

/* On screens 768px wide or larger (tablets and desktops) */
@media (min-width: 768px) {
  .container {
    display: flex;
    gap: 10px;
  }
  .box {
    flex: 1; /* Each box will take up equal space */
  }
}
`;

export default function ResponsiveDesignPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Smartphone className="h-10 w-10 text-primary" />
            Responsive Design
        </h1>
        <p className="text-lg text-muted-foreground">
            Ensure your websites look great on all devices, from phones to desktops.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is Responsive Design?</CardTitle>
          <CardDescription>Creating web pages that adapt to the screen size.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Responsive web design is an approach that makes your web pages render well on a variety of devices and window or screen sizes. The primary tools for this are flexible layouts (like Flexbox and Grid) and **media queries**.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Media Queries</CardTitle>
          <CardDescription>Applying CSS rules based on device characteristics.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            A media query is a CSS feature that allows you to apply styles only when certain conditions are met, most commonly the viewport width. This is the key to changing your layout for different devices.
          </p>
          <p>The "mobile-first" approach is a common best practice: you design for the smallest screen first, and then use media queries with `min-width` to add complexity for larger screens.</p>
          <SyntaxHighlighter language="css">
            {mediaQueryCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a simple layout. Then, add a media query that changes the background color of the `body` when the screen width is less than 600px. Resize your browser window to see the effect!</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Adaptable Layouts</AlertTitle>
        <AlertDescription>
          You can now build websites that provide an optimal viewing experience for everyone, regardless of their device. This is a critical skill for any modern web developer.
        </AlertDescription>
      </Alert>
    </div>
  );
}
