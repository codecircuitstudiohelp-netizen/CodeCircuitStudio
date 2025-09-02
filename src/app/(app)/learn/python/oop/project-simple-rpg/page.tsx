
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Gamepad2, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projectCode = `
import random

class Character:
    def __init__(self, name, health, attack):
        self.name = name
        self.health = health
        self.attack = attack

    def is_alive(self):
        return self.health > 0

    def take_damage(self, damage):
        self.health -= damage
        if self.health < 0:
            self.health = 0

class Player(Character):
    def __init__(self, name):
        super().__init__(name, health=100, attack=20)

class Monster(Character):
    def __init__(self, name, health, attack):
        super().__init__(name, health, attack)

# --- Main Game ---
player = Player("Hero")
monster = Monster("Goblin", health=50, attack=10)

print(f"A wild {monster.name} appears!")

while player.is_alive() and monster.is_alive():
    # Player's turn
    player_damage = random.randint(player.attack - 5, player.attack + 5)
    monster.take_damage(player_damage)
    print(f"You hit the {monster.name} for {player_damage} damage. It has {monster.health} HP left.")
    
    if not monster.is_alive():
        break

    # Monster's turn
    monster_damage = random.randint(monster.attack - 5, monster.attack + 5)
    player.take_damage(monster_damage)
    print(f"The {monster.name} hits you for {monster_damage} damage. You have {player.health} HP left.")

if player.is_alive():
    print("Congratulations! You defeated the monster!")
else:
    print("You have been defeated. Game over.")
`;

export default function ProjectSimpleRpgPage() {
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
          <CardDescription>Create a simple combat system using Python classes.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This project will bring together all the OOP concepts you've learned to create a basic, text-based RPG.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Classes:</strong> A base `Character` class, with derived `Player` and `Monster` classes.</li>
            <li><strong>Inheritance:</strong> `Player` and `Monster` will inherit from `Character`.</li>
            <li><strong>Methods:</strong> Functions like `is_alive` and `take_damage` that belong to the objects.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example Code</CardTitle>
          <CardDescription>Here's a starting point for your game.</CardDescription>
        </CardHeader>
        <CardContent>
          <SyntaxHighlighter language="python">
            {projectCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Build!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab and expand on this. Can you add different types of monsters? Or an inventory for the player?</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Congratulations!</AlertTitle>
        <AlertDescription>
          You've built a small game using the core principles of OOP in Python. This is the foundation upon which more complex games are built.
        </AlertDescription>
      </Alert>
    </div>
  );
}
