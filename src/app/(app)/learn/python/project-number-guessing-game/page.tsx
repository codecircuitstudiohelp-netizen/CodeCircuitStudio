
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bot, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projectCode = `
import random

# Generate a random number between 1 and 100
secret_number = random.randint(1, 100)
guess = None
attempts = 0

print("I'm thinking of a number between 1 and 100.")

# Keep looping until the user guesses correctly
while guess != secret_number:
    try:
        # Get user input and convert to an integer
        guess_str = input("What's your guess? ")
        guess = int(guess_str)
        attempts += 1 # Increment attempt counter

        # Provide hints
        if guess < secret_number:
            print("Too low!")
        elif guess > secret_number:
            print("Too high!")
        else:
            print(f"You got it! It took you {attempts} attempts.")
            
    except ValueError:
        print("Please enter a valid number.")
`;

export default function ProjectNumberGuessingGamePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Bot className="h-10 w-10 text-primary" />
            Project: Number Guessing Game
        </h1>
        <p className="text-lg text-muted-foreground">
            Combine your knowledge of variables, loops, and conditionals to build a fun, interactive game.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Project Goal</CardTitle>
          <CardDescription>Create a game where the computer thinks of a number and the user has to guess it.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This project is a classic for beginners because it uses all the fundamental concepts you've learned so far:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Variables:</strong> To store the secret number, the user's guess, and the attempt count.</li>
            <li><strong>`while` loop:</strong> To keep the game running as long as the user hasn't guessed correctly.</li>
            <li><strong>`if/elif/else`:</strong> To check if the guess is too high, too low, or correct.</li>
            <li><strong>`input()`:</strong> To get the guess from the user.</li>
            <li><strong>`random` module:</strong> To generate the secret number.</li>
            <li><strong>`try/except`:</strong> To handle cases where the user enters non-numeric input.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example Code</CardTitle>
          <CardDescription>Here's one way you could build it.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SyntaxHighlighter language="python">
            {projectCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Build!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab, paste in the code, and play the game! Try to modify it: Can you limit the number of guesses the player has?</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Congratulations!</AlertTitle>
        <AlertDescription>
          You've built your first complete program! This project demonstrates how a few simple building blocks can be combined to create an interactive application.
        </AlertDescription>
      </Alert>
    </div>
  );
}
