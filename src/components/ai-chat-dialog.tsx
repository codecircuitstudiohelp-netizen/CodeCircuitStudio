"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, Send, Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { chat } from "@/ai/flows/ai-chatbot";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

type Message = {
  role: "user" | "model";
  content: string;
};

export function AIChatDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [user] = useAuthState(auth);
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    const newHistory = [...history, userMessage];
    setHistory(newHistory);
    setInput("");
    setIsLoading(true);

    try {
      const result = await chat({ history: newHistory });
      const modelMessage: Message = { role: "model", content: result.response };
      setHistory((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        role: "model",
        content: "Sorry, I ran into a problem. Please try again.",
      };
      setHistory((prev) => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };
  
  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [history]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px] flex flex-col h-[70vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" /> AI Tutor
          </DialogTitle>
          <DialogDescription>
            Ask me anything about your lessons, code, or circuits!
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-grow pr-4 -mr-4" ref={scrollAreaRef as any}>
            <div className="space-y-6 p-1">
                {history.length === 0 && (
                    <div className="text-center text-muted-foreground text-sm py-8">
                        <Sparkles className="mx-auto h-8 w-8 mb-2" />
                        <p>No messages yet. Start the conversation!</p>
                    </div>
                )}
                {history.map((message, index) => (
                <div
                    key={index}
                    className={cn(
                    "flex items-start gap-3",
                    message.role === "user" && "flex-row-reverse"
                    )}
                >
                    <Avatar className="h-8 w-8">
                    <AvatarImage src={message.role === 'user' ? user?.photoURL ?? '' : ''} />
                    <AvatarFallback>
                        {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </AvatarFallback>
                    </Avatar>
                    <div
                    className={cn(
                        "max-w-[75%] rounded-lg p-3 text-sm",
                        message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                    >
                    {message.content}
                    </div>
                </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-lg p-3">
                            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                        </div>
                    </div>
                )}
            </div>
        </ScrollArea>
        <DialogFooter>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex w-full items-center gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
