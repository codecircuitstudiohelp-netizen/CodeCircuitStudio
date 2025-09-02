
"use client"

import Link from "next/link";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  Lightbulb,
  Bell,
  Info,
  CheckCircle2,
} from "lucide-react";

import { Logo } from "@/components/icons";
import { UserNav } from "@/components/user-nav";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AIChatDialog } from "@/components/ai-chat-dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [title, setTitle] = useState("Dashboard");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/');
      } else {
        setIsCheckingAuth(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const pathParts = pathname.split('/').filter(part => part);
    // If we are on a nested route like /learn/python, we want the main title to be "Learn"
    const mainRoute = pathParts.length > 1 ? pathParts[0] : pathParts[pathParts.length - 1];
    
    if (mainRoute) {
      const formattedTitle = mainRoute
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setTitle(formattedTitle);
    } else {
      setTitle("Dashboard");
    }
  }, [pathname]);
  
  if (isCheckingAuth) {
    return (
        <div className="relative min-h-screen w-full bg-background flex items-center justify-center">
            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-primary/10 via-background to-background" />
            <p className="text-muted-foreground">Authenticating...</p>
        </div>
    )
  }

  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader>
          <Link href="/dashboard" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-lg font-semibold">CodeCircuit</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <MainNav />
        </SidebarContent>
        <SidebarFooter>
          <UserNav />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="flex h-full min-h-screen flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-md md:px-8">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="md:hidden" />
              <h1 className="text-xl font-semibold">{title}</h1> 
            </div>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="sr-only">Notifications</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Welcome!</span>
                        <span className="text-xs text-muted-foreground">Your learning journey begins now.</span>
                    </div>
                  </DropdownMenuItem>
                   <DropdownMenuItem>
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Python Track Unlocked</span>
                        <span className="text-xs text-muted-foreground">You can start the first lesson.</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button onClick={() => setIsChatOpen(true)}>
                <Lightbulb className="mr-2 h-4 w-4" /> Ask AI
              </Button>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-8">
            {children}
          </main>
           <footer className="flex-shrink-0 border-t mt-auto">
            <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center text-sm text-muted-foreground">
              <p>&copy; 2024 CodeCircuit Studio. All rights reserved.</p>
              <Link href="/about" className="flex items-center gap-1 hover:text-primary">
                <Info className="h-4 w-4" />
                About Us
              </Link>
            </div>
          </footer>
        </div>
      </SidebarInset>
      <AIChatDialog open={isChatOpen} onOpenChange={setIsChatOpen} />
    </SidebarProvider>
  );
}
