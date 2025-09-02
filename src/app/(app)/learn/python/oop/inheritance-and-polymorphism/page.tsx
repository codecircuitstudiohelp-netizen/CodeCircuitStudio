
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { GitFork, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inheritanceCode = `
# Base class (or Parent class)
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

# Derived class (or Child class)
class Dog(Animal):
    def speak(self): # Overrides the base class method
        return f"{self.name} says Woof!"

# Another derived class
class Cat(Animal):
    def speak(self): # Overrides the base class method
        return f"{self.name} says Meow!"

my_dog = Dog("Buddy")
my_cat = Cat("Whiskers")

print(my_dog.speak())
print(my_cat.speak())
`;

const polymorphismCode = `
animals = [Dog("Buddy"), Cat("Whiskers")]

# We can treat Dog and Cat objects as Animal objects
# and call the same method on them, getting different results.
for animal in animals:
    print(animal.speak())
`;

export default function InheritanceAndPolymorphismPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <GitFork className="h-10 w-10 text-primary" />
            Inheritance and Polymorphism
        </h1>
        <p className="text-lg text-muted-foreground">
            Explore two cornerstones of OOP for creating powerful and flexible class hierarchies.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Inheritance: The "is-a" Relationship</CardTitle>
          <CardDescription>Creating new classes from existing ones.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Inheritance allows a new class (the **derived** or child class) to inherit attributes and methods from an existing class (the **base** or parent class). This promotes code reuse. For example, a `Dog` "is-a" type of `Animal`.
          </p>
          <SyntaxHighlighter language="python">
            {inheritanceCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Polymorphism: Many Forms</CardTitle>
          <CardDescription>Allowing objects of different classes to respond to the same method call in different ways.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
            <p>
                Polymorphism ("many forms") is a feature that allows us to perform a single action in different ways. In the example above, we can call the `.speak()` method on both a `Dog` and a `Cat` object and get different results.
            </p>
            <SyntaxHighlighter language="python">{polymorphismCode}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a base class `Vehicle` and derived classes like `Car` and `Motorcycle`, each with their own `start_engine` method.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Advanced OOP</AlertTitle>
        <AlertDescription>
          Inheritance and polymorphism are powerful tools for creating flexible, maintainable, and extensible software.
        </AlertDescription>
      </Alert>
    </div>
  );
}
