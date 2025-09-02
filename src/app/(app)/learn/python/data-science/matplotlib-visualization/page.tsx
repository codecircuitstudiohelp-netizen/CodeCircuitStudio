
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AreaChart, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const plotCode = `
import matplotlib.pyplot as plt

# Basic data
x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

# Create a plot
plt.plot(x, y)

# Add labels and title
plt.xlabel("X-axis Label")
plt.ylabel("Y-axis Label")
plt.title("My First Plot")

# Show the plot
plt.show()
`;

const chartTypesCode = `
# Bar chart
categories = ['A', 'B', 'C']
values = [10, 20, 15]
plt.bar(categories, values)
plt.title("Bar Chart")
plt.show()

# Scatter plot
x_scatter = [1, 2, 3, 4, 5]
y_scatter = [5, 4, 8, 2, 7]
plt.scatter(x_scatter, y_scatter)
plt.title("Scatter Plot")
plt.show()
`;

export default function MatplotlibVisualizationPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <AreaChart className="h-10 w-10 text-primary" />
            Matplotlib for Data Visualization
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn to create static, animated, and interactive visualizations in Python.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is Matplotlib?</CardTitle>
          <CardDescription>A comprehensive library for creating plots and charts.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Matplotlib is a plotting library for the Python programming language and its numerical mathematics extension NumPy. It provides an object-oriented API for embedding plots into applications.
          </p>
          <p>
            The `matplotlib.pyplot` module provides a simple interface for creating a variety of plots.
          </p>
          <SyntaxHighlighter language="python">
            {plotCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Different Plot Types</CardTitle>
            <CardDescription>Creating bar charts, scatter plots, and more.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>
                Matplotlib supports a wide variety of plots and customizations to help you effectively communicate your data.
            </p>
            <SyntaxHighlighter language="python">{chartTypesCode}</SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. You'll need `matplotlib` installed locally to see the plots. Try creating a simple bar chart of your favorite foods and how much you like them.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Visual Storytelling</AlertTitle>
        <AlertDescription>
          Data visualization is a critical skill for any data scientist. It allows you to explore data and communicate findings in a clear, impactful way. Libraries like Seaborn are built on top of Matplotlib to make creating beautiful statistical plots even easier.
        </AlertDescription>
      </Alert>
    </div>
  );
}
