
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Play, Sparkles, Terminal } from "lucide-react";
import { explainCode, ExplainCodeOutput } from "@/ai/flows/ai-copilot-code-explanation";
import { Skeleton } from "../ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const placeholderCode = (language: string) => {
  switch (language) {
    case 'python':
      return 'name = "Python"\nprint(f"Hello, {name}!")';
    case 'javascript':
      return 'const name = "JavaScript";\nconsole.log(`Hello, ${name}!`);';
    case 'cpp':
      return '#include <iostream>\n\nint main() {\n    std::cout << "Hello, C++!" << "\\n";\n    return 0;\n}';
    default:
      return '';
  }
}

export function CodeEditor() {
  const [language, setLanguage] = useState<string>("python");
  const [code, setCode] = useState<string>(placeholderCode("python"));
  const [output, setOutput] = useState<string[]>([]);
  const [explanation, setExplanation] = useState<ExplainCodeOutput | null>(null);
  const [isExplaining, setIsExplaining] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setCode(placeholderCode(lang));
    setOutput([]);
    setExplanation(null);
  }


  const handleRunCode = () => {
    setIsRunning(true);
    setOutput([]);
    
    setTimeout(() => {
      const newOutput: string[] = [];
      try {
        switch (language) {
          case 'python':
            const pythonPrintRegex = /print\((?:f?['"])(.*?)(?:['"])\)/g;
            let match;
            while ((match = pythonPrintRegex.exec(code)) !== null) {
              // This is a very basic simulation and doesn't handle f-strings properly
              // For now, we'll just output the content as is.
              newOutput.push(match[1].replace(/\{.*?\}/g, 'Python'));
            }
            if (newOutput.length === 0) newOutput.push("NOTE: Only simple print('string') or print(f'string') statements are simulated.");
            break;

          case 'javascript':
            const originalLog = console.log;
            console.log = (...args) => {
              newOutput.push(args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg)).join(' '));
            };
            eval(code);
            console.log = originalLog;
            if (newOutput.length === 0) newOutput.push("NOTE: Code executed. Use console.log() to see output.");
            break;

          case 'cpp':
            const cppCoutRegex = /std::cout\s*<<\s*(['"])(.*?)\1/g;
            let cppMatch;
            while ((cppMatch = cppCoutRegex.exec(code)) !== null) {
              newOutput.push(cppMatch[2].replace(/std::endl/g, '\n').replace(/\\n/g, ''));
            }
             if (newOutput.length === 0) newOutput.push("NOTE: Only simple std::cout << \"string\" statements are simulated.");
            break;
        }
      } catch (e: any) {
        newOutput.push(`Error: ${e.message}`);
      }

      newOutput.push("Execution complete.");
      setOutput(newOutput);
      setIsRunning(false);
    }, 500);
  };

  const handleExplainCode = async () => {
    if (!code) return;
    setIsExplaining(true);
    setExplanation(null);
    try {
      const result = await explainCode({ code, language });
      setExplanation(result);
    } catch (error) {
      console.error("Error explaining code:", error);
      setExplanation({ explanation: "Sorry, I couldn't explain that code." });
    }
    setIsExplaining(false);
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
      <Card className="h-full flex flex-col">
        <CardHeader className="flex-shrink-0 flex flex-row items-center justify-between p-4 border-b">
          <CardTitle className="text-lg">Code Lab</CardTitle>
          <div className="flex items-center gap-2">
            <Select onValueChange={handleLanguageChange} value={language}>
              <SelectTrigger className="w-[120px] h-9">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm" onClick={handleRunCode} disabled={isRunning}>
              <Play className="mr-2 h-4 w-4" />
              {isRunning ? "Running..." : "Run"}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
            <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="h-full w-full resize-none border-0 rounded-none font-code text-sm"
                placeholder="Write your code here..."
            />
        </CardContent>
      </Card>

      <div className="h-full flex flex-col gap-4">
        <Card className="flex-grow flex flex-col h-1/2">
          <CardHeader className="flex-shrink-0 p-4 border-b">
            <CardTitle className="text-lg flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Output
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-grow">
            <ScrollArea className="h-full">
                <div className="p-4 font-code text-sm text-muted-foreground">
                    {isRunning ? (
                         <p>{'>'} Running...</p>
                    ) : output.length > 0 ? output.map((line, index) => (
                        <p key={index} className={line.startsWith('Error:') ? 'text-destructive' : ''}>
                            {'>'} {line}
                        </p>
                    )) : <p>{'>'} Click "Run" to see the output.</p>}
                </div>
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="flex-grow flex flex-col h-1/2">
          <CardHeader className="flex-shrink-0 p-4 border-b">
            <CardTitle className="text-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    AI Code Explainer
                </div>
                <Button size="sm" variant="secondary" onClick={handleExplainCode} disabled={isExplaining || !code}>
                    <Sparkles className="mr-2 h-4 w-4" />
                    {isExplaining ? "Thinking..." : "Explain Code"}
                </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-grow">
            <ScrollArea className="h-full">
                <div className="p-4 text-sm">
                    {isExplaining ? (
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-1/2" />
                             <Skeleton className="h-4 w-full mt-4" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    ) : explanation ? (
                        <div className="prose prose-sm dark:prose-invert max-w-full">
                          <p className="whitespace-pre-wrap font-body text-muted-foreground">{explanation.explanation}</p>
                        </div>
                    ) : (
                        <p className="text-muted-foreground">Click "Explain Code" to get an AI-powered explanation of the code on the left.</p>
                    )}
                </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    

    