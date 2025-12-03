import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, TrendingUp, Truck, Users } from "lucide-react"

const stats = [
  {
    title: "Активные заказы",
    value: "147",
    change: "+12%",
    icon: Package,
    trend: "up",
  },
  {
    title: "Всего клиентов",
    value: "892",
    change: "+8%",
    icon: Users,
    trend: "up",
  },
  {
    title: "Транспорт в пути",
    value: "34",
    change: "-3%",
    icon: Truck,
    trend: "down",
  },
  {
    title: "Выручка (месяц)",
    value: "₸24.5M",
    change: "+23%",
    icon: TrendingUp,
    trend: "up",
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {stat.change} от прошлого месяца
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
