"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Pencil, Trash2 } from "lucide-react"

const orders = [
  {
    id: "ORD-2024-001",
    client: "ТОО «Торговый Дом»",
    route: "Алматы → Астана",
    cargo: "Промышленное оборудование",
    weight: "15 т",
    status: "В пути",
    statusColor: "default",
    date: "15.12.2024",
    driver: "Н.Н.",
    price: "₸1,250,000",
  },
  {
    id: "ORD-2024-002",
    client: "ИП Асылбек А.А.",
    route: "Шымкент → Караганда",
    cargo: "Строительные материалы",
    weight: "22 т",
    status: "Доставлен",
    statusColor: "default",
    date: "14.12.2024",
    driver: "А.А.",
    price: "₸985,000",
  },
  {
    id: "ORD-2024-003",
    client: "ТОО «Стройматериалы»",
    route: "Актобе → Костанай",
    cargo: "Цемент, кирпич",
    weight: "18 т",
    status: "Ожидание",
    statusColor: "secondary",
    date: "16.12.2024",
    driver: "Не назначен",
    price: "₸870,000",
  },
  {
    id: "ORD-2024-004",
    client: "АО «Продукты»",
    route: "Тараз → Туркестан",
    cargo: "Продукты питания",
    weight: "12 т",
    status: "В пути",
    statusColor: "default",
    date: "15.12.2024",
    driver: "Е.Е.",
    price: "₸760,000",
  },
  {
    id: "ORD-2024-005",
    client: "ТОО «Техника»",
    route: "Павлодар → Усть-Каменогорск",
    cargo: "Электроника",
    weight: "8 т",
    status: "Обработка",
    statusColor: "secondary",
    date: "16.12.2024",
    driver: "Не назначен",
    price: "₸650,000",
  },
  {
    id: "ORD-2024-006",
    client: "ИП Данияр Д.Д.",
    route: "Атырау → Актау",
    cargo: "Мебель",
    weight: "10 т",
    status: "Ожидание",
    statusColor: "secondary",
    date: "17.12.2024",
    driver: "Не назначен",
    price: "₸540,000",
  },
]

export function OrdersTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Список заказов</CardTitle>
        <CardDescription>Управление всеми заказами и отправками</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Номер</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead>Маршрут</TableHead>
                <TableHead>Груз</TableHead>
                <TableHead>Вес</TableHead>
                <TableHead>Водитель</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Стоимость</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell className="text-sm">{order.route}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{order.cargo}</TableCell>
                  <TableCell>{order.weight}</TableCell>
                  <TableCell className="text-sm">{order.driver}</TableCell>
                  <TableCell className="text-sm">{order.date}</TableCell>
                  <TableCell className="font-medium">{order.price}</TableCell>
                  <TableCell>
                    <Badge variant={order.statusColor as any}>{order.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
