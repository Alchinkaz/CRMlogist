"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Mail, Phone, MapPin, Eye, Pencil } from "lucide-react"

const clients = [
  {
    id: 1,
    name: "ООО «Торговый Дом»",
    type: "Юр. лицо",
    inn: "770123456789",
    contact: "Иванов Иван Иванович",
    email: "ivanov@torgoviy-dom.kz",
    phone: "+7 (727) 123-45-67",
    city: "Алматы",
    orders: 47,
    revenue: "₸52M",
    status: "active",
  },
  {
    id: 2,
    name: "ИП Петров Алексей Сергеевич",
    type: "ИП",
    inn: "660112345678",
    contact: "Петров Алексей Сергеевич",
    email: "petrov@mail.kz",
    phone: "+7 (7172) 234-56-78",
    city: "Астана",
    orders: 23,
    revenue: "₸18M",
    status: "active",
  },
  {
    id: 3,
    name: "ООО «Стройматериалы»",
    type: "Юр. лицо",
    inn: "165509876543",
    contact: "Сидорова Мария Петровна",
    email: "info@stroymaterialy.kz",
    phone: "+7 (7252) 345-67-89",
    city: "Шымкент",
    orders: 31,
    revenue: "₸27M",
    status: "active",
  },
  {
    id: 4,
    name: "АО «Продукты»",
    type: "Юр. лицо",
    inn: "616402345678",
    contact: "Козлов Владимир Васильевич",
    email: "kozlov@produkty.kz",
    phone: "+7 (7212) 456-78-90",
    city: "Караганда",
    orders: 18,
    revenue: "₸14M",
    status: "active",
  },
  {
    id: 5,
    name: "ООО «Техника»",
    type: "Юр. лицо",
    inn: "631567890123",
    contact: "Новикова Елена Андреевна",
    email: "novikova@tehnika.kz",
    phone: "+7 (7132) 567-89-01",
    city: "Актобе",
    orders: 12,
    revenue: "₸8.9M",
    status: "active",
  },
  {
    id: 6,
    name: "ИП Смирнов Дмитрий Александрович",
    type: "ИП",
    inn: "366245678901",
    contact: "Смирнов Дмитрий Александрович",
    email: "smirnov@mail.kz",
    phone: "+7 (7182) 678-90-12",
    city: "Павлодар",
    orders: 8,
    revenue: "₸5.2M",
    status: "active",
  },
]

export function ClientsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {clients.map((client) => (
        <Card key={client.id} className="flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base">{client.name}</CardTitle>
                  <CardDescription className="text-xs">{client.type}</CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span>ИНН: {client.inn}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="truncate">{client.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{client.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{client.city}</span>
              </div>
            </div>
            <div className="mt-auto space-y-3 border-t border-border pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Заказов:</span>
                <span className="font-medium">{client.orders}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Выручка:</span>
                <span className="font-medium">{client.revenue}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Eye className="mr-2 h-4 w-4" />
                  Просмотр
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Pencil className="mr-2 h-4 w-4" />
                  Изменить
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
