
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Package, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const declarationCode = `
// Using 'let' for variables that can be reassigned
let userAge = 25;
userAge = 26; // This is valid

// Using 'const' for variables that should not be reassigned
const birthYear = 1998;
// birthYear = 1999; // This would cause an error

// 'var' is the old way, generally avoid using it
var score = 100;

console.log("Age:", userAge);
console.log("Birth Year:", birthYear);
`;

const dataTypesCode = `
// Number (for both integers and decimals)
let price = 29.99;
let quantity = 3;

// String (text)
let greeting = "Hello, JavaScript!";
let userName = 'Alice';

// Boolean (true or false)
let isLoggedIn = true;

// Object (a collection of key-value pairs)
const user = {
  firstName: "John",
  lastName: "Doe"
};

// Array (a list-like object)
const colors = ["red", "green", "blue"];

console.log(typeof price); // "number"
console.log(user.firstName); // "John"
console.log(colors[1]); // "green"
`;


export default function JsVariablesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Package className="h-10 w-10 text-primary" />
            JavaScript Variables and Data Types
        </h1>
        <p className="text-lg text-muted-foreground">
          Bring your website to life by learning how to store and manage data with JavaScript.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Declaring Variables</CardTitle>
          <CardDescription>Using `let`, `const`, and the old `var`.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            In JavaScript, variables are containers for storing data values. In modern JavaScript (ES6 and later), we primarily use `let` and `const` to declare variables.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>`let`</strong>: Declares a block-scoped, mutable (re-assignable) variable. This is the most common choice for a variable whose value might change.</li>
            <li><strong>`const`</strong>: Declares a block-scoped, immutable (not re-assignable) variable. Use this when you know the value should not change after it's set.</li>
            <li><strong>`var`</strong>: The old way of declaring variables. It has different scoping rules (function-scoped) and can lead to unexpected behavior. It's best to stick with `let` and `const`.</li>
          </ul>
          <SyntaxHighlighter language="javascript">
            {declarationCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Primitive and Structural Types</CardTitle>
          <CardDescription>The different kinds of data JavaScript can handle.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            Like Python, JavaScript is dynamically typed, meaning you don't have to specify the data type when you declare a variable.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Number:</strong> For any kind of number, including integers and floating-point numbers.</li>
            <li><strong>String:</strong> For text. Can be enclosed in single (`'`) or double (`"`) quotes.</li>
            <li><strong>Boolean:</strong> Can be `true` or `false`.</li>
            <li><strong>Object:</strong> A collection of related data and/or functionality.</li>
            <li><strong>Array:</strong> A type of object used for storing ordered collections.</li>
            <li><strong>`undefined` and `null`:</strong> Special values representing the absence of a value.</li>
          </ul>
          <SyntaxHighlighter language="javascript">
            {dataTypesCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Declare a `const` variable for your name and a `let` variable for your age. Print them to the console using `console.log()`.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
      </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>The Building Blocks of Interactivity</AlertTitle>
        <AlertDescription>
          You've learned how to store information in your JavaScript code. This is the first step toward creating dynamic websites that respond to user actions. Next, we'll see how to manipulate the HTML document itself using JavaScript.
        </AlertDescription>
      </Alert>
    </div>
  );
}
