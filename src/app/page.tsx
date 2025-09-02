
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Google, Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { signInWithGoogle, auth, signUpWithEmailAndPassword, signInWithEmailAndPassword } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  
  // Sign-up state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [interests, setInterests] = useState('');
  const [role, setRole] = useState('');
  const [foundUs, setFoundUs] = useState('');

  // Sign-in state
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthCheckComplete, setIsAuthCheckComplete] = useState(false);

  useEffect(() => {
    // This listener only handles redirecting away from the login page if the user is already logged in.
    // The main app layout handles protecting routes for unauthenticated users.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/dashboard');
      } else {
        setIsAuthCheckComplete(true);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleSocialLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      // The onAuthStateChanged listener will handle the redirect
    } catch (error: any) {
      console.error("Authentication Error:", error);
      toast({
        variant: "destructive",
        title: "Authentication Failed",
        description: error.message || "There was a problem signing you in.",
      });
    } finally {
        setIsLoading(false);
    }
  };
  
  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) {
      toast({ variant: "destructive", title: "Sign Up Failed", description: "Please select your role." });
      return;
    }
    setIsLoading(true);
    try {
      await signUpWithEmailAndPassword(email, password);
      // The onAuthStateChanged listener will handle the redirect
    } catch (error: any) {
      console.error("Sign Up Error:", error);
      toast({
        variant: "destructive",
        title: "Sign Up Failed",
        description: error.message || "There was a problem creating your account.",
      });
    } finally {
        setIsLoading(false);
    }
  }
  
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(signInEmail, signInPassword);
      // The onAuthStateChanged listener will handle the redirect
    } catch (error: any) {
      console.error("Sign In Error:", error);
      toast({
        variant: "destructive",
        title: "Sign In Failed",
        description: error.message || "Could not sign you in. Please check your credentials.",
      });
    } finally {
        setIsLoading(false);
    }
  }

  if (!isAuthCheckComplete) {
    return (
        <div className="relative min-h-screen w-full bg-background flex items-center justify-center">
            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-primary/10 via-background to-background" />
            <p className="text-muted-foreground">Loading...</p>
        </div>
    )
  }

  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="container flex min-h-screen items-center justify-center py-12">
        <Card className="w-full max-w-md border-border/20 bg-card/50 backdrop-blur-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Logo className="h-16 w-16" />
            </div>
            <CardTitle className="text-3xl font-bold">Welcome to CodeCircuit</CardTitle>
            <CardDescription>Your personal AI-powered learning lab.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="sign-in">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="sign-in">
                 <form onSubmit={handleEmailSignIn} className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="signInEmail">Email</Label>
                      <Input id="signInEmail" type="email" placeholder="student@example.com" required value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} disabled={isLoading} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signInPassword">Password</Label>
                      <Input id="signInPassword" type="password" required value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} disabled={isLoading} />
                    </div>
                    <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </form>
              </TabsContent>
              <TabsContent value="sign-up">
                 <form onSubmit={handleEmailSignUp} className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" type="text" placeholder="Ada Lovelace" required value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={isLoading} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signUpEmail">Email</Label>
                      <Input id="signUpEmail" type="email" placeholder="student@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signUpPassword">Password</Label>
                      <Input id="signUpPassword" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="interests">Your Interests</Label>
                      <Input id="interests" type="text" placeholder="e.g., AI, Game Dev, Python" required value={interests} onChange={(e) => setInterests(e.target.value)} disabled={isLoading} />
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="role">Your Role</Label>
                        <Select onValueChange={setRole} value={role} disabled={isLoading}>
                            <SelectTrigger id="role">
                                <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="student">Student</SelectItem>
                                <SelectItem value="hobbyist">Hobbyist</SelectItem>
                                <SelectItem value="professional">Professional Developer</SelectItem>
                                <SelectItem value="teacher">Teacher/Educator</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="found-us">Where did you find us?</Label>
                        <Select onValueChange={setFoundUs} value={foundUs} disabled={isLoading}>
                            <SelectTrigger id="found-us">
                                <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="social-media">Social Media</SelectItem>
                                <SelectItem value="friend">From a friend</SelectItem>
                                <SelectItem value="search-engine">Search Engine (Google, etc.)</SelectItem>
                                <SelectItem value="advertisement">Advertisement</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </form>
              </TabsContent>
            </Tabs>
            
            <Separator className="my-6" />
            
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or</span>
                </div>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" className="w-full" onClick={handleSocialLogin} disabled={isLoading}>
                  <Google className="h-5 w-5 mr-2" />
                  Continue with Google
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
