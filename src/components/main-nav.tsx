
"use client";

import {
  Home,
  BookOpen,
  Code2,
  CircuitBoard,
  FolderKanban,
  ClipboardCheck,
  Network,
  LifeBuoy,
  Cpu,
} from "lucide-react";
import { SidebarNav } from "./sidebar-nav";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home, tooltip: "Dashboard" },
  { href: "/learn", label: "Learn", icon: BookOpen, tooltip: "Learn" },
  { href: "/code-lab", label: "Code Lab", icon: Code2, tooltip: "Code Lab" },
  {
    href: "/circuit-designer",
    label: "Circuit Designer",
    icon: CircuitBoard,
    tooltip: "Circuit Designer",
  },
  {
    href: "/pcb-designer",
    label: "PCB Designer",
    icon: Cpu,
    tooltip: "PCB Designer",
  },
  {
    href: "/simulation-room",
    label: "Sim Room",
    icon: Network,
    tooltip: "Simulation Room",
  },
  {
    href: "/projects",
    label: "Projects",
    icon: FolderKanban,
    tooltip: "Projects",
  },
  {
    href: "/assessments",
    label: "Assessments",
    icon: ClipboardCheck,
    tooltip: "Assessments",
  },
  {
    href: "/help",
    label: "Help",
    icon: LifeBuoy,
    tooltip: "Help",
  },
];

export function MainNav() {
  return <SidebarNav navItems={navItems} />;
}
