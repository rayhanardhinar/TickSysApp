import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Card } from "../ui/card";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-4 space-y-4">
        <SidebarTrigger className="p-6" />
        <Card className="p-4 mx-auto">
          <Outlet />
        </Card>
      </main>
    </SidebarProvider>
  );
}
