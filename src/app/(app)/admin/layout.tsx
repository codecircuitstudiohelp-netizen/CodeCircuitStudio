
"use client";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

const ADMIN_EMAIL = "sb160283@birlahighschool.com";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (loading) {
      // Still checking authentication state
      return;
    }

    if (!user || user.email !== ADMIN_EMAIL) {
      // If not logged in or not the admin, redirect away
      router.push("/dashboard");
    } else {
      // User is the admin, allow access
      setIsAuthorized(true);
    }
  }, [user, loading, router]);

  if (!isAuthorized) {
    // Render a loading state or a "Not Authorized" message while checking/redirecting
    return (
       <div className="relative min-h-screen w-full bg-background flex items-center justify-center">
            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-primary/10 via-background to-background" />
            <p className="text-muted-foreground">Verifying authorization...</p>
        </div>
    );
  }

  // If authorized, render the admin page content
  return <>{children}</>;
}
