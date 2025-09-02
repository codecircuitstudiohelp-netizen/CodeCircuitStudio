
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calculator, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const arithmeticCode = `
a = 10
b = 3

# Basic Arithmetic
sum_val = a + b  # 13
diff_val = a - b # 7
prod_val = a * b # 30
div_val = a / b  # 3.333...

# Floor division (discards the fractional part)
floor_div = a // b # 3

# Modulo (returns the remainder)
remainder = a % b # 1

# Exponentiation
power = a ** b # 1000

print(f"Sum: {sum_val}, Product: {prod_val}")
`;

const conversionCode = `
# A string from user input
age_str = "25"

# Convert string to integer to perform math
age_int = int(age_str)
age_in_ten_years = age_int + 10
print(age_in_ten_years) # 35

# Convert integer to float
price_int = 100
price_float = float(price_int)
print(price_float) # 100.0
`;

export default function NumericTypesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Calculator className="h-10 w-10 text-primary" />
            Numeric Types (int, float)
        </h1>
        <p className="text-lg text-muted-foreground">
            Perform calculations and handle numerical data in Python.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Integers and Floats</CardTitle>
          <CardDescription>The two primary numeric types.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Python has two main types for numbers:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Integers (`int`)</strong>: Whole numbers, both positive and negative, without decimals (e.g., `10`, `-200`, `0`).</li>
            <li><strong>Floats (`float`)</strong>: Numbers that have a decimal point (e.g., `98.6`, `3.14`, `-0.5`). They are used when you need more precision.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Arithmetic Operations</CardTitle>
          <CardDescription>The basic math operations you can perform.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Python supports all the standard mathematical operators.
          </p>
          <SyntaxHighlighter language="python">
            {arithmeticCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Type Conversion</CardTitle>
          <CardDescription>Changing from one numeric type to another.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            Sometimes you need to convert between data types. For example, when you get input from a user, it comes in as a string. You need to convert it to an `int` or `float` before you can use it in calculations.
          </p>
          <SyntaxHighlighter language="python">
            {conversionCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Create a simple calculator that takes two numbers as input and prints their sum, difference, and product.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Calculations Mastered</AlertTitle>
        <AlertDescription>
          You now know how to work with numbers in Python. This is a crucial skill for everything from simple data analysis to complex scientific computing.
        </AlertDescription>
      </Alert>
    </div>
  );
}
