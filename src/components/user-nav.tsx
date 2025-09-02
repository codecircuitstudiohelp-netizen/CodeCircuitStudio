
"use client"

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOutUser, auth } from "@/lib/firebase";
import { CreditCard, LogOut, Settings, User as UserIcon, Shield } from "lucide-react"
import { useAuthState } from 'react-firebase-hooks/auth';


export function UserNav() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  
  const ADMIN_EMAIL = "sb160283@birlahighschool.com";

  const handleLogout = async () => {
    try {
      await signOutUser();
      router.push('/');
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };
  
  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return names[0][0] + names[names.length - 1][0];
    }
    return name[0];
  }

  if (loading) {
      return (
          <div className="h-auto w-full justify-start gap-2 px-2 flex items-center">
              <Avatar>
                  <AvatarFallback>...</AvatarFallback>
              </Avatar>
          </div>
      )
  }

  const displayName = user?.displayName || "Anonymous User";
  const displayEmail = user?.email || "No email provided";
  const displayPhoto = user?.photoURL || "https://picsum.photos/100/100";
  const isAdmin = user?.email === ADMIN_EMAIL;


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-auto w-full justify-start gap-2 px-2"
        >
          <Avatar>
            <AvatarImage src={displayPhoto} alt={displayName} data-ai-hint="person avatar" />
            <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
          </Avatar>
          <div className="overflow-hidden text-left group-data-[collapsible=icon]:hidden">
            <div className="truncate text-sm font-medium">{displayName}</div>
            <div className="truncate text-xs text-muted-foreground">{displayEmail}</div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{displayName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {displayEmail}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          {isAdmin && (
             <DropdownMenuItem onClick={() => router.push('/admin')}>
                <Shield className="mr-2 h-4 w-4 text-primary" />
                <span>Admin</span>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
