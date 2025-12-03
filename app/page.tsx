import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentOrders } from "@/components/recent-orders"
import { DeliveryChart } from "@/components/delivery-chart"
import { Separator } from "@/components/ui/separator"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-lg font-semibold">Дашборд</h1>
        </header>
        <main className="flex flex-1 flex-col gap-6 p-6">
          <DashboardStats />
          <div className="grid gap-6 lg:grid-cols-2">
            <DeliveryChart />
            <RecentOrders />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
