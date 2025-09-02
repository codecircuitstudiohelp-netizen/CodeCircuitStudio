
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckSquare, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projectHtml = `
<h1>My To-Do List</h1>
<input type="text" id="todo-input" placeholder="Add a new task...">
<button id="add-task-btn">Add Task</button>
<ul id="task-list"></ul>
`;

const projectJs = `
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-task-btn');
const list = document.getElementById('task-list');

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new list item
  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  // Add a delete button to the list item
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function() {
    list.removeChild(listItem);
  };
  
  listItem.appendChild(deleteBtn);
  list.appendChild(listItem);

  // Clear the input field
  input.value = "";
}

addButton.addEventListener('click', addTask);
`;

export default function ProjectToDoListPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <CheckSquare className="h-10 w-10 text-primary" />
            Project: Interactive To-Do List
        </h1>
        <p className="text-lg text-muted-foreground">
            Apply your HTML, CSS, and JavaScript skills to build a classic web application.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Project Goal</CardTitle>
          <CardDescription>Build a functional to-do list where users can add and remove tasks.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This project combines everything you've learned in the Web Development track:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>HTML:</strong> To structure the input field, button, and the list.</li>
            <li><strong>(Optional) CSS:</strong> To style the application and make it look good.</li>
            <li><strong>JavaScript:</strong> To handle the logic:
              <ul className="list-disc list-inside ml-6">
                <li>Selecting DOM elements.</li>
                <li>Listening for a 'click' event on the add button.</li>
                <li>Creating new list items dynamically.</li>
                <li>Appending new items to the list.</li>
                <li>Removing items from the list.</li>
              </ul>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example Code</CardTitle>
          <CardDescription>Here's the basic structure to get you started.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="font-semibold">HTML</h3>
          <SyntaxHighlighter language="html">
            {projectHtml}
          </SyntaxHighlighter>
          <h3 className="font-semibold">JavaScript</h3>
          <SyntaxHighlighter language="javascript">
            {projectJs}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab and build this project. Can you add some CSS to make it look better? How about adding a line-through style to tasks when they are clicked?</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Congratulations!</AlertTitle>
        <AlertDescription>
          You have built a complete, interactive web application from scratch. This demonstrates a solid understanding of the core principles of front-end web development.
        </AlertDescription>
      </Alert>
    </div>
  );
}
