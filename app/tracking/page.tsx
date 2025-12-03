import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { TrackingMap } from "@/components/tracking-map"
import { ActiveDeliveries } from "@/components/active-deliveries"

export default function TrackingPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-lg font-semibold">Отслеживание доставок</h1>
        </header>
        <main className="flex flex-1 flex-col gap-6 p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TrackingMap />
            </div>
            <div>
              <ActiveDeliveries />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
