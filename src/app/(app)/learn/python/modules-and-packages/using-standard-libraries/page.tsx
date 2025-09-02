
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Library, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const importCode = `
# Import the entire module
import math
print(math.pi)
print(math.sqrt(16))

# Import a specific function from a module
from random import randint
print(f"Random number: {randint(1, 100)}")

# Import a module with an alias
import datetime as dt
today = dt.date.today()
print(f"Today is {today}")
`;

export default function StandardLibrariesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Library className="h-10 w-10 text-primary" />
            Using Standard Libraries
        </h1>
        <p className="text-lg text-muted-foreground">
            Tap into Python's vast collection of pre-built modules.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What are Modules?</CardTitle>
          <CardDescription>Files containing Python code that you can reuse.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A module is simply a file with a `.py` extension containing Python definitions and statements. Python comes with a huge **standard library** of modules for common tasks, like math operations (`math`), generating random numbers (`random`), or working with dates and times (`datetime`).
          </p>
          <p>You use the `import` statement to make the code in a module available in your current script.</p>
          <SyntaxHighlighter language="python">
            {importCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Import the `os` module and use `os.getcwd()` to print the current working directory.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>"Batteries Included"</AlertTitle>
        <AlertDescription>
          Python's philosophy is "batteries included," meaning its standard library is comprehensive enough to handle a wide variety of tasks without needing to install external packages.
        </AlertDescription>
      </Alert>
    </div>
  );
}
