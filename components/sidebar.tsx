"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  Files,
  FolderKanban,
  MessagesSquare,
} from "lucide-react";

const navItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    title: "Documents",
    href: "/dashboard/documents",
    icon: Files,
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: MessagesSquare,
  },
];

const bottomNavItems = [
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-1 px-2">
        {navItems.map((item, index) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                pathname === item.href && "bg-secondary"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Button>
          </Link>
        ))}
      </div>
      
      <div className="px-4 py-2">
        <Separator />
      </div>
      
      <div className="space-y-1 px-2">
        {bottomNavItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                pathname === item.href && "bg-secondary"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}