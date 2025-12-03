import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentOrders = [
  {
    id: "ORD-2024-001",
    client: "ТОО «Торговый Дом»",
    route: "Алматы → Астана",
    status: "В пути",
    statusColor: "default",
  },
  {
    id: "ORD-2024-002",
    client: "ИП Нұрлан Н.Н.",
    route: "Шымкент → Караганда",
    status: "Доставлен",
    statusColor: "default",
  },
  {
    id: "ORD-2024-003",
    client: "ТОО «Стройматериалы»",
    route: "Актобе → Костанай",
    status: "Ожидание",
    statusColor: "secondary",
  },
  {
    id: "ORD-2024-004",
    client: "АО «Продукты»",
    route: "Тараз → Туркестан",
    status: "В пути",
    statusColor: "default",
  },
  {
    id: "ORD-2024-005",
    client: "ТОО «Техника»",
    route: "Павлодар → Усть-Каменогорск",
    status: "Обработка",
    statusColor: "secondary",
  },
]

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Последние заказы</CardTitle>
        <CardDescription>Последние 5 заказов в системе</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium">{order.id}</p>
                <p className="text-sm text-muted-foreground">{order.client}</p>
                <p className="text-xs text-muted-foreground">{order.route}</p>
              </div>
              <Badge variant={order.statusColor as any}>{order.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
