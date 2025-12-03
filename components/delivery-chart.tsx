"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const data = [
  { name: "Пн", deliveries: 24 },
  { name: "Вт", deliveries: 32 },
  { name: "Ср", deliveries: 28 },
  { name: "Чт", deliveries: 41 },
  { name: "Пт", deliveries: 38 },
  { name: "Сб", deliveries: 19 },
  { name: "Вс", deliveries: 15 },
]

export function DeliveryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Доставки за неделю</CardTitle>
        <CardDescription>Количество завершенных доставок по дням</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="name" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Bar dataKey="deliveries" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
