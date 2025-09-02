
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BarChart,
  BookOpen,
  Bot,
  Flame,
  Lightbulb,
  Target,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AIInsights } from "@/components/dashboard/ai-insights"
import { SkillGrowthChart } from "@/components/dashboard/skill-growth-chart"
import { QuickStartTutorial } from "@/components/dashboard/quick-start-tutorial"

export default function DashboardPage() {
  const badges = [
    { name: "Pythonista", description: "Completed the Python Track" },
    { name: "Web Weaver", description: "Completed the Web Dev Track" },
    { name: "C++ Champion", description: "Completed the C++ Track" },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-4">
      <div className="space-y-6 lg:col-span-2 xl:col-span-3">

        <QuickStartTutorial />
      
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Streak</CardTitle>
              <Flame className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0 days</div>
              <p className="text-xs text-muted-foreground">Start learning to build a streak!</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">XP Level</CardTitle>
              <BarChart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Level 1</div>
              <p className="text-xs text-muted-foreground">0 / 100 XP to next level</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Goal</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Master Python</div>
              <p className="text-xs text-muted-foreground">Complete the Python track</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Continue Learning</CardTitle>
            <CardDescription>Your next step on your learning journey.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-accent">
              <div className="hidden rounded-md bg-accent p-3 sm:block">
                <BookOpen className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">What is Python?</h3>
                   <Badge variant="secondary">Python</Badge>
                </div>
                <p className="text-sm text-muted-foreground">An introduction to one of the world's most popular programming languages.</p>
                <div className="mt-2 flex items-center gap-4">
                  <Progress value={0} className="h-2 w-[100px]" />
                  <span className="text-xs text-muted-foreground">0% complete</span>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link href="/learn/python/what-is-python">Start Lesson</Link>
              </Button>
            </div>
             <div className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-accent">
              <div className="hidden rounded-md bg-accent p-3 sm:block">
                <BookOpen className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Introduction to Web Development</h3>
                   <Badge variant="secondary">Web</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Explore the three core technologies that make websites work.</p>
                <div className="mt-2 flex items-center gap-4">
                  <Progress value={0} className="h-2 w-[100px]" />
                  <span className="text-xs text-muted-foreground">0% complete</span>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link href="/learn/web/introduction-to-web-development">Start Lesson</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>My Badges</CardTitle>
                <CardDescription>Your collection of completed achievements.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {badges.map((badge) => (
                    <div key={badge.name} className="flex flex-col items-center text-center gap-2">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 text-primary">
                            <Award className="h-10 w-10" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-semibold text-sm">{badge.name}</h4>
                            <p className="text-xs text-muted-foreground">{badge.description}</p>
                        </div>
                    </div>
                ))}
                 <div className="flex flex-col items-center text-center gap-2 opacity-50">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-muted/50 border-2 border-dashed">
                        <Award className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                        <h4 className="font-semibold text-sm">First Project</h4>
                        <p className="text-xs text-muted-foreground">Complete a project</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Growth</CardTitle>
            <CardDescription>Your XP earned over the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <SkillGrowthChart />
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6 lg:col-span-1 xl:col-span-1">
        <AIInsights />
      </div>
    </div>
  )
}
