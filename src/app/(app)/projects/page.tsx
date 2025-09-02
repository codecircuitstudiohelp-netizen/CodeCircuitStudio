
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, CheckSquare, Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectTemplates = [
  {
    name: "Number Guessing Game",
    description: "A classic beginner project using loops and conditionals.",
    tags: ["Python", "Beginner", "CLI"],
    icon: Bot,
    href: "/learn/python/project-number-guessing-game",
  },
  {
    name: "Interactive To-Do List",
    description: "Learn DOM manipulation by building a functional to-do list.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: CheckSquare,
    href: "/learn/web/project-interactive-to-do-list",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          Apply your skills with hands-on projects or generate a new one with AI.
        </p>
      </div>

       <Card className="bg-gradient-to-br from-primary/10 to-transparent">
        <CardHeader>
          <div className="flex items-center gap-4">
             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Wand2 className="h-6 w-6" />
            </div>
            <div>
              <CardTitle>AI Project Generator</CardTitle>
              <CardDescription>Don't know what to build? Get a custom project idea based on your interests.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
            <Button asChild>
                <Link href="/projects/new">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate a New Project
                </Link>
            </Button>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold tracking-tight pt-4">Project Templates</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectTemplates.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-2xl">{project.name}</CardTitle>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <project.icon className="h-6 w-6" />
                </div>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-end">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button asChild className="w-full mt-auto">
                <Link href={project.href}>
                  Start Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
