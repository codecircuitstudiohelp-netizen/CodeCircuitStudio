
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BrainCircuit, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const numpyArrayCode = `
import numpy as np

# Create a 1D array from a Python list
a = np.array([1, 2, 3, 4, 5])
print(a)

# Create a 2D array (matrix)
b = np.array([[1, 2, 3], [4, 5, 6]])
print(b.shape) # Output: (2, 3) -> 2 rows, 3 columns
`;

const operationsCode = `
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Element-wise addition
print(a + b) # Output: [5 7 9]

# Element-wise multiplication
print(a * 2) # Output: [2 4 6]

# Universal functions (ufuncs)
print(np.sqrt(a)) # Calculates square root of each element
`;

export default function NumpyBasicsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <BrainCircuit className="h-10 w-10 text-primary" />
            NumPy for Numerical Data
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn the fundamental package for scientific computing in Python.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is NumPy?</CardTitle>
          <CardDescription>The core of the Python data science ecosystem.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            NumPy (Numerical Python) is a library that provides support for large, multi-dimensional arrays and matrices, along with a collection of high-level mathematical functions to operate on these arrays.
          </p>
          <p>
            The core data structure in NumPy is the `ndarray` (n-dimensional array). It's far more efficient for storing and manipulating numerical data than Python's built-in list.
          </p>
          <SyntaxHighlighter language="python">
            {numpyArrayCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Vectorized Operations</CardTitle>
            <CardDescription>Performing operations on entire arrays at once.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>
                The key advantage of NumPy is its ability to perform "vectorized" operations. Instead of writing slow Python loops, you can apply operations to entire arrays at once, executed in fast, pre-compiled C code.
            </p>
            <SyntaxHighlighter language="python">{operationsCode}</SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. You'll need `numpy` installed locally. Create two NumPy arrays and perform addition, subtraction, and multiplication on them.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Foundation for Data Science</AlertTitle>
        <AlertDescription>
          Almost every data science library in Python, including Pandas and Scikit-learn, is built on top of NumPy. Understanding its array structures is crucial.
        </AlertDescription>
      </Alert>
    </div>
  );
}
