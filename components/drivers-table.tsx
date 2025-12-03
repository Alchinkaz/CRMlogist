"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Pencil, Phone } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const drivers = [
  {
    id: 1,
    name: "Иванов Иван Иванович",
    phone: "+7 (915) 123-45-67",
    license: "99 12 345678",
    experience: "15 лет",
    vehicle: "А123БВ 777",
    status: "В рейсе",
    statusColor: "default",
    trips: 342,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Петров Петр Петрович",
    phone: "+7 (916) 234-56-78",
    license: "77 23 456789",
    experience: "8 лет",
    vehicle: "Не назначен",
    status: "Отдых",
    statusColor: "secondary",
    trips: 156,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Сидоров Сергей Сергеевич",
    phone: "+7 (917) 345-67-89",
    license: "50 34 567890",
    experience: "12 лет",
    vehicle: "Е789ЖЗ 116",
    status: "В рейсе",
    statusColor: "default",
    trips: 278,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Козлов Владимир Васильевич",
    phone: "+7 (918) 456-78-90",
    license: "63 45 678901",
    experience: "10 лет",
    vehicle: "М345НО 199",
    status: "Доступен",
    statusColor: "default",
    trips: 198,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Новиков Николай Николаевич",
    phone: "+7 (919) 567-89-01",
    license: "16 56 789012",
    experience: "6 лет",
    vehicle: "Не назначен",
    status: "Доступен",
    statusColor: "default",
    trips: 124,
    rating: 4.5,
  },
]

export function DriversTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Водители</CardTitle>
        <CardDescription>Управление водительским составом компании</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Водитель</TableHead>
                <TableHead>Телефон</TableHead>
                <TableHead>Водит. удостоверение</TableHead>
                <TableHead>Опыт</TableHead>
                <TableHead>Транспорт</TableHead>
                <TableHead>Рейсов</TableHead>
                <TableHead>Рейтинг</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {driver.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{driver.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{driver.phone}</TableCell>
                  <TableCell className="text-sm">{driver.license}</TableCell>
                  <TableCell>{driver.experience}</TableCell>
                  <TableCell className="text-sm">{driver.vehicle}</TableCell>
                  <TableCell>{driver.trips}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{driver.rating}</span>
                      <span className="text-xs text-muted-foreground">/5.0</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={driver.statusColor as any}>{driver.status}</Badge>
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
                        <Phone className="h-4 w-4" />
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
