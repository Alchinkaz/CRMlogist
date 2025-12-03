"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function TrackingMap() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Карта отслеживания</CardTitle>
        <CardDescription>Активные маршруты транспорта в реальном времени</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative flex h-[500px] items-center justify-center overflow-hidden rounded-lg border border-border bg-muted">
          <img src="/logistics-map-with-routes-and-markers.jpg" alt="Карта маршрутов" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Интеграция с картами</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Здесь будет отображаться карта с маршрутами
                <br />и текущим положением транспорта
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
