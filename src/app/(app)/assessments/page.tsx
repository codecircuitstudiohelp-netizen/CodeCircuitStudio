"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { generateAssessmentQuestion, GenerateAssessmentQuestionOutput } from "@/ai/flows/ai-assessment-generator";
import { ClipboardCheck, Sparkles, AlertCircle, CheckCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type QuestionState = 'unanswered' | 'correct' | 'incorrect';

export default function AssessmentsPage() {
  const [topic, setTopic] = useState("Python Dictionaries");
  const [questionData, setQuestionData] = useState<GenerateAssessmentQuestionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [questionState, setQuestionState] = useState<QuestionState>('unanswered');

  const handleGenerateQuestion = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!topic) return;

    setIsLoading(true);
    setQuestionData(null);
    setSelectedAnswer(null);
    setQuestionState('unanswered');
    try {
      const result = await generateAssessmentQuestion({ topic });
      setQuestionData(result);
    } catch (error) {
      console.error("Error generating question:", error);
      // Handle error display here
    }
    setIsLoading(false);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null || !questionData) return;
    if (selectedAnswer === questionData.correctAnswerIndex) {
      setQuestionState('correct');
    } else {
      setQuestionState('incorrect');
    }
  };
  
  const getOptionClassName = (index: number) => {
    if (questionState === 'unanswered') return "";
    if (index === questionData?.correctAnswerIndex) return "bg-green-100 dark:bg-green-900/50 border-green-500";
    if (index === selectedAnswer) return "bg-red-100 dark:bg-red-900/50 border-red-500";
    return "";
  };


  return (
    <div className="flex justify-center items-start py-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center gap-3">
             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ClipboardCheck className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl">AI Assessment Center</CardTitle>
              <CardDescription>Test your knowledge on any topic.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGenerateQuestion} className="flex items-end gap-2 mb-8">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="topic">Topic</Label>
              <Input
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., 'CSS Flexbox'"
                disabled={isLoading}
              />
            </div>
            <Button type="submit" disabled={isLoading || !topic}>
              <Sparkles className="mr-2 h-4 w-4" />
              {isLoading ? "Generating..." : "Generate Question"}
            </Button>
          </form>

          {isLoading && (
            <div className="space-y-6">
              <Skeleton className="h-6 w-3/4" />
              <div className="space-y-3">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          )}

          {questionData && !isLoading && (
            <div>
              <p className="font-semibold mb-4">{questionData.question}</p>
              <RadioGroup
                onValueChange={(value) => setSelectedAnswer(Number(value))}
                disabled={questionState !== 'unanswered'}
                value={selectedAnswer !== null ? String(selectedAnswer) : undefined}
              >
                {questionData.options.map((option, index) => (
                  <Label
                    key={index}
                    htmlFor={`option-${index}`}
                    className={cn(
                      "flex items-center gap-4 rounded-lg border p-4 cursor-pointer transition-all hover:bg-accent",
                      getOptionClassName(index)
                    )}
                  >
                    <RadioGroupItem value={String(index)} id={`option-${index}`} />
                    <span>{option}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}
        </CardContent>

        {questionData && !isLoading && (
          <CardFooter className="flex flex-col items-stretch gap-4 border-t pt-6">
            {questionState === 'unanswered' ? (
              <Button onClick={handleCheckAnswer} disabled={selectedAnswer === null}>Check Answer</Button>
            ) : (
              <>
                {questionState === 'correct' && (
                  <div className="flex items-center gap-2 rounded-md bg-green-500/10 p-3 text-sm text-green-700 dark:text-green-400">
                    <CheckCircle className="h-5 w-5" />
                    <p><span className="font-semibold">Correct!</span> Well done.</p>
                  </div>
                )}
                {questionState === 'incorrect' && (
                   <div className="flex items-center gap-2 rounded-md bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-400">
                    <AlertCircle className="h-5 w-5" />
                    <p><span className="font-semibold">Not quite.</span> The correct answer is highlighted in green.</p>
                  </div>
                )}
                <Button onClick={() => handleGenerateQuestion()}>
                  Next Question
                </Button>
              </>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
