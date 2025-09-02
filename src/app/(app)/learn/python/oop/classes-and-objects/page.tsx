
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Package, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const classDefinitionCode = `
# The blueprint for a Dog
class Dog:
    # The __init__ method is a special method called a constructor.
    # It's called when you create a new instance of the class.
    def __init__(self, name, age):
        # Attributes: data associated with an object
        self.name = name
        self.age = age

    # A method: a function associated with an object
    def bark(self):
        return f"{self.name} says Woof!"

# Create an object (an instance) of the Dog class
my_dog = Dog("Buddy", 5)

# Access its attributes
print(f"{my_dog.name} is {my_dog.age} years old.")

# Call its methods
print(my_dog.bark())
`;


export default function ClassesAndObjectsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Classes and Objects</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to Object-Oriented Programming (OOP). Learn how to bundle data and functions together into reusable blueprints.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is a Class?</CardTitle>
          <CardDescription>The blueprint for creating objects.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A class is a user-defined blueprint from which objects are created. It bundles data (called **attributes**) and functions that operate on the data (called **methods**) into a single unit.
          </p>
          <p>
            An **object** is an instance of a class. If `Dog` is the blueprint, then your specific dog, "Buddy," is an object created from that blueprint.
          </p>
          <SyntaxHighlighter language="python">
            {classDefinitionCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a `Car` class with attributes for `make`, `model`, and `year`, and a method that displays the car's information.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>OOP Fundamentals</AlertTitle>
        <AlertDescription>
          You've learned the basics of classes and objects, the core concepts of Object-Oriented Programming in Python. This paradigm helps in creating modular, reusable, and organized code.
        </AlertDescription>
      </Alert>
    </div>
  );
}
