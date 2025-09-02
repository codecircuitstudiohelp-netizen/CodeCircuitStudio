
"use client";

import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  Lightbulb,
  Gauge,
  Cog,
  Bell,
  Tv2,
  Bluetooth,
  Thermometer,
  Waves,
  Minus,
  Plus,
  Battery,
  Camera,
  Keyboard,
  Mic,
  Monitor,
  Mouse,
  Speaker,
  Wifi,
  Fan,
  HardDrive,
  Power,
  Server,
} from "lucide-react";

export type Component = {
    name: string;
    icon: LucideIcon;
};

const components: Component[] = [
  { name: "Arduino Uno", icon: Cpu },
  { name: "Raspberry Pi", icon: Cpu },
  { name: "ESP32", icon: Cpu },
  { name: "LED", icon: Lightbulb },
  { name: "Resistor", icon: Minus },
  { name: "Capacitor", icon: Plus },
  { name: "Diode", icon: Power },
  { name: "Transistor", icon: Power },
  { name: "Potentiometer", icon: Gauge },
  { name: "Servo Motor", icon: Cog },
  { name: "DC Motor", icon: Fan },
  { name: "Buzzer", icon: Bell },
  { name: "Speaker", icon: Speaker },
  { name: "OLED Screen", icon: Tv2 },
  { name: "LCD 16x2", icon: Monitor },
  { name: "Bluetooth Module", icon: Bluetooth },
  { name: "WiFi Module", icon: Wifi },
  { name: "Temp Sensor", icon: Thermometer },
  { name: "Ultrasonic Sensor", icon: Waves },
  { name: "PIR Sensor", icon: Waves },
  { name: "Camera Module", icon: Camera },
  { name: "Microphone", icon: Mic },
  { name: "9V Battery", icon: Battery },
  { name: "Breadboard", icon: HardDrive },
  { name: "Push Button", icon: Mouse },
  { name: "Keypad", icon: Keyboard },
  { name: "Relay Module", icon: Server },
];

interface ComponentListProps {
    onSelectComponent: (component: Component) => void;
}


export function ComponentList({ onSelectComponent }: ComponentListProps) {
  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      {components.map((component) => (
        <div
          key={component.name}
          onClick={() => onSelectComponent(component)}
          className="group flex cursor-pointer flex-col items-center gap-2 rounded-lg border bg-card p-3 text-center transition-colors hover:bg-accent hover:text-accent-foreground active:bg-primary/20"
        >
          <component.icon className="h-8 w-8" />
          <span className="text-xs font-medium">{component.name}</span>
        </div>
      ))}
    </div>
  );
}
