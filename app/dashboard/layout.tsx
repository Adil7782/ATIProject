
import { DashboardNav } from "@/components/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col h-full">
          <div className="flex h-14 items-center border-b px-4">
            <span className="font-semibold">Dashboard</span>
          </div>
          <ScrollArea className="flex-1 py-2">
            <DashboardNav />
          </ScrollArea>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="h-full">{children}</div>
      </main>
    </div>
  );
}