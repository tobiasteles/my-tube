import { Sidebar, SidebarContent, SidebarProvider } from "@/components/ui/sidebar"
import { MainSection } from "./main-section"

export const HomeSidebar = () => {
    return (
        <SidebarProvider>
        <Sidebar className="pt-16 z-40 border-none">
            <SidebarContent className="bg-background">
                <MainSection />
            </SidebarContent>
        </Sidebar>
        </SidebarProvider>
    )
}