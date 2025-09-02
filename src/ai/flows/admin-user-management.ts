
'use server';
/**
 * @fileOverview A flow to manage users. In a real application, this would use the Firebase Admin SDK.
 *
 * - listUsers - A function that returns a list of users.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UserSchema = z.object({
  name: z.string().describe("The user's full name."),
  email: z.string().email().describe("The user's email address."),
  role: z.enum(["Admin", "Student", "Hobbyist", "Teacher"]).describe("The user's role."),
  joined: z.string().describe("The date the user joined."),
});

const ListUsersOutputSchema = z.array(UserSchema);

export type ListUsersOutput = z.infer<typeof ListUsersOutputSchema>;

export async function listUsers(): Promise<ListUsersOutput> {
  return listUsersFlow();
}

const listUsersFlow = ai.defineFlow(
  {
    name: 'listUsersFlow',
    inputSchema: z.void(),
    outputSchema: ListUsersOutputSchema,
  },
  async () => {
    // In a real application, this data would be fetched from your backend/database
    // using the Firebase Admin SDK. For this prototype, we'll return a hardcoded list.
    return [
      { name: "Ada Lovelace", email: "ada@example.com", role: "Student", joined: "2024-05-01" },
      { name: "Grace Hopper", email: "grace@example.com", role: "Hobbyist", joined: "2024-05-05" },
      { name: "Jay Sanghvi", email: "sb160283@birlahighschool.com", role: "Admin", joined: "2024-04-20" },
      { name: "Charles Babbage", email: "charles@example.com", role: "Teacher", joined: "2024-05-10" },
    ];
  }
);
