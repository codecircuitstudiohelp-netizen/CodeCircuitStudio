
import { LessonItem } from "@/components/lesson-item";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fullCppCurriculum = [
  {
    module: "Module 1: C++ Basics",
    lessons: [
      { title: "Why Choose C++?", status: "Completed", icon: "Book" as const, href: "/learn/cpp/why-cpp" },
      { title: "Compiler and First Program", status: "Completed", icon: "HardDrive" as const, href: "/learn/cpp/compiler-and-first-program" },
      { title: "Variables and Primitive Types", status: "Completed", icon: "Code" as const, href: "/learn/cpp/variables-and-primitive-types" },
    ],
  },
  {
    module: "Module 2: Pointers and Memory",
    lessons: [
      { title: "Understanding Pointers", status: "Completed", icon: "MemoryStick" as const, href: "/learn/cpp/understanding-pointers" },
      { title: "Dynamic Memory Allocation", status: "Completed", icon: "MemoryStick" as const, href: "/learn/cpp/dynamic-memory-allocation" },
      { title: "Smart Pointers (Modern C++)", status: "Completed", icon: "MemoryStick" as const, href: "/learn/cpp/smart-pointers" },
    ],
  },
  {
    module: "Module 3: Object-Oriented Programming",
    lessons: [
      { title: "Classes and Objects", status: "Completed", icon: "Code" as const, href: "/learn/cpp/classes-and-objects" },
      { title: "Inheritance and Polymorphism", status: "Completed", icon: "Code" as const, href: "/learn/cpp/inheritance-and-polymorphism" },
      { title: "Project: Simple Text-Based RPG", status: "Completed", icon: "Gamepad2" as const, href: "/learn/cpp/project-simple-text-based-rpg" },
    ],
  },
];

export default function CppTrackPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">C++ for High Performance</h1>
        <p className="text-muted-foreground">
          Dive deep into systems programming and game development with C++.
        </p>
      </div>

       <Accordion type="multiple" defaultValue={["Module 1: C++ Basics"]} className="w-full">
        {fullCppCurriculum.map((item, index) => (
          <AccordionItem value={item.module} key={item.module}>
            <AccordionTrigger className="text-lg font-semibold">{item.module}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                {item.lessons.map((lesson) => (
                    <LessonItem
                        key={lesson.title}
                        title={lesson.title}
                        status={lesson.status as any}
                        icon={lesson.icon as any}
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
