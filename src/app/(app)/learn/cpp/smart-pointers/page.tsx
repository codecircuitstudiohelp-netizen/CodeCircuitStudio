
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BrainCircuit, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const uniquePtrCode = `
#include <iostream>
#include <memory> // Required for smart pointers

class MyResource {
public:
    MyResource() { std::cout << "Resource Acquired\\n"; }
    ~MyResource() { std::cout << "Resource Destroyed\\n"; }
};

int main() {
    // When unique_ptr goes out of scope, it automatically calls 'delete'
    // on the MyResource object it points to. No 'delete' call needed!
    std::unique_ptr<MyResource> ptr = std::make_unique<MyResource>();

    // You cannot copy a unique_ptr
    // std::unique_ptr<MyResource> ptr2 = ptr; // This would be a compile error!
    
    return 0; // ptr is destroyed here
}
`;

const sharedPtrCode = `
#include <iostream>
#include <memory>

int main() {
    std::shared_ptr<int> p1;
    {
        // Create a shared pointer
        auto p2 = std::make_shared<int>(10);
        std::cout << "Use count: " << p2.use_count() << std::endl; // 1

        // p1 and p2 now share ownership
        p1 = p2;
        std::cout << "Use count: " << p2.use_count() << std::endl; // 2
    } // p2 goes out of scope, but memory is NOT deleted because p1 still exists

    std::cout << "Use count after p2 is gone: " << p1.use_count() << std::endl; // 1
    
    return 0; // p1 goes out of scope, use_count becomes 0, memory is deleted.
}
`;

export default function SmartPointersPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <BrainCircuit className="h-10 w-10 text-primary" />
            Smart Pointers
        </h1>
        <p className="text-lg text-muted-foreground">
            The modern C++ solution to memory management that helps prevent memory leaks.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Automating Memory Management</CardTitle>
          <CardDescription>Letting objects manage memory for you.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Manual memory management with `new` and `delete` is powerful but error-prone. It's easy to forget a `delete` call, leading to memory leaks.
          </p>
          <p>
            **Smart pointers** are special classes that act like pointers but automatically manage the memory they point to. When the smart pointer object itself is destroyed (e.g., when it goes out of scope), its destructor automatically calls `delete` on the raw pointer it holds. This principle is called **RAII (Resource Acquisition Is Initialization)**.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>`std::unique_ptr`</CardTitle>
          <CardDescription>For exclusive ownership of a resource.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
            <p>
                A `unique_ptr` represents exclusive ownership. There can only ever be one `unique_ptr` pointing to a given object. It is very lightweight and has virtually no performance overhead compared to a raw pointer. This should be your default choice.
            </p>
            <SyntaxHighlighter language="cpp">{uniquePtrCode}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>`std::shared_ptr`</CardTitle>
          <CardDescription>For shared ownership of a resource.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
            <p>
                A `shared_ptr` allows multiple pointers to share ownership of the same resource. It keeps a reference count of how many `shared_ptr`s are pointing to the object. The memory is only deallocated when the last `shared_ptr` pointing to it is destroyed.
            </p>
            <SyntaxHighlighter language="cpp">{sharedPtrCode}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. Try creating a `unique_ptr` to a simple class and see its constructor and destructor messages print.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Modern C++ Best Practice</AlertTitle>
        <AlertDescription>
          In modern C++, you should almost always prefer smart pointers over raw pointers for owning dynamic resources. They make your code safer, easier to reason about, and prevent entire classes of bugs.
        </AlertDescription>
      </Alert>
    </div>
  );
}
