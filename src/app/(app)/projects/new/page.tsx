
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateProjectIdea, GenerateProjectIdeaOutput } from "@/ai/flows/ai-project-generator";
import { Bot, Sparkles, Wand2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AIProjectGeneratorPage() {
  const [interests, setInterests] = useState("game development");
  const [language, setLanguage] = useState("python");
  const [projectIdea, setProjectIdea] = useState<GenerateProjectIdeaOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateProject = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!interests || !language) return;

    setIsLoading(true);
    setProjectIdea(null);
    try {
      const result = await generateProjectIdea({ interests, language });
      setProjectIdea(result);
    } catch (error) {
      console.error("Error generating project:", error);
      // Handle error display here
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
        <Button variant="outline" asChild>
            <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>
        </Button>

      <div className="flex justify-center items-start py-8">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <div className="flex items-center gap-3">
               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Wand2 className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl">AI Project Generator</CardTitle>
                <CardDescription>Get a custom project idea based on your interests.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGenerateProject} className="flex flex-col sm:flex-row items-end gap-4 mb-8">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="interests">Your Interests</Label>
                <Input
                  id="interests"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="e.g., 'data visualization, web apps'"
                  disabled={isLoading}
                />
              </div>
              <div className="grid w-full sm:w-auto items-center gap-1.5">
                 <Label htmlFor="language">Language</Label>
                <Select value={language} onValueChange={setLanguage} disabled={isLoading}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                        <SelectItem value="cpp">C++</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              <Button type="submit" disabled={isLoading || !interests || !language} className="w-full sm:w-auto">
                <Sparkles className="mr-2 h-4 w-4" />
                {isLoading ? "Generating..." : "Generate Idea"}
              </Button>
            </form>

            {isLoading && (
              <div className="space-y-6">
                <Skeleton className="h-8 w-3/4" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                 <div className="space-y-3 pt-4">
                  <Skeleton className="h-6 w-1/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            )}

            {projectIdea && !isLoading && (
              <div className="prose prose-sm dark:prose-invert max-w-full">
                <h2>{projectIdea.title}</h2>
                <p>{projectIdea.description}</p>
                <h3>Features to Implement:</h3>
                <ul className="whitespace-pre-wrap">{projectIdea.features}</ul>
              </div>
            )}
          </CardContent>

          {projectIdea && !isLoading && (
          <CardFooter className="flex flex-col items-stretch gap-4 border-t pt-6">
            <p className="text-sm text-muted-foreground text-center">Ready to start building?</p>
             <Button asChild>
                <Link href="/code-lab">Go to Code Lab</Link>
             </Button>
          </CardFooter>
        )}
        </Card>
      </div>
    </div>
  );
}
