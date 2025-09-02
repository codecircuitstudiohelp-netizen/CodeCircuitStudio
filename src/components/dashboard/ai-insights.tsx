"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Bot, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";
import {
  recommendLesson,
  RecommendLessonOutput,
} from "@/ai/flows/ai-insights-lesson-recommendation";
import { Skeleton } from "../ui/skeleton";

export function AIInsights() {
  const [recommendation, setRecommendation] =
    useState<RecommendLessonOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRecommendation = useCallback(async () => {
    setIsLoading(true);
    setRecommendation(null);
    try {
      const result = await recommendLesson({
        studentGoals: "Build a web application with a machine learning backend.",
        studentInterests: "AI, web development, data visualization.",
        studentCurrentTrack: "Python",
        studentProgress: "Completed Introduction, Variables, and Data Types.",
        studentKnowledgeGaps:
          "Struggles with control flow, especially list comprehensions.",
      });
      setRecommendation(result);
    } catch (error) {
      console.error("Failed to fetch AI recommendation:", error);
      // Optionally, set an error state here to show in the UI
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchRecommendation();
  }, [fetchRecommendation]);

  const InsightSkeleton = () => (
    <div className="rounded-lg border bg-card/50 p-3 backdrop-blur-sm">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="mt-2 h-4 w-full" />
      <Skeleton className="mt-1 h-4 w-5/6" />
      <Skeleton className="mt-3 h-5 w-1/2" />
    </div>
  );

  return (
    <Card className="bg-gradient-to-br from-primary/20 to-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            <CardTitle>AI Insights</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={fetchRecommendation}
            disabled={isLoading}
            className="h-7 w-7"
          >
            <RefreshCw
              className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
            />
            <span className="sr-only">Refresh</span>
          </Button>
        </div>
        <CardDescription>
          Personalized tips to boost your learning.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <InsightSkeleton />
        ) : recommendation ? (
          <div className="rounded-lg border bg-card/50 p-3 backdrop-blur-sm transition-colors hover:bg-card/70">
            <h4 className="font-semibold text-sm">
              {recommendation.lessonTitle}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              {recommendation.lessonDescription}
            </p>
             <p className="text-xs italic text-muted-foreground/80 mt-2">
                <strong>Reason:</strong> {recommendation.reason}
            </p>
            <Button variant="link" size="sm" className="h-auto p-0 mt-2">
              Review recommended lesson
            </Button>
          </div>
        ) : (
          <div className="rounded-lg border border-dashed bg-card/30 p-3 text-center">
            <p className="text-sm text-muted-foreground">Could not load a recommendation.</p>
             <Button variant="link" size="sm" onClick={fetchRecommendation}>Try Again</Button>
          </div>
        )}
        <div className="rounded-lg border bg-card/50 p-3 backdrop-blur-sm transition-colors hover:bg-card/70">
          <h4 className="font-semibold text-sm">New Project Idea</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Try building a 'Web Scraper' to apply your knowledge of loops and
            external libraries.
          </p>
          <Button variant="link" size="sm" className="h-auto p-0 mt-2">
            View project brief
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          <Bot className="mr-2 h-4 w-4" />
          Chat with AI Tutor
        </Button>
      </CardFooter>
    </Card>
  );
}
