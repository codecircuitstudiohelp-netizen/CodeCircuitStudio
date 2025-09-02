
"use client"

import Link from "next/link";
import { type LucideIcon, CheckCircle, Circle, PlayCircle, Lock, Book, Code, Bot, HardDrive, MemoryStick, Gamepad2, Globe, Palette, Component, AlertTriangle, TestTube, Bug } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap = {
    Book,
    Code,
    Bot,
    HardDrive,
    MemoryStick,
    Gamepad2,
    Globe,
    Palette,
    Component,
    AlertTriangle,
    TestTube,
    Bug,
    Lock,
};

type LessonIconName = keyof typeof iconMap;

interface LessonItemProps {
  title: string;
  status: "Completed" | "In Progress" | "Next Up" | "Locked";
  icon: LessonIconName;
  href: string;
}

const statusConfig = {
  Completed: {
    icon: CheckCircle,
    color: "text-green-500",
    badge: "Completed",
    button: "Review",
    variant: "secondary",
  },
  "In Progress": {
    icon: PlayCircle,
    color: "text-blue-500",
    badge: "In Progress",
    button: "Continue",
    variant: "default",
  },
  "Next Up": {
    icon: Circle,
    color: "text-primary",
    badge: "Next Up",
    button: "Start",
    variant: "default",
  },
  Locked: {
    icon: Lock,
    color: "text-muted-foreground",
    badge: "Locked",
    button: "Start",
    variant: "outline",
  },
};

export function LessonItem({ title, status, icon, href }: LessonItemProps) {
    const config = statusConfig[status];
    const isDisabled = status === "Locked";
    const IconComponent = iconMap[icon] || Book;

    return (
        <div className={cn(
            "flex items-center gap-4 rounded-lg border p-4 transition-colors",
            !isDisabled && "hover:bg-accent",
            isDisabled && "bg-muted/50"
        )}>
            <IconComponent className={cn("h-8 w-8 flex-shrink-0", config.color)} />
            <div className="flex-1 min-w-0">
                <h3 className={cn(
                    "font-semibold truncate",
                    isDisabled && "text-muted-foreground"
                )}>
                    {title}
                </h3>
                <Badge variant={isDisabled ? "outline" : "default"} className={cn(
                    "mt-1",
                    status === "Completed" && "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
                    status === "In Progress" && "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
                )}>
                    {config.badge}
                </Badge>
            </div>
            <Button asChild variant={config.variant as any} disabled={isDisabled}>
                <Link href={isDisabled ? "#" : href}>{config.button}</Link>
            </Button>
        </div>
    );
}
