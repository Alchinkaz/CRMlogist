import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { VehiclesTable } from "@/components/vehicles-table"
import { DriversTable } from "@/components/drivers-table"

export default function VehiclesPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-lg font-semibold">Управление транспортом и водителями</h1>
        </header>
        <main className="flex flex-1 flex-col gap-6 p-6">
          <Tabs defaultValue="vehicles" className="w-full">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="vehicles">Транспорт</TabsTrigger>
                <TabsTrigger value="drivers">Водители</TabsTrigger>
              </TabsList>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Добавить
              </Button>
            </div>
            <TabsContent value="vehicles" className="mt-6">
              <VehiclesTable />
            </TabsContent>
            <TabsContent value="drivers" className="mt-6">
              <DriversTable />
            </TabsContent>
          </Tabs>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
