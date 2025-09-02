
"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ghost, Zap, Cpu, HardDrive, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

export function CircuitCanvas() {
  const [isGhostMode, setIsGhostMode] = useState(false);
  const [isPowered, setIsPowered] = useState(false);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0 flex flex-row items-center justify-between p-3 border-b">
        <CardTitle className="text-base">Canvas</CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="ghost-mode" checked={isGhostMode} onCheckedChange={setIsGhostMode} />
            <Label htmlFor="ghost-mode" className="flex items-center gap-1.5 text-sm">
              <Ghost className="h-4 w-4" />
              Ghost
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="power-mode" checked={isPowered} onCheckedChange={setIsPowered} />
            <Label htmlFor="power-mode" className="flex items-center gap-1.5 text-sm">
              <Zap className="h-4 w-4" />
              Power
            </Label>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative flex-grow p-2">
        <div
          className="absolute inset-0 h-full w-full rounded-lg bg-card"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--border)) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative h-full w-full">
          {/* Arduino Symbol */}
          <div className="absolute top-[calc(50%-75px)] left-[calc(50%-200px)] w-[400px] h-[250px] flex items-center justify-center bg-muted/20 rounded-lg border-2 border-dashed">
            <div className="flex flex-col items-center text-muted-foreground">
                <Cpu className="h-24 w-24" />
                <p className="mt-2 font-semibold">Arduino Uno</p>
            </div>
          </div>

          {/* Breadboard Symbol */}
            <div className="absolute top-[calc(50%-125px)] left-[calc(50%+50px)] w-[150px] h-[300px] flex items-center justify-center bg-muted/20 rounded-lg border-2 border-dashed">
             <div className="flex flex-col items-center text-muted-foreground">
                <HardDrive className="h-20 w-20" />
                <p className="mt-2 font-semibold">Breadboard</p>
             </div>
          </div>


          {/* Static LED on Breadboard */}
          <div className="absolute top-[30%] right-[22%]">
            <div className="flex items-center space-x-2">
              <div className={cn(
                "h-8 w-8 rounded-full border-2 border-primary/50 bg-primary/20 transition-all flex items-center justify-center", 
                isPowered && "animate-pulse bg-primary/80 shadow-[0_0_15px_5px] shadow-primary/50"
              )}>
                <Lightbulb className="h-5 w-5 text-primary/70" />
              </div>
            </div>
            <p className="mt-1 text-center text-xs text-muted-foreground">LED</p>
          </div>

          {/* Ghost Accelerometer */}
          <div 
            className="absolute top-[60%] left-[20%] transition-opacity"
            style={{ opacity: isGhostMode ? 1 : 0.2 }}
          >
            <div className={cn(
              "flex h-12 w-12 flex-col items-center justify-center rounded-md border-2 bg-accent/30 p-1 text-center transition-all",
              isGhostMode ? "border-dashed border-primary animate-pulse" : "border-border"
            )}>
              <Ghost className={cn("h-5 w-5", isGhostMode ? "text-primary" : "text-muted-foreground")} />
              <p className="mt-1 text-center text-[10px] font-semibold text-muted-foreground">MPU6050</p>
            </div>
          </div>


          {/* Static Wires using SVG */}
          <svg className="absolute inset-0 h-full w-full overflow-visible">
             {/* GND Wire (Black) from Arduino to Breadboard */}
            <path d="M 395 288 C 450 288, 450 220, 520 220" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" />

            {/* D13 Wire (Color) from Arduino to LED on Breadboard */}
            <path d="M 408 132 C 460 132, 460 180, 530 180" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
