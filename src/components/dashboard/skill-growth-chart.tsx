
"use client"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Bar, CartesianGrid, XAxis, YAxis, BarChart as RechartsBarChart } from "recharts"

const chartData = [
  { month: "January", xp: 0 },
  { month: "February", xp: 0 },
  { month: "March", xp: 0 },
  { month: "April", xp: 0 },
  { month: "May", xp: 0 },
  { month: "June", xp: 0 },
]

const chartConfig = {
  xp: {
    label: "XP",
    color: "hsl(var(--primary))",
  },
}

export function SkillGrowthChart() {
    return (
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <RechartsBarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="xp" fill="var(--color-xp)" radius={8} />
            </RechartsBarChart>
        </ChartContainer>
    )
}
