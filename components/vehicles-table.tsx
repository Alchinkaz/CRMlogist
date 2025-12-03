"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Pencil, Wrench } from "lucide-react"

const vehicles = [
  {
    id: 1,
    plate: "А123БВ 777",
    model: "КамАЗ-65117",
    type: "Тягач",
    capacity: "20 т",
    year: "2021",
    status: "В рейсе",
    statusColor: "default",
    driver: "Н.Н.",
    mileage: "145,320 км",
    nextService: "15.01.2025",
  },
  {
    id: 2,
    plate: "В456ГД 199",
    model: "МАЗ-6312",
    type: "Фургон",
    capacity: "15 т",
    year: "2022",
    status: "Доступен",
    statusColor: "default",
    driver: "Не назначен",
    mileage: "89,450 км",
    nextService: "20.01.2025",
  },
  {
    id: 3,
    plate: "Е789ЖЗ 116",
    model: "VOLVO FH16",
    type: "Тягач",
    capacity: "25 т",
    year: "2023",
    status: "В рейсе",
    statusColor: "default",
    driver: "А.А.",
    mileage: "54,210 км",
    nextService: "10.02.2025",
  },
  {
    id: 4,
    plate: "И012КЛ 777",
    model: "ГАЗель NEXT",
    type: "Фургон",
    capacity: "3 т",
    year: "2022",
    status: "На ТО",
    statusColor: "secondary",
    driver: "Не назначен",
    mileage: "67,890 км",
    nextService: "Сейчас",
  },
  {
    id: 5,
    plate: "М345НО 199",
    model: "Scania R450",
    type: "Рефрижератор",
    capacity: "22 т",
    year: "2021",
    status: "Доступен",
    statusColor: "default",
    driver: "Е.Е.",
    mileage: "178,560 км",
    nextService: "25.01.2025",
  },
]

export function VehiclesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Автопарк</CardTitle>
        <CardDescription>Управление транспортными средствами компании</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Гос. номер</TableHead>
                <TableHead>Модель</TableHead>
                <TableHead>Тип</TableHead>
                <TableHead>Грузоподъемность</TableHead>
                <TableHead>Год</TableHead>
                <TableHead>Водитель</TableHead>
                <TableHead>Пробег</TableHead>
                <TableHead>След. ТО</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="font-medium">{vehicle.plate}</TableCell>
                  <TableCell>{vehicle.model}</TableCell>
                  <TableCell>{vehicle.type}</TableCell>
                  <TableCell>{vehicle.capacity}</TableCell>
                  <TableCell>{vehicle.year}</TableCell>
                  <TableCell className="text-sm">{vehicle.driver}</TableCell>
                  <TableCell className="text-sm">{vehicle.mileage}</TableCell>
                  <TableCell className="text-sm">{vehicle.nextService}</TableCell>
                  <TableCell>
                    <Badge variant={vehicle.statusColor as any}>{vehicle.status}</Badge>
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
                        <Wrench className="h-4 w-4" />
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
