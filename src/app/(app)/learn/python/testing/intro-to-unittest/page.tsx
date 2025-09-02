
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TestTube, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

const unittestCode = `
import unittest

# The function we want to test
def add(x, y):
    return x + y

# The test class must inherit from unittest.TestCase
class TestAddFunction(unittest.TestCase):

    # Test method names must start with 'test_'
    def test_add_positive_numbers(self):
        self.assertEqual(add(1, 2), 3)

    def test_add_negative_numbers(self):
        self.assertEqual(add(-1, -1), -2)

    def test_add_mixed_numbers(self):
        self.assertEqual(add(5, -3), 2)

# This allows running the tests from the command line
if __name__ == '__main__':
    unittest.main()
`;

export default function IntroToUnittestPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <TestTube className="h-10 w-10 text-primary" />
            Intro to Unit Testing
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn to write automated tests to ensure your code works correctly.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is Unit Testing?</CardTitle>
          <CardDescription>Testing individual components of your software.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use.
          </p>
          <p>Python's built-in `unittest` module provides a rich framework for creating and running tests.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>A Simple Test Case</CardTitle>
        </Header>
        <CardContent className="space-y-4">
          <p>
            You create tests by making a class that inherits from `unittest.TestCase` and adding methods that start with `test_`. Inside these methods, you use assertion methods like `assertEqual`, `assertTrue`, or `assertRaises` to check for expected outcomes.
          </p>
          <SyntaxHighlighter language="python">
            {unittestCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Why Test?</AlertTitle>
        <AlertDescription>
          Automated tests provide a safety net, allowing you to refactor and add new features with confidence, knowing that you haven't broken existing functionality. Other popular testing frameworks include `pytest`.
        </AlertDescription>
      </Alert>
    </div>
  );
}
