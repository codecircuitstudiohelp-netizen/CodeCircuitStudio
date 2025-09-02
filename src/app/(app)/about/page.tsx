
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-12">
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
        <p className="text-lg text-muted-foreground">
          The story behind CodeCircuit Studio.
        </p>
      </header>

      <Card className="text-center">
        <CardHeader>
          <div className="flex justify-center">
            <Avatar className="h-32 w-32">
              <AvatarImage src="https://picsum.photos/200/200" alt="Jay Sanghvi" data-ai-hint="person avatar" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-2xl mt-4">Jay Sanghvi</CardTitle>
          <p className="text-muted-foreground">Birla High School</p>
        </CardHeader>
        <CardContent>
          <p className="max-w-2xl mx-auto">
            CodeCircuit was born from a passion for making technology and coding accessible to everyone. Our mission is to provide an intuitive, AI-powered platform that empowers learners and builders to bring their ideas to life, from the first line of code to a fully functioning circuit.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </a>
            </Button>
             <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
