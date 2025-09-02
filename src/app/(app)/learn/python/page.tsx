
import { LessonItem } from "@/components/lesson-item";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fullPythonCurriculum = [
  // Existing Modules with real content
  {
    module: "Module 1: Introduction to Python",
    lessons: [
      { title: "What is Python?", status: "Completed", icon: "Book" as const, href: "/learn/python/what-is-python" },
      { title: "Setting Up Your Environment", status: "Completed", icon: "HardDrive" as const, href: "/learn/python/setting-up-your-environment" },
      { title: "Your First Python Program", status: "Completed", icon: "Gamepad2" as const, href: "/learn/python/your-first-python-program" },
    ],
  },
  {
    module: "Module 2: Python Fundamentals",
    lessons: [
        { title: "Understanding Variables", status: "Completed", icon: "Code" as const, href: "/learn/python/understanding-variables" },
        { title: "Numeric Types (int, float)", status: "Completed", icon: "Code" as const, href: "/learn/python/numeric-types" },
        { title: "Working with Strings", status: "Completed", icon: "Code" as const, href: "/learn/python/working-with-strings" },
        { title: "Booleans and None", status: "Completed", icon: "Code" as const, href: "/learn/python/booleans-and-none" },
    ],
  },
  {
    module: "Module 3: Control Flow",
    lessons: [
        { title: "Conditional Statements (if/elif/else)", status: "Completed", icon: "Code" as const, href: "/learn/python/conditional-statements" },
        { title: "For Loops", status: "Completed", icon: "Code" as const, href: "/learn/python/for-loops" },
        { title: "While Loops", status: "Completed", icon: "Code" as const, href: "/learn/python/while-loops" },
        { title: "Project: Number Guessing Game", status: "Completed", icon: "Bot" as const, href: "/learn/python/project-number-guessing-game" },
    ],
  },
  {
    module: "Module 4: Data Structures",
    lessons: [
        { title: "Lists and Tuples", status: "Completed", icon: "Component" as const, href: "/learn/python/data-structures/lists-and-tuples" },
        { title: "Working with Dictionaries", status: "Completed", icon: "Component" as const, href: "/learn/python/data-structures/working-with-dictionaries" },
        { title: "Understanding Sets", status: "Completed", icon: "Component" as const, href: "/learn/python/data-structures/understanding-sets" },
    ],
  },
   {
    module: "Module 5: Functions",
    lessons: [
        { title: "Defining and Calling Functions", status: "Completed", icon: "Code" as const, href: "/learn/python/functions/defining-and-calling-functions" },
        { title: "Scope and Arguments", status: "Completed", icon: "Code" as const, href: "/learn/python/functions/scope-and-arguments" },
        { title: "Lambda Functions", status: "Completed", icon: "Code" as const, href: "/learn/python/functions/lambda-functions" },
    ],
  },
  {
    module: "Module 6: File I/O & Error Handling",
    lessons: [
        { title: "Reading from Files", status: "Completed", icon: "HardDrive" as const, href: "/learn/python/file-io/reading-from-files" },
        { title: "Writing to Files", status: "Completed", icon: "HardDrive" as const, href: "/learn/python/file-io/writing-to-files" },
        { title: "Error Handling with try/except", status: "Completed", icon: "AlertTriangle" as const, href: "/learn/python/error-handling/try-except-finally" },
    ],
  },
  {
    module: "Module 7: Modules and Packages",
    lessons: [
        { title: "Using Standard Libraries", status: "Completed", icon: "Book" as const, href: "/learn/python/modules-and-packages/using-standard-libraries" },
        { title: "Installing Third-Party Packages with Pip", status: "Completed", icon: "Book" as const, href: "/learn/python/modules-and-packages/installing-with-pip" },
    ],
  },
  {
    module: "Module 8: Object-Oriented Programming (OOP)",
    lessons: [
        { title: "Classes and Objects", status: "Completed", icon: "Code" as const, href: "/learn/python/oop/classes-and-objects" },
        { title: "Inheritance and Polymorphism", status: "Completed", icon: "Code" as const, href: "/learn/python/oop/inheritance-and-polymorphism" },
        { title: "Project: Simple RPG", status: "Completed", icon: "Gamepad2" as const, href: "/learn/python/oop/project-simple-rpg" },
    ],
  },
  {
    module: "Module 9: Advanced Topics",
    lessons: [
        { title: "The `collections` Module", status: "Completed", icon: "Component" as const, href: "/learn/python/advanced-data-structures/collections-module" },
        { title: "Heaps and Queues with `heapq`", status: "Completed", icon: "Component" as const, href: "/learn/python/advanced-data-structures/heaps-and-queues" },
        { title: "Threading vs. Multiprocessing", status: "Completed", icon: "Component" as const, href: "/learn/python/concurrency/threading-vs-multiprocessing" },
        { title: "Async I/O with asyncio", status: "Completed", icon: "Component" as const, href: "/learn/python/concurrency/async-io-with-asyncio" },
        { title: "Intro to Web Scraping", status: "Completed", icon: "Globe" as const, href: "/learn/python/advanced-topics/intro-to-web-scraping" },
        { title: "Intro to AI/ML", status: "Completed", icon: "Bot" as const, href: "/learn/python/advanced-topics/intro-to-ai-ml" },
    ],
  },
  {
    module: "Module 10: Working with APIs & Testing",
    lessons: [
        { title: "Making HTTP Requests", status: "Completed", icon: "Globe" as const, href: "/learn/python/apis/making-http-requests" },
        { title: "Working with JSON Data", status: "Completed", icon: "Code" as const, href: "/learn/python/apis/working-with-json" },
        { title: "API Authentication", status: "Completed", icon: "Lock" as const, href: "/learn/python/apis/authentication" },
        { title: "Intro to Unit Testing", status: "Completed", icon: "TestTube" as const, href: "/learn/python/testing/intro-to-unittest" },
        { title: "Debugging with PDB", status: "Completed", icon: "Bug" as const, href: "/learn/python/testing/debugging-with-pdb" },
    ],
  },
  {
    module: "Module 11: Data Science Toolkit",
    lessons: [
        { title: "NumPy for Numerical Data", status: "Completed", icon: "Bot" as const, href: "/learn/python/data-science/numpy-basics" },
        { title: "Pandas for Data Manipulation", status: "Completed", icon: "Bot" as const, href: "/learn/python/data-science/pandas-dataframes" },
        { title: "Matplotlib for Data Visualization", status: "Completed", icon: "Bot" as const, href: "/learn/python/data-science/matplotlib-visualization" },
    ],
  },
  {
    module: "Module 12: Python with Firebase",
    lessons: [
        { title: "Connecting with the Admin SDK", status: "Next Up", icon: "Code" as const, href: "/learn/python/firebase/connecting-with-admin-sdk" },
        { title: "CRUD with Firestore", status: "Locked", icon: "HardDrive" as const, href: "#" },
        { title: "Managing Users with Auth", status: "Locked", icon: "User" as const, href: "#" },
    ],
  }
];


export default function PythonTrackPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Python Programming</h1>
        <p className="text-muted-foreground">
          Master the fundamentals of Python and build your first AI application.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={["Module 1: Introduction to Python"]} className="w-full">
        {fullPythonCurriculum.map((item) => (
          <AccordionItem value={item.module} key={item.module}>
            <AccordionTrigger className="text-lg font-semibold">{item.module}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                {item.lessons.map((lesson) => (
                    <LessonItem
                        key={lesson.title}
                        title={lesson.title}
                        status={lesson.status as any}
                        icon={lesson.icon}
                        href={lesson.href}
                    />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
