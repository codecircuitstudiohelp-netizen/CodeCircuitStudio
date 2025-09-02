
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PackageCheck, Terminal } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import { Button } from "@/components/ui/button";

const pipCode = `
# Install a package
pip install requests

# Install a specific version of a package
pip install numpy==1.26.4

# Uninstall a package
pip uninstall requests

# List all installed packages
pip list
`;

const requirementsCode = `
# requirements.txt file:
requests
numpy==1.26.4
pandas

# Command to install from the file:
pip install -r requirements.txt
`;

export default function InstallingWithPipPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <PackageCheck className="h-10 w-10 text-primary" />
            Installing with Pip
        </h1>
        <p className="text-lg text-muted-foreground">
            Expand Python's capabilities by installing third-party packages.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>PyPI and Pip</CardTitle>
          <CardDescription>The Python Package Index and its installer.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            While the standard library is powerful, the Python community has created hundreds of thousands of third-party packages for specialized tasks. These are hosted on the **Python Package Index (PyPI)**.
          </p>
          <p>
            **Pip** is the standard package manager for Python. You use it from your terminal to install and manage these packages.
          </p>
          <SyntaxHighlighter language="bash">
            {pipCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Managing Dependencies with `requirements.txt`</CardTitle>
          <CardDescription>A standard way to list your project's dependencies.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            It is a best practice to list your project's external package dependencies in a file named `requirements.txt`. This makes it easy for other developers (or you, on another computer) to set up the same environment.
          </p>
          <SyntaxHighlighter language="bash">
            {requirementsCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Virtual Environments</AlertTitle>
        <AlertDescription>
          It is strongly recommended to use a **virtual environment** (e.g., using Python's built-in `venv` module) for each project. This isolates your project's dependencies from your system's Python installation and from other projects.
        </AlertDescription>
      </Alert>
    </div>
  );
}
