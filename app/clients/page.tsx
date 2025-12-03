import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ClientsGrid } from "@/components/clients-grid"
import { ClientsSearch } from "@/components/clients-search"

export default function ClientsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-lg font-semibold">Управление клиентами</h1>
          <div className="ml-auto">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Добавить клиента
            </Button>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-6 p-6">
          <ClientsSearch />
          <ClientsGrid />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
