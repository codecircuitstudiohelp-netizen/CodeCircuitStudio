
import { LessonItem } from "@/components/lesson-item";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fullWebCurriculum = [
  {
    module: "Module 1: HTML Fundamentals",
    lessons: [
      { title: "Introduction to Web Development", status: "Completed", icon: "Globe" as const, href: "/learn/web/introduction-to-web-development" },
      { title: "HTML Structure and Tags", status: "Completed", icon: "Code" as const, href: "/learn/web/html-structure-and-tags" },
      { title: "HTML Forms and Inputs", status: "Completed", icon: "Code" as const, href: "/learn/web/forms-and-inputs" },
    ],
  },
  {
    module: "Module 2: CSS Fundamentals",
    lessons: [
      { title: "CSS Selectors and Properties", status: "Completed", icon: "Palette" as const, href: "/learn/web/css-selectors-and-properties" },
      { title: "The CSS Box Model", status: "Completed", icon: "Palette" as const, href: "/learn/web/the-box-model" },
      { title: "Flexbox and Grid", status: "Completed", icon: "Palette" as const, href: "/learn/web/flexbox-and-grid" },
      { title: "Responsive Design with Media Queries", status: "Completed", icon: "Palette" as const, href: "/learn/web/responsive-design" },
    ],
  },
    {
    module: "Module 3: JavaScript Fundamentals",
    lessons: [
      { title: "JS Variables and Data Types", status: "Next Up", icon: "Code" as const, href: "/learn/web/js-variables-and-data-types" },
      { title: "DOM Manipulation", status: "Locked", icon: "Code" as const, href: "/learn/web/dom-manipulation" },
      { title: "Events and Listeners", status: "Locked", icon: "Code" as const, href: "/learn/web/events-and-listeners" },
      { title: "Project: Interactive To-Do List", status: "Locked", icon: "Gamepad2" as const, href: "/learn/web/project-interactive-to-do-list" },
    ],
  },
];

export default function WebTrackPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Web Development</h1>
        <p className="text-muted-foreground">
            Build beautiful and interactive websites with HTML, CSS, and JavaScript.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={["Module 1: HTML Fundamentals", "Module 2: CSS Fundamentals"]} className="w-full">
        {fullWebCurriculum.map((item) => (
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
