
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bot, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

const mlCode = `
# Using scikit-learn to train a simple classification model.
# This requires scikit-learn, pandas, and numpy to be installed.

from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
import pandas as pd

# 1. Load a dataset (e.g., the famous Iris dataset)
# In a real scenario, you'd load your own data.
from sklearn.datasets import load_iris
iris = load_iris()
X = iris.data
y = iris.target

# 2. Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 3. Create and train the model
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)

# 4. Make predictions on the test data
predictions = model.predict(X_test)

# 5. Evaluate the model's accuracy
accuracy = accuracy_score(y_test, predictions)
print(f"Model Accuracy: {accuracy:.2f}")
`;

export default function IntroAiMlPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Bot className="h-10 w-10 text-primary" />
            Intro to AI/ML with Python
        </h1>
        <p className="text-lg text-muted-foreground">
            A glimpse into the world of Artificial Intelligence and Machine Learning.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Why Python for AI/ML?</CardTitle>
          <CardDescription>The de facto language for data science and AI.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Python's simple syntax, extensive libraries, and strong community support have made it the go-to language for AI and Machine Learning.
          </p>
          <p>Key libraries include:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>**NumPy & Pandas**: For data manipulation and analysis.</li>
            <li>**Matplotlib & Seaborn**: For data visualization.</li>
            <li>**Scikit-learn**: For traditional machine learning algorithms (classification, regression, clustering).</li>
            <li>**TensorFlow & PyTorch**: For deep learning and neural networks.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>A Simple Machine Learning Workflow</CardTitle>
        </Header>
        <CardContent className="space-y-4">
          <p>
            This example uses the Scikit-learn library to train a model to classify iris flowers. It demonstrates a typical ML workflow: load data, split it, train a model, make predictions, and evaluate.
          </p>
          <SyntaxHighlighter language="python">
            {mlCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>The Tip of the Iceberg</AlertTitle>
        <AlertDescription>
          This is just a tiny introduction. AI/ML is a vast and exciting field that involves statistics, calculus, and domain expertise. Libraries like Scikit-learn make it accessible to get started.
        </AlertDescription>
      </Alert>
    </div>
  );
}
