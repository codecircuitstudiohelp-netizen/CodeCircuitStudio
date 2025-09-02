
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const basicForm = `<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <input type="submit" value="Log In">
</form>`;

const inputTypes = `<!-- A simple text field -->
<label for="first_name">First Name:</label>
<input type="text" id="first_name">

<!-- A checkbox -->
<input type="checkbox" id="subscribe" name="subscribe" value="yes">
<label for="subscribe">Subscribe to our newsletter</label>

<!-- Radio buttons (only one can be selected) -->
<p>Choose your favorite language:</p>
<input type="radio" id="html" name="fav_language" value="HTML">
<label for="html">HTML</label><br>
<input type="radio" id="css" name="fav_language" value="CSS">
<label for="css">CSS</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">JavaScript</label>

<!-- A multi-line text area -->
<label for="comment">Your comment:</label>
<textarea id="comment" name="comment" rows="4" cols="50"></textarea>

<!-- A button to submit the form -->
<button type="submit">Submit</button>`;

export default function FormsAndInputsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">HTML Forms and Inputs</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to collect information from users, making your webpages interactive.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>The `<form>` Element</CardTitle>
          <CardDescription>The container for all your input fields.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The `<form>` element is a crucial container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons, and more. When a user submits a form, the information is typically sent to a server for processing.
          </p>
           <SyntaxHighlighter language="html">{basicForm}</SyntaxHighlighter>
            <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>The Importance of `<label>`</AlertTitle>
                <AlertDescription>
                The `<label>` tag is vital for accessibility. The `for` attribute of the label should be the same as the `id` attribute of the input element to link them together. This helps screen readers understand what the input field is for, and it also allows users to click on the label to focus on the input field.
                </AlertDescription>
            </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Input Types</CardTitle>
          <CardDescription>The building blocks for collecting user data.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>The `<input>` tag is the most versatile form element, and its behavior is determined by its `type` attribute.</p>
           <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>`type="text"`</strong>: A single-line text input field.</li>
                <li><strong>`type="password"`</strong>: A single-line text input where the characters are obscured.</li>
                <li><strong>`type="checkbox"`</strong>: Allows the user to select zero or more options from a set.</li>
                <li><strong>`type="radio"`</strong>: Allows the user to select just one option from a set. All radio buttons with the same `name` attribute are part of the same set.</li>
                <li><strong>`type="submit"`</strong>: A button that submits the form data.</li>
            </ul>
            <p>For multi-line text input, you use the `<textarea>` element.</p>
          <SyntaxHighlighter language="html">{inputTypes}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Try creating a simple login form or a survey form using different input types.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
      </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Interactive Webpages Unlocked!</AlertTitle>
        <AlertDescription>
          You now have the power to gather user data, which is the first step toward building dynamic and interactive web applications. Next, we'll start styling our pages with CSS.
        </AlertDescription>
      </Alert>
    </div>
  );
}
