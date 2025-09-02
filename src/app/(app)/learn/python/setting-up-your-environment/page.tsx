import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

export default function SetupEnvironmentPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Setting Up Your Python Environment</h1>
        <p className="text-lg text-muted-foreground">
          Let's get your computer ready for Python programming. A proper setup is the first step to becoming a Python developer!
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Why a Local Environment?</CardTitle>
          <CardDescription>While online editors are great, a local setup gives you more power and flexibility to build complex applications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Setting up a Python environment on your own computer allows you to:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Work on projects offline.</li>
            <li>Install any Python package you need from the vast Python Package Index (PyPI).</li>
            <li>Use powerful code editors and IDEs like VS Code with advanced features like debugging and version control.</li>
            <li>Manage different versions of Python for different projects.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Step 1: Install Python</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>First, you need to install the Python interpreter itself. This is the program that reads and executes your Python code.</p>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Action: Download Python</AlertTitle>
            <AlertDescription>
              Go to the official Python website at <Link href="https://www.python.org/downloads/" target="_blank" className="font-semibold text-primary underline">python.org/downloads</Link> and download the latest version for your operating system (Windows, macOS, or Linux).
            </AlertDescription>
          </Alert>
          <p className="font-semibold">Important Installation Notes:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>On Windows:</strong> Make sure to check the box that says <strong className="text-primary">"Add Python to PATH"</strong> during installation. This is crucial for running Python from the command line.</li>
            <li><strong>On macOS:</strong> Python 2 might already be installed. We need Python 3. The installer from python.org will handle this correctly. You can also use <a href="https://brew.sh/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Homebrew</a> by running `brew install python`.</li>
            <li><strong>On Linux:</strong> Most Linux distributions come with Python pre-installed. You can check your version by opening a terminal and typing `python3 --version`. If you need to install it, use your distribution's package manager (e.g., `sudo apt-get install python3` on Debian/Ubuntu).</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Step 2: Verify Your Installation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Once installed, you should verify that Python is ready to go. Open your command prompt (on Windows) or terminal (on macOS/Linux) and type the following command:</p>
          <SyntaxHighlighter language="bash">{`python --version
# Or for macOS/Linux, you might need:
python3 --version`}</SyntaxHighlighter>
          <p>You should see an output like `Python 3.12.4`, indicating that Python is installed and accessible.</p>
          <p>Next, check for `pip`, the Python package installer, which should have been installed automatically:</p>
           <SyntaxHighlighter language="bash">{`pip --version
# Or
pip3 --version`}</SyntaxHighlighter>
          <p>This will confirm that you can install external libraries, which is essential for almost any Python project.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Step 3: Choose a Code Editor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>You can write Python in a simple text file, but a good code editor will make your life much easier with features like syntax highlighting, code completion, and error checking.</p>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Our Recommendation: Visual Studio Code (VS Code)</AlertTitle>
            <AlertDescription>
              VS Code is a free, powerful, and popular code editor. <Link href="https://code.visualstudio.com/" target="_blank" className="font-semibold text-primary underline">Download it here</Link>. After installing, be sure to add the official <strong className="text-primary">Python extension</strong> from the Extensions Marketplace within VS Code for the best experience.
            </AlertDescription>
          </Alert>
          <p>Other great options include PyCharm, Sublime Text, and Atom.</p>
        </CardContent>
      </Card>
      
      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <Terminal className="h-4 w-4" />
        <AlertTitle>You're All Set!</AlertTitle>
        <AlertDescription>
          Congratulations! Your computer is now a Python development powerhouse. You're ready to write and run your first program.
        </AlertDescription>
      </Alert>
    </div>
  );
}
