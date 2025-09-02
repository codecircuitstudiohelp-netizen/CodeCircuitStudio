
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Gamepad2, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projectCode = `
#include <iostream>
#include <string>
#include <vector>
#include <memory>

class Character {
public:
    std::string name;
    int health;

    Character(std::string n, int h) : name(n), health(h) {}

    virtual void attack(Character& target) {
        std::cout << name << " attacks " << target.name << "!" << std::endl;
        target.health -= 10;
    }
};

class Player : public Character {
public:
    Player(std::string n) : Character(n, 100) {}
};

class Monster : public Character {
public:
    Monster(std::string n, int h) : Character(n, h) {}

    void attack(Character& target) override {
        std::cout << name << " brutally attacks " << target.name << "!" << std::endl;
        target.health -= 15;
    }
};

int main() {
    auto player = std::make_shared<Player>("Hero");
    auto goblin = std::make_shared<Monster>("Goblin", 50);

    std::cout << "A wild " << goblin->name << " appears!" << std::endl;

    goblin->attack(*player);
    std::cout << player->name << "'s health: " << player->health << std::endl;

    player->attack(*goblin);
    std::cout << goblin->name << "'s health: " << goblin->health << std::endl;
    
    return 0;
}
`;

export default function ProjectSimpleTextRpgPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Gamepad2 className="h-10 w-10 text-primary" />
            Project: Simple Text-Based RPG
        </h1>
        <p className="text-lg text-muted-foreground">
            Apply your object-oriented programming skills to build a small role-playing game.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Project Goal</CardTitle>
          <CardDescription>Create a simple combat system using C++ classes and polymorphism.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This project will bring together all the C++ concepts you've learned to create a basic, text-based RPG.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Classes:</strong> A base `Character` class, with derived `Player` and `Monster` classes.</li>
            <li><strong>Inheritance:</strong> `Player` and `Monster` will inherit from `Character`.</li>
            <li><strong>Polymorphism:</strong> A virtual `attack` function that behaves differently for monsters and players.</li>
            <li><strong>Smart Pointers:</strong> Use `std::shared_ptr` or `std::unique_ptr` to manage the characters.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example Code</CardTitle>
          <CardDescription>Here's a starting point for your game.</CardDescription>
        </CardHeader>
        <CardContent>
          <SyntaxHighlighter language="cpp">
            {projectCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Build!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab and expand on this. Can you add a loop to continue the fight until one character's health is zero? Can you add different types of monsters?</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Congratulations!</AlertTitle>
        <AlertDescription>
          You've built a small game engine using the core principles of OOP in C++. This is the foundation upon which huge, complex games are built.
        </AlertDescription>
      </Alert>
    </div>
  );
}
