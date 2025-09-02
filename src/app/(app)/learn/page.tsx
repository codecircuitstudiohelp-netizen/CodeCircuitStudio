
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarClock, Info } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const learningTracks = [
  {
    name: "Python",
    description: "From variables to AI/ML, master the world's most versatile language.",
    tags: ["Beginner-Friendly", "AI/ML", "Web"],
    progress: 0,
    href: "/learn/python",
  },
  {
    name: "HTML/CSS/JS",
    description: "Build stunning, interactive websites from scratch.",
    tags: ["Web Development", "Frontend"],
    progress: 0,
    href: "/learn/web",
  },
  {
    name: "C++",
    description: "Unlock high-performance computing and game development.",
    tags: ["Advanced", "Systems", "Gaming"],
    progress: 0,
    href: "/learn/cpp",
  },
  {
    name: "Arduino",
    description: "Bring your hardware ideas to life with electronics and code.",
    tags: ["IoT", "Hardware", "Robotics"],
    progress: 0,
    href: "/circuit-designer",
  },
];

export default function LearnPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Image 
            src="https://th.bing.com/th/id/R.f37ab72791a369bde64c82489d7949eb?rik=5VYcQO%2bOXuVadw&riu=http%3a%2f%2fwww.techyv.com%2fsites%2fdefault%2fusers%2fsuperuser%2fdepositphotos_43853639-stock-photo-word-cloud-programming-languages-or.jpg&ehk=13ssJr4lY5HTnfEfPtOgFvt51Hz8LY7Nw59oqurTgE4%3d&risl=&pid=ImgRaw&r=0"
            alt="Programming Languages Word Cloud"
            width={1200}
            height={400}
            className="rounded-lg object-cover w-full max-h-64 shadow-lg"
            data-ai-hint="code languages"
        />
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Learning Tracks</h1>
            <p className="text-muted-foreground">
              Choose your path. Master a new skill. Unlock your potential.
            </p>
        </div>
      </div>

       <Alert variant="default" className="bg-primary/5 border-primary/20">
        <CalendarClock className="h-4 w-4" />
        <AlertTitle>Exciting Updates Coming Soon!</AlertTitle>
        <AlertDescription>
          We are hard at work developing more lessons, projects, and learning tracks. Expect new content to be added over the next 1-2 months. Stay tuned!
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {learningTracks.map((track) => (
          <Link href={track.href} key={track.name} className="group">
            <Card className="h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">{track.name}</CardTitle>
                <CardDescription>{track.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {track.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Progress value={track.progress} className="h-2"/>
                    <p className="text-sm text-muted-foreground">{track.progress}% complete</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
