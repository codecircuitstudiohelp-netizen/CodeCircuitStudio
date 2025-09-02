
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Grid, Rows, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const flexboxCode = `
.container {
  display: flex;
  justify-content: space-around; /* Distributes items along the main axis */
  align-items: center; /* Aligns items along the cross axis */
  height: 200px;
  background-color: #f0f0f0;
}
.item {
  width: 50px;
  height: 50px;
  background-color: hsl(var(--primary));
}
`;

const gridCode = `
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Three columns with different widths */
  grid-gap: 10px; /* Space between grid items */
  background-color: #f0f0f0;
}
.grid-item {
  background-color: hsl(var(--primary));
  padding: 20px;
  text-align: center;
  color: white;
}
`;

export default function FlexboxAndGridPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Grid className="h-10 w-10 text-primary" />
            Flexbox and Grid
        </h1>
        <p className="text-lg text-muted-foreground">
            The two modern CSS layout systems for creating complex and responsive designs.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Flexbox: For One-Dimensional Layouts</CardTitle>
          <CardDescription>Ideal for aligning items in a single row or column.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Flexbox (`display: flex`) is designed for laying out items in a single dimension – either as a row or as a column. It makes it incredibly easy to align items, distribute space, and re-order elements.
          </p>
          <SyntaxHighlighter language="css">
            {flexboxCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grid: For Two-Dimensional Layouts</CardTitle>
          <CardDescription>Perfect for creating complex layouts with both rows and columns.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            CSS Grid (`display: grid`) is designed for two-dimensional layout, meaning it can handle both columns and rows simultaneously. It's the most powerful layout system in CSS, allowing you to create sophisticated and consistent designs with ease.
          </p>
          <SyntaxHighlighter language="css">
            {gridCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a container `div` with several item `div`s inside. First, try to align them using `display: flex`. Then, switch to `display: grid` and define some columns.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Modern Layout Mastery</AlertTitle>
        <AlertDescription>
          You now have the tools to create almost any web layout imaginable. Use Flexbox for component-level alignment and Grid for page-level layout.
        </AlertDescription>
      </Alert>
    </div>
  );
}
