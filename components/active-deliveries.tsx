"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const activeDeliveries = [
  {
    id: "ORD-2024-001",
    route: "Алматы → Астана",
    driver: "Н.Н.",
    vehicle: "А123БВ 02",
    progress: 65,
    currentLocation: "Караганда",
    eta: "2 ч 30 мин",
    distance: "180 км",
    status: "В пути",
  },
  {
    id: "ORD-2024-003",
    route: "Актобе → Костанай",
    driver: "Не назначен",
    vehicle: "В456ГД 05",
    progress: 0,
    currentLocation: "Актобе",
    eta: "Ожидание",
    distance: "380 км",
    status: "Ожидание",
  },
  {
    id: "ORD-2024-004",
    route: "Тараз → Туркестан",
    driver: "Е.Е.",
    vehicle: "М345НО 10",
    progress: 45,
    currentLocation: "Сайрам",
    eta: "3 ч 15 мин",
    distance: "145 км",
    status: "В пути",
  },
]

export function ActiveDeliveries() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Активные доставки</CardTitle>
        <CardDescription>Доставки в реальном времени</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activeDeliveries.map((delivery) => (
            <div key={delivery.id} className="space-y-3 rounded-lg border border-border p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{delivery.id}</p>
                  <p className="text-sm text-muted-foreground">{delivery.route}</p>
                </div>
                <Badge variant={delivery.status === "В пути" ? "default" : "secondary"}>{delivery.status}</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Прогресс</span>
                  <span className="font-medium">{delivery.progress}%</span>
                </div>
                <Progress value={delivery.progress} className="h-2" />
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{delivery.currentLocation}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Navigation className="h-4 w-4" />
                  <span>{delivery.distance} осталось</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>ETA: {delivery.eta}</span>
                </div>
              </div>

              <div className="flex gap-2 border-t border-border pt-3">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  Детали
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  Контакт
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
