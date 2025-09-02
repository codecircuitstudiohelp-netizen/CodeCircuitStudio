
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircuitBoard, Wrench } from "lucide-react";

export default function CircuitDesignerPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2 text-center">
        <CircuitBoard className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">Circuit Designer</h1>
        <p className="text-lg text-muted-foreground">
          Visually design and simulate electronic circuits.
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
                We are currently building a powerful and intuitive circuit design tool with drag-and-drop and real-time simulation. Please check back later for updates.
                </AlertDescription>
            </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
