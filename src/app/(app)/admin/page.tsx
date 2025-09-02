
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Shield, Users, Pencil, Trash2, User } from "lucide-react";
import { listUsers, ListUsersOutput } from "@/ai/flows/admin-user-management";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [users, setUsers] = useState<ListUsersOutput>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const userList = await listUsers();
        setUsers(userList);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        // Optionally, show an error message to the user
      }
      setIsLoading(false);
    }
    fetchUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-3">
             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-8 w-8" />
            </div>
            <div>
                 <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
                <p className="text-lg text-muted-foreground">
                    Manage users, content, and application settings.
                </p>
            </div>
        </div>
      </header>

      <Card>
        <CardHeader>
            <div className="flex items-center gap-3">
                 <Users className="h-6 w-6" />
                <CardTitle>User Management</CardTitle>
            </div>
          <CardDescription>
            View and manage all registered users in the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">Loading users...</TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user.email}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === "Admin" ? "default" : "secondary"}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.joined}</TableCell>
                    <TableCell className="text-right">
                       <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                           <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>View Profile</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="mr-2 h-4 w-4" />
                            <span>Edit Role</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete User</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
