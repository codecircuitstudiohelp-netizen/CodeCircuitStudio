
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { GitFork, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inheritanceCode = `
#include <iostream>
#include <string>

// Base class
class Animal {
public:
    void eat() {
        std::cout << "This animal is eating." << std::endl;
    }
};

// Derived class
class Dog : public Animal {
public:
    std::string name;
    void bark() {
        std::cout << name << " says: Woof!" << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.name = "Buddy";
    myDog.eat();  // Inherited from Animal
    myDog.bark(); // Defined in Dog
    return 0;
}
`;

const polymorphismCode = `
#include <iostream>

class Shape {
public:
    // A virtual function
    virtual void draw() {
        std::cout << "Drawing a generic shape." << std::endl;
    }
};

class Circle : public Shape {
public:
    // Override the base class function
    void draw() override {
        std::cout << "Drawing a circle." << std::endl;
    }
};

class Square : public Shape {
public:
    // Override the base class function
    void draw() override {
        std::cout << "Drawing a square." << std::endl;
    }
};

void renderShape(Shape* shapePtr) {
    shapePtr->draw(); // Calls the correct 'draw' based on the actual object type
}

int main() {
    Circle c;
    Square s;
    renderShape(&c); // Output: Drawing a circle.
    renderShape(&s); // Output: Drawing a square.
    return 0;
}
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
            Explore two cornerstones of Object-Oriented Programming for creating powerful and flexible class hierarchies.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Inheritance: The "is-a" Relationship</CardTitle>
          <CardDescription>Creating new classes from existing ones.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Inheritance allows a new class (the **derived** or child class) to inherit attributes and methods from an existing class (the **base** or parent class). This promotes code reuse. For example, a `Dog` "is-a" type of `Animal`. The `Dog` class can inherit common behaviors like `eat()` from the `Animal` class.
          </p>
          <SyntaxHighlighter language="cpp">
            {inheritanceCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Polymorphism: Many Forms</CardTitle>
          <CardDescription>Allowing objects of different classes to be treated as objects of a common base class.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
            <p>
                Polymorphism ("many forms") is a feature that allows us to perform a single action in different ways. In C++, it's achieved through **virtual functions**. When you have a pointer to a base class that points to a derived class object, calling a virtual function will execute the derived class's version of that function.
            </p>
            <SyntaxHighlighter language="cpp">{polymorphismCode}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a base class `Vehicle` with a virtual function `startEngine()`. Then create derived classes like `Car` and `Motorcycle` that override this function to print different messages.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Advanced OOP</AlertTitle>
        <AlertDescription>
          Inheritance and polymorphism are powerful tools for creating flexible, maintainable, and extensible software. They are used extensively in large-scale applications and game engines.
        </AlertDescription>
      </Alert>
    </div>
  );
}
