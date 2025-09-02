
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Package, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const declarationCode = `
# The variable 'name' now holds the string "Alice"
name = "Alice"

# The variable 'age' now holds the integer 30
age = 30

print(name)
print(age)
`;

const dataTypesCode = `
# Integer (whole number)
user_count = 100

# Float (number with a decimal)
item_price = 19.99

# String (text)
greeting_message = "Hello, Python!"

# Boolean (True or False)
is_active = True

# We can check the type of a variable using the type() function
print(type(item_price))
`;

const namingRulesCode = `
# GOOD variable names
user_name = "johndoe"
total_value = 100
is_authenticated = False

# BAD variable names (will cause errors)
# 2nd_user = "jane"    # Cannot start with a number
# user-name = "jane"   # Cannot contain hyphens
# user name = "jane"   # Cannot contain spaces
`;

const usingVariablesCode = `
apples = 10
oranges = 5

total_fruit = apples + oranges

print("Number of apples:", apples)
print("Number of oranges:", oranges)
print("Total fruit:", total_fruit)

# You can also change a variable's value
apples = 12
total_fruit = apples + oranges
print("New total fruit count:", total_fruit)
`;


export default function UnderstandingVariablesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
          <Package className="h-10 w-10 text-primary" />
          Understanding Variables
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to store, label, and manipulate data—the most basic building block of any program.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is a Variable?</CardTitle>
          <CardDescription>Think of it as a labeled box where you can store information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            In programming, a variable is a container for a value. It has a name (the "label" on the box) and it holds data (the "contents" of the box). You can change the data inside the variable, and you can use the name to refer to the data it holds.
          </p>
          <p>
            To create a variable in Python, you just need to give it a name and assign it a value using the equals sign (`=`). This is called **declaration** and **assignment**.
          </p>
          <SyntaxHighlighter language="python">
            {declarationCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Data Types</CardTitle>
          <CardDescription>Python can store different kinds of data in variables.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Variables can hold various types of data. Python is smart enough to figure out the type automatically. Here are the most common ones:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Integers (`int`)</strong>: Whole numbers, like -5, 0, and 100.</li>
            <li><strong>Floats (`float`)</strong>: Numbers with a decimal point, like 3.14 or -0.01.</li>
            <li><strong>Strings (`str`)</strong>: Text, which you must enclose in quotes (e.g., `"Hello"` or `'World'`).</li>
            <li><strong>Booleans (`bool`)</strong>: Represents truth values, and can only be `True` or `False`.</li>
          </ul>
          <SyntaxHighlighter language="python">
            {dataTypesCode}
          </SyntaxHighlighter>
           <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Dynamic Typing</AlertTitle>
            <AlertDescription>
              Python is a <strong>dynamically typed</strong> language. This means you don't have to explicitly declare the data type of a variable. Python figures it out at runtime. You can even change the type of data a variable holds later in the program!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
          <CardTitle>Naming Rules and Conventions</CardTitle>
          <CardDescription>How to name your variables effectively.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>Choosing good variable names is crucial for writing readable code. There are a few rules and a widely-followed convention:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Rules:</strong> Variable names can only contain letters (a-z, A-Z), numbers (0-9), and the underscore (`_`). They cannot start with a number.</li>
            <li><strong>Convention (snake_case):</strong> In Python, the community standard is to use `snake_case` for variable names. This means all lowercase letters, with words separated by underscores.</li>
          </ul>
          <SyntaxHighlighter language="python">
            {namingRulesCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Using and Changing Variables</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>Once you've stored a value in a variable, you can use it in calculations, print it, and update it with a new value.</p>
            <SyntaxHighlighter language="python">
                {usingVariablesCode}
            </SyntaxHighlighter>
            <div className="pt-4">
                <h3 className="font-semibold mb-2">Time to Experiment!</h3>
                <p className="text-sm text-muted-foreground mb-4">Open the Code Lab, create some variables of your own, and try printing them out or doing simple math.</p>
                <Button asChild>
                    <Link href="/code-lab">Go to Code Lab</Link>
                </Button>
            </div>
        </CardContent>
      </Card>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Key Concepts Mastered</AlertTitle>
        <AlertDescription>
          You now know how to create variables, assign values of different types, and use them in your code. This is a huge step! In the next lesson, we'll dive deeper into numeric types.
        </AlertDescription>
      </Alert>

    </div>
  );
}
