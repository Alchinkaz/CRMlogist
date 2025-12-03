"use client"

import { LayoutDashboard, Package, Users, Truck, MapPin, Settings, BarChart3, FileText } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import Link from "next/link"

const menuItems = [
  {
    title: "Основное",
    items: [
      { title: "Дашборд", url: "/", icon: LayoutDashboard },
      { title: "Заказы", url: "/orders", icon: Package },
      { title: "Клиенты", url: "/clients", icon: Users },
      { title: "Транспорт", url: "/vehicles", icon: Truck },
      { title: "Отслеживание", url: "/tracking", icon: MapPin },
    ],
  },
  {
    title: "Аналитика",
    items: [
      { title: "Отчеты", url: "/reports", icon: FileText },
      { title: "Статистика", url: "/analytics", icon: BarChart3 },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Truck className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-sidebar-foreground">Logitransport CRM</h2>
            <p className="text-xs text-sidebar-foreground/60">CRM Система</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/settings">
                <Settings className="h-4 w-4" />
                <span>Настройки</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
