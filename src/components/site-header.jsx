import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center ">
          <SidebarTrigger className="-ml-1 md:hidden" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4 md:hidden"
          />
          <h1 className="text-base font-medium">Documents</h1>
        </div>

        <div className=" flex items-center gap-2 md:gap-4 px-2 md:px-4">
          <h1>Username</h1>
          <Avatar className="rounded-full">
            <Link to="/">
              <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Link>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
