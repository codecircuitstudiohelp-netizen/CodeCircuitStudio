
"use client"

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Server, Wifi, Bot, Router, Play, Pause, Ghost, Clock, Info } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export default function SimulationRoomPage() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [isGhostMode, setIsGhostMode] = useState(false);
  const [simulationTime, setSimulationTime] = useState(0);
  const [accelerometerPos, setAccelerometerPos] = useState({ x: 0, y: 0 });
  const [isPowered, setIsPowered] = useState(false);
  const SIMULATION_DURATION = 240;

  useEffect(() => {
    let simulationInterval: NodeJS.Timeout;
    if (isSimulating) {
      setIsPowered(true); // Power on when simulating
      simulationInterval = setInterval(() => {
        setSimulationTime(prevTime => {
          const nextTime = prevTime + 1;
          if (nextTime > SIMULATION_DURATION) {
            setIsSimulating(false);
            return SIMULATION_DURATION;
          }
          return nextTime;
        });
      }, 100);
    } else {
        setIsPowered(false); // Power off when not simulating
    }
    return () => clearInterval(simulationInterval);
  }, [isSimulating]);

  useEffect(() => {
    let ghostInterval: NodeJS.Timeout;
    if (isGhostMode && isSimulating) {
      ghostInterval = setInterval(() => {
        setAccelerometerPos({
          x: Math.random() * 20 - 10,
          y: Math.random() * 20 - 10,
        });
      }, 500);
    } else if (!isSimulating) {
      setAccelerometerPos({ x: 0, y: 0 });
    }
    return () => clearInterval(ghostInterval);
  }, [isGhostMode, isSimulating]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }


  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight">Multi-Device Simulation Room</h1>
        <p className="text-muted-foreground">
          Visualize and debug your entire IoT network in real-time.
        </p>
      </div>
      <Alert className="mb-4">
        <Info className="h-4 w-4" />
        <AlertTitle>Under Development</AlertTitle>
        <AlertDescription>
          This simulation room is currently a demonstration. The devices shown are for illustrative purposes and do not yet dynamically link to the Circuit Designer.
        </AlertDescription>
      </Alert>
      <Card className="flex-grow flex flex-col">
        <CardContent className="relative flex-grow p-2">
            <div
            className="absolute inset-0 h-full w-full rounded-lg"
            style={{
                backgroundImage: "radial-gradient(hsl(var(--border)) 0.5px, transparent 0)",
                backgroundSize: "15px 15px", 
            }}
            />
            
            <svg className="absolute inset-0 h-full w-full overflow-visible">
            {/* Arduino to LED */}
            <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray={isSimulating ? "5,5" : "none"} className={isSimulating ? "animate-flow" : ""} />
            {/* Arduino to Ghost */}
            <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray={isSimulating ? "5,5" : "none"} className={isSimulating ? "animate-flow-reverse" : ""} />
            {/* Arduino to Cloud */}
            <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="hsl(var(--secondary-foreground))" strokeWidth="2" strokeDasharray={isSimulating ? "5,5" : "none"} />
            
            </svg>

            <style jsx>{`
            @keyframes flow {
                to {
                stroke-dashoffset: -20;
                }
            }
            .animate-flow {
                stroke-dashoffset: 0;
                animation: flow 1s linear infinite;
            }
            @keyframes flow-reverse {
                to {
                stroke-dashoffset: 20;
                }
            }
            .animate-flow-reverse {
                stroke-dashoffset: 0;
                animation: flow-reverse 1s linear infinite;
            }
            `}</style>

            <div className="relative h-full w-full">
            {/* Device 1: LED */}
            <Card className="absolute top-[10%] left-[15%] w-64 shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                <div className={cn("h-10 w-10 rounded-md flex items-center justify-center", isSimulating && isPowered ? "bg-primary/80 shadow-[0_0_15px_5px] shadow-primary/50" : "bg-primary/20" )}>
                  <Bot className="h-6 w-6 text-primary-foreground"/>
                </div>
                <div>
                    <CardTitle className="text-lg">LED</CardTitle>
                    <CardDescription>Receiving from Pin 13</CardDescription>
                </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                <p className="text-xs text-muted-foreground">
                    {isSimulating && isPowered ? `State: ${simulationTime % 2 === 0 ? "ON" : "OFF"}` : 'Idle'}
                </p>
                <div className={cn("flex items-center gap-2 mt-2", isSimulating ? "text-green-500" : "text-muted-foreground")}>
                    <Wifi className="h-4 w-4" />
                    <span className="text-sm font-semibold">{isSimulating ? "Connected" : "Offline"}</span>
                </div>
                </CardContent>
            </Card>

            {/* Device 2: Arduino Uno */}
            <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 shadow-xl z-10">
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                <Image src="https://picsum.photos/50/50" data-ai-hint="arduino uno" alt="Arduino Uno" width={50} height={50} className="rounded-md" />
                <div>
                    <CardTitle className="text-lg">Arduino Uno</CardTitle>
                    <CardDescription>Main Controller</CardDescription>
                </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                <p className="text-xs text-muted-foreground">{isSimulating ? "Running sketch..." : "Awaiting upload..."}</p>
                <div className={cn("flex items-center gap-2 mt-2", isSimulating ? "text-green-500" : "text-muted-foreground")}>
                    <Router className="h-4 w-4" />
                    <span className="text-sm font-semibold">{isSimulating ? "Online" : "Offline"}</span>
                </div>
                </CardContent>
            </Card>

            {/* Device 3: Ghost Accelerometer */}
            <Card className={cn("absolute bottom-[10%] right-[15%] w-64 shadow-lg transition-all", isGhostMode && isSimulating ? "animate-pulse border-primary" : "")}>
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <div className="h-10 w-10 rounded-md flex items-center justify-center bg-accent/30">
                    <Ghost className="h-6 w-6 text-primary"/>
                  </div>
                <div>
                    <CardTitle className="text-lg">MPU6050</CardTitle>
                    <CardDescription>Ghost Accelerometer</CardDescription>
                </div>
                </CardHeader>
                <CardContent className="p-4 pt-0" style={{ transform: `translate(${accelerometerPos.x}px, ${accelerometerPos.y}px)`, transition: 'transform 0.5s ease-in-out' }}>
                <p className="text-xs text-muted-foreground">
                    {isSimulating ? `X: ${accelerometerPos.x.toFixed(2)}, Y: ${accelerometerPos.y.toFixed(2)}` : 'Awaiting simulation'}
                </p>
                    <div className={cn("flex items-center gap-2 mt-2", isGhostMode && isSimulating ? "text-primary" : "text-muted-foreground")}>
                    <Bot className="h-4 w-4" />
                    <span className="text-sm font-semibold">{isGhostMode && isSimulating ? "Active" : "Idle"}</span>
                    </div>
                </CardContent>
            </Card>

            {/* Device 4: Cloud Service */}
            <Card className="absolute top-[10%] right-[15%] w-64 shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                <Image src="https://picsum.photos/50/50" data-ai-hint="cloud database" alt="Cloud" width={50} height={50} className="rounded-md" />
                <div>
                    <CardTitle className="text-lg">Cloud Analytics</CardTitle>
                    <CardDescription>Data Logging</CardDescription>
                </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                <p className="text-xs text-muted-foreground">{isSimulating ? `Last updated: ${Math.floor(Math.random() * 5)}s ago` : 'Not syncing'}</p>
                    <div className={cn("flex items-center gap-2 mt-2", isSimulating ? "text-green-500" : "text-muted-foreground")}>
                    <Server className="h-4 w-4" />
                    <span className="text-sm font-semibold">{isSimulating ? "Synced" : "Disconnected"}</span>
                    </div>
                </CardContent>
            </Card>
            </div>
             <div className="absolute bottom-4 right-4 flex items-center gap-4">
                <div className="flex items-center space-x-2">
                    <Switch id="ghost-mode" checked={isGhostMode} onCheckedChange={setIsGhostMode} />
                    <Label htmlFor="ghost-mode" className="flex items-center gap-1.5 text-sm">
                    <Ghost className="h-4 w-4" />
                    Ghost Mode
                    </Label>
                </div>
            </div>
        </CardContent>
        <div className="flex-shrink-0 border-t p-3">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => setIsSimulating(!isSimulating)} disabled={simulationTime >= SIMULATION_DURATION && !isSimulating}>
                    {isSimulating ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    <span className="sr-only">{isSimulating ? "Pause" : "Play"}</span>
                </Button>
                <Clock className="h-4 w-4 text-muted-foreground" />
                <Slider
                    value={[simulationTime]}
                    onValueChange={(value) => setSimulationTime(value[0])}
                    max={SIMULATION_DURATION}
                    step={1}
                    className="w-full"
                />
                <div className="text-xs font-mono text-muted-foreground w-24 text-center">
                    {formatTime(simulationTime)} / {formatTime(SIMULATION_DURATION)}
                </div>
            </div>
      </div>
      </Card>
    </div>
  );
}
