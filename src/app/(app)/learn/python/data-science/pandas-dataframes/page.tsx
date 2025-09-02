
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BookCopy, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const dataframeCode = `
import pandas as pd

# Create a DataFrame from a dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'Los Angeles', 'Chicago']
}

df = pd.DataFrame(data)

print(df)
`;

const selectionCode = `
# Select a single column (returns a Series)
ages = df['Age']
print(ages)

# Select multiple columns
subset = df[['Name', 'City']]
print(subset)

# Filter rows based on a condition
over_30 = df[df['Age'] > 30]
print(over_30)
`;

export default function PandasDataframesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <BookCopy className="h-10 w-10 text-primary" />
            Pandas for Data Manipulation
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn to use the most popular Python library for data analysis.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is Pandas?</CardTitle>
          <CardDescription>High-performance, easy-to-use data structures.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language.
          </p>
          <p>
            The primary data structure in Pandas is the **DataFrame**, a two-dimensional table of data with labeled axes (rows and columns).
          </p>
          <SyntaxHighlighter language="python">
            {dataframeCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Selecting and Filtering Data</CardTitle>
            <CardDescription>Accessing the specific parts of the data you need.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>
                Pandas provides a powerful and intuitive way to select, filter, and slice your data based on labels or conditions.
            </p>
            <SyntaxHighlighter language="python">{selectionCode}</SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. You'll need `pandas` installed locally. Create a DataFrame of your favorite movies with columns for title, year, and rating.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>The Data Scientist's Spreadsheet</AlertTitle>
        <AlertDescription>
          Pandas DataFrames are the workhorse of data science in Python. Mastering them is essential for cleaning, transforming, and analyzing data.
        </AlertDescription>
      </Alert>
    </div>
  );
}
