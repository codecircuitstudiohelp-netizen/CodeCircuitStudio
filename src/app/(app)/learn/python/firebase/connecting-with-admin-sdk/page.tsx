
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Code, Key, PencilRuler, Terminal } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const initializeAppCode = `
import firebase_admin
from firebase_admin import credentials

# IMPORTANT: Replace "path/to/your/serviceAccountKey.json" with the actual path
# to the file you downloaded from the Firebase console.
cred = credentials.Certificate("path/to/your/serviceAccountKey.json")

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app({
    'credential': cred,
    'databaseURL': 'https://your-project-id.firebaseio.com'
})

print("Firebase App Initialized!")
`;

export default function ConnectingWithAdminSdkPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Code className="h-10 w-10 text-primary" />
            Connecting with the Admin SDK
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn how to connect your Python backend scripts to your Firebase project with administrator privileges.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is the Firebase Admin SDK?</CardTitle>
          <CardDescription>A set of server-side libraries for privileged environments.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Firebase Admin SDK lets you interact with Firebase from trusted environments, like a server you control or a cloud function. This is different from the client-side SDKs (for web or mobile), which are designed for untrusted user environments.
          </p>
          <p>
            With the Admin SDK, your code has privileged access, allowing it to bypass security rules and perform administrative tasks, like reading and writing data anywhere in your database or managing users.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Service Accounts</CardTitle>
          <CardDescription>Authenticating your backend application.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
            <p>
                To authenticate a server application, you need to use a **service account**. A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
            </p>
            <Alert>
                <Key className="h-4 w-4" />
                <AlertTitle>Action: Generate a Private Key</AlertTitle>
                <AlertDescription>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>Open your Firebase project settings in the Firebase console.</li>
                    <li>Go to the "Service accounts" tab.</li>
                    <li>Click the "Generate new private key" button.</li>
                    <li>A JSON file containing your service account credentials will be downloaded. **Treat this file like a password and keep it secure!** Do not commit it to public version control.</li>
                </ol>
                </AlertDescription>
            </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Initializing the App</CardTitle>
          <CardDescription>Let's write the code to connect to Firebase.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>First, you need to install the library:</p>
            <SyntaxHighlighter language="bash">pip install firebase-admin</SyntaxHighlighter>
            <p>Then, use the credentials from your downloaded JSON file to initialize the SDK. Remember to replace the placeholder values with your actual file path and project ID.</p>
            <SyntaxHighlighter language="python">{initializeAppCode}</SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. While you can't use a real service account file there, you can still practice writing the initialization code structure.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
    </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Backend Connection Established</AlertTitle>
        <AlertDescription>
          You now know how to securely connect a Python application to Firebase with admin rights. In the next lessons, we'll use this connection to manipulate data in Firestore and manage users.
        </AlertDescription>
      </Alert>
    </div>
  );
}
