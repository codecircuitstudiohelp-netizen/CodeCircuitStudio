
"use client";

import * as React from "react";
import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Lightbulb, BookOpen, Code2, CircuitBoard, X } from "lucide-react";
import Image from "next/image";

const tutorialSteps = [
  {
    icon: Lightbulb,
    title: "Welcome to CodeCircuit!",
    description: "This is your personal AI-powered learning lab. Let's take a quick tour of the main features.",
    image: "https://assets.superblog.ai/site_cuid_clvc4016q001j13bhaleswmt1/images/12-1717012959209-compressed.jpg",
    imageHint: "abstract tech"
  },
  {
    icon: BookOpen,
    title: "Learning Tracks",
    description: "Follow guided lessons in Python, Web Development, and C++. Your progress is saved automatically.",
    image: "https://picsum.photos/800/402",
    imageHint: "library books"
  },
  {
    icon: Code2,
    title: "The Code Lab",
    description: "A sandbox to experiment with code. Use the AI Explainer to understand complex snippets.",
    image: "https://picsum.photos/800/403",
    imageHint: "computer code"
  },
  {
    icon: CircuitBoard,
    title: "Circuit Designer & Sim Room",
    description: "Visually design electronic circuits and test them in a real-time simulation environment. Use the AI Co-Pilot for help!",
    image: "https://cdn.mos.cms.futurecdn.net/9QTpESGBXa32D29J77VR3d-1200-80.jpg",
    imageHint: "robot hand circuit"
  },
];

export function QuickStartTutorial() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  
  if (!isVisible) {
    return null;
  }

  return (
    <Card className="relative overflow-hidden col-span-1 sm:col-span-2 md:col-span-3">
        <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 z-10 h-7 w-7"
            onClick={() => setIsVisible(false)}
        >
            <X className="h-4 w-4" />
            <span className="sr-only">Close tutorial</span>
        </Button>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {tutorialSteps.map((step, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <step.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">{step.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </div>
                <div className="hidden md:block h-full">
                    <Image 
                        src={step.image} 
                        alt={step.title}
                        width={800}
                        height={400}
                        className="h-full w-full object-cover"
                        data-ai-hint={step.imageHint}
                    />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-8">
            <CarouselPrevious />
            <div className="text-center text-sm text-muted-foreground">
                Step {current} of {tutorialSteps.length}
            </div>
            <CarouselNext />
        </div>
      </Carousel>
    </Card>
  );
}
