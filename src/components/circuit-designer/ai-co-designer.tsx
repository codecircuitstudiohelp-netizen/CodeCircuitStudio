
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { aiCopilotCircuitWiring } from "@/ai/flows/ai-copilot-circuit-wiring";
import { aiCopilotCircuitDoctor, AiCopilotCircuitDoctorOutput } from "@/ai/flows/ai-copilot-circuit-doctor";
import { Bot, Sparkles, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "../ui/skeleton";

type WiringResult = {
  wiringInstructions: string;
  codeSnippet: string;
  componentsList: string;
};

type DoctorResult = AiCopilotCircuitDoctorOutput;

export function AiCoDesigner() {
  const [prompt, setPrompt] = useState("");
  const [doctorPrompt, setDoctorPrompt] = useState("");
  
  const [wiringResult, setWiringResult] = useState<WiringResult | null>(null);
  const [doctorResult, setDoctorResult] = useState<DoctorResult | null>(null);

  const [isWiringLoading, setIsWiringLoading] = useState(false);
  const [isDoctorLoading, setIsDoctorLoading] = useState(false);

  const handleWiringSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setIsWiringLoading(true);
    setWiringResult(null);
    try {
      const aiResult = await aiCopilotCircuitWiring({ circuitDescription: prompt });
      setWiringResult(aiResult);
    } catch (error) {
      console.error("AI Copilot Wiring Error:", error);
      // You could show a toast notification here
    }
    setIsWiringLoading(false);
  };
  
  const handleDoctorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!doctorPrompt) return;

    setIsDoctorLoading(true);
    setDoctorResult(null);
    try {
      const aiResult = await aiCopilotCircuitDoctor({ circuitDescription: doctorPrompt });
      setDoctorResult(aiResult);
    } catch (error) {
      console.error("AI Circuit Doctor Error:", error);
      // You could show a toast notification here
    }
    setIsDoctorLoading(false);
  };

  return (
    <Card className="h-full flex flex-col">
       <Tabs defaultValue="designer" className="h-full flex flex-col">
          <TabsList className="grid w-full grid-cols-2 flex-shrink-0">
            <TabsTrigger value="designer"><Sparkles className="mr-2 h-4 w-4" />Designer</TabsTrigger>
            <TabsTrigger value="doctor"><Stethoscope className="mr-2 h-4 w-4" />Doctor</TabsTrigger>
          </TabsList>
          <TabsContent value="designer" className="flex-grow p-0">
            <div className="flex h-full flex-col">
              <ScrollArea className="flex-grow">
                <div className="p-4">
                  {isWiringLoading ? (
                    <div className="space-y-4">
                      <Skeleton className="h-16 w-full" />
                      <Skeleton className="h-24 w-full" />
                      <Skeleton className="h-32 w-full" />
                    </div>
                  ) : wiringResult ? (
                    <div className="space-y-4 text-sm">
                      <Card>
                        <CardHeader className="p-3">
                          <CardTitle className="text-base">Components</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                          <pre className="whitespace-pre-wrap font-body text-muted-foreground">{wiringResult.componentsList}</pre>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-3">
                          <CardTitle className="text-base">Wiring</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                          <pre className="whitespace-pre-wrap font-body text-muted-foreground">{wiringResult.wiringInstructions}</pre>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-3">
                          <CardTitle className="text-base">Code</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                          <pre className="rounded-md bg-muted p-2 font-code text-xs text-muted-foreground">{wiringResult.codeSnippet}</pre>
                        </CardContent>
                      </Card>
                    </div>
                  ) : (
                    <div className="text-center text-sm text-muted-foreground p-4 h-full flex items-center justify-center">
                        <div>
                            <Bot className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                            <h3 className="font-semibold">AI Co-Designer</h3>
                            <p>Describe the circuit you want to build in plain English.</p>
                            <p className="text-xs text-muted-foreground/80 mt-2">e.g., "Blink an LED on pin 13 every 500ms"</p>
                        </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              
              <form onSubmit={handleWiringSubmit} className="flex-shrink-0 border-t p-2">
                <div className="relative">
                  <Textarea
                    placeholder="Describe your circuit..."
                    className="pr-20"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={isWiringLoading}
                  />
                  <Button size="icon" type="submit" className="absolute right-2 top-1/2 -translate-y-1/2" disabled={isWiringLoading}>
                    <Sparkles className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="doctor" className="flex-grow p-0">
             <div className="flex h-full flex-col">
              <ScrollArea className="flex-grow">
                <div className="p-4">
                  {isDoctorLoading ? (
                    <div className="space-y-4">
                      <Skeleton className="h-24 w-full" />
                      <Skeleton className="h-24 w-full" />
                    </div>
                  ) : doctorResult ? (
                    <div className="space-y-4 text-sm">
                      <Card>
                        <CardHeader className="p-3">
                          <CardTitle className="text-base">Diagnosis</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                          <pre className="whitespace-pre-wrap font-body text-muted-foreground">{doctorResult.diagnosis}</pre>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-3">
                          <CardTitle className="text-base">Suggestions</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                          <pre className="whitespace-pre-wrap font-body text-muted-foreground">{doctorResult.suggestions}</pre>
                        </CardContent>
                      </Card>
                    </div>
                  ) : (
                    <div className="text-center text-sm text-muted-foreground p-4 h-full flex items-center justify-center">
                        <div>
                            <Stethoscope className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                            <h3 className="font-semibold">AI Circuit Doctor</h3>
                            <p>Describe your circuit to get a diagnosis.</p>
                            <p className="text-xs text-muted-foreground/80 mt-2">e.g., "I connected a 5V supply to an LED without a resistor."</p>
                        </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              
              <form onSubmit={handleDoctorSubmit} className="flex-shrink-0 border-t p-2">
                <div className="relative">
                  <Textarea
                    placeholder="Describe your circuit's problem..."
                    className="pr-20"
                    value={doctorPrompt}
                    onChange={(e) => setDoctorPrompt(e.target.value)}
                    disabled={isDoctorLoading}
                  />
                  <Button size="icon" type="submit" className="absolute right-2 top-1/2 -translate-y-1/2" disabled={isDoctorLoading}>
                    <Stethoscope className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>
        </Tabs>
    </Card>
  );
}
