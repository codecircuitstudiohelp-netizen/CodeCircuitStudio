
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Package, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const classDefinitionCode = `
#include <iostream>
#include <string>

// The blueprint for a Dog
class Dog {
public:
    // Attributes (member variables)
    std::string name;
    std::string breed;
    int age;

    // A method (member function)
    void bark() {
        std::cout << name << " says: Woof!" << std::endl;
    }
};

int main() {
    // Create an object (an instance) of the Dog class
    Dog myDog;

    // Assign values to its attributes
    myDog.name = "Buddy";
    myDog.breed = "Golden Retriever";
    myDog.age = 5;

    // Call its method
    myDog.bark(); // Output: Buddy says: Woof!

    return 0;
}
`;

const constructorCode = `
#include <iostream>
#include <string>

class Car {
public:
    std::string make;
    std::string model;
    int year;

    // Constructor: a special method called when an object is created
    Car(std::string m, std::string mo, int y) {
        make = m;
        model = mo;
        year = y;
        std::cout << "A " << year << " " << model << " has been created!" << std::endl;
    }
    
    void displayInfo() {
        std::cout << year << " " << make << " " << model << std::endl;
    }
};

int main() {
    // Create a Car object, the constructor is called automatically
    Car myCar("Ford", "Mustang", 2023);

    // The attributes are already set
    myCar.displayInfo(); // Output: 2023 Ford Mustang

    return 0;
}
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
            A class is a user-defined data type that acts as a blueprint for individual objects. It bundles data (called **attributes** or member variables) and functions that work on that data (called **methods** or member functions) into a single unit.
          </p>
          <p>
            An **object** is an instance of a class. If `Dog` is the blueprint, then your specific dog, "Buddy," is an object created from that blueprint.
          </p>
          <SyntaxHighlighter language="cpp">
            {classDefinitionCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Constructors</CardTitle>
            <CardDescription>Initializing objects efficiently.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>
                A constructor is a special type of member function that is automatically called when an object of a class is created. It's typically used to initialize the attributes of the object, ensuring it starts in a valid state.
            </p>
            <p>
                A constructor has the same name as the class and does not have a return type.
            </p>
            <SyntaxHighlighter language="cpp">{constructorCode}</SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a `Book` class with attributes like `title`, `author`, and `pages`. Add a constructor and a method to display the book's information.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>OOP Fundamentals</AlertTitle>
        <AlertDescription>
          You've learned the basics of classes, objects, and constructors, which are the core concepts of Object-Oriented Programming in C++. This paradigm helps in creating modular and reusable code.
        </AlertDescription>
      </Alert>
    </div>
  );
}
