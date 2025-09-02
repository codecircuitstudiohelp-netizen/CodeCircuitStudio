
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Wrench } from "lucide-react";
import Image from "next/image";

export default function PcbDesignerPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-4 text-center">
        <Image 
          src="https://europe1.discourse-cdn.com/arduino/optimized/4X/4/5/d/45d3ed27602db23d7abf523bfed31fbe5702a551_2_1024x736.jpeg" 
          alt="PCB Design"
          width={600}
          height={433}
          className="rounded-lg mx-auto shadow-lg"
          data-ai-hint="circuit board"
        />
        <h1 className="text-4xl font-bold tracking-tight">PCB Designer</h1>
        <p className="text-lg text-muted-foreground">
          Design and export professional-grade printed circuit boards.
        </p>
      </header>

       <Card>
        <CardHeader>
            <CardTitle>Feature Under Development</CardTitle>
        </CardHeader>
        <CardContent>
            <Alert>
                <Wrench className="h-4 w-4" />
                <AlertTitle>Coming Soon!</AlertTitle>
                <AlertDescription>
                We are currently building a powerful and intuitive PCB design tool. Please check back later for updates.
                </AlertDescription>
            </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
