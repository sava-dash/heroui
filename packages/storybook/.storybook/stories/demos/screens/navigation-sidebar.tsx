"use client";

import {
  ArrowUpRightFromSquare,
  BarsUnaligned,
  Bell,
  Bucket,
  Comments,
  CommentDot,
  FaceRobot,
  Globe,
  ListUl,
  Person,
  Picture,
  ShoppingCart,
  Star,
} from "@gravity-ui/icons";
import {Avatar, Button, Separator} from "@heroui/react";
import React from "react";

// Yours Truly wordmark
function YoursTrulyLogo() {
  return (
    <div className="flex flex-col leading-tight">
      <span className="text-sm font-bold tracking-tight text-foreground">YOURS</span>
      <span className="text-sm italic text-foreground">Truly</span>
    </div>
  );
}

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    label: "Account",
    items: [
      {id: "overview", label: "Overview", icon: <BarsUnaligned className="size-4" />},
      {id: "myself", label: "Myself", icon: <Person className="size-4" />},
      {id: "lifetime", label: "Lifetime", icon: <Star className="size-4" />},
      {id: "bucket-list", label: "Bucket List", icon: <Bucket className="size-4" />},
      {id: "contacts", label: "Contacts", icon: <ListUl className="size-4" />},
      {id: "gallery", label: "My Gallery", icon: <Picture className="size-4" />},
    ],
  },
  {
    label: "Chat",
    items: [
      {id: "ai-chat", label: "AI chat", icon: <FaceRobot className="size-4" />},
      {id: "messages", label: "Messages", icon: <Comments className="size-4" />},
      {id: "ps-messages", label: "PS messages", icon: <CommentDot className="size-4" />},
    ],
  },
  {
    label: "Shop",
    items: [
      {id: "marketplace", label: "Marketplace", icon: <ShoppingCart className="size-4" />},
    ],
  },
];

export function NavigationSidebar() {
  const [activeId, setActiveId] = React.useState("myself");

  return (
    <nav
      aria-label="Main navigation"
      className="flex h-full w-64 shrink-0 flex-col gap-0 rounded-2xl bg-surface p-4 shadow-sm"
    >
      {/* Logo + bell */}
      <div className="mb-4 flex items-center justify-between">
        <YoursTrulyLogo />
        <button
          aria-label="Notifications"
          className="rounded-full p-1 text-muted transition-colors hover:bg-surface-secondary hover:text-foreground"
        >
          <Bell className="size-4" />
        </button>
      </div>

      {/* Nav groups */}
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
        {navGroups.map((group, gi) => (
          <div key={group.label}>
            {gi > 0 && <Separator className="mb-4" />}
            <p className="mb-1 px-2 text-xs font-medium text-muted uppercase">{group.label}</p>
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => (
                <li key={item.id}>
                  <button
                    aria-current={activeId === item.id ? "page" : undefined}
                    className={[
                      "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                      activeId === item.id
                        ? "bg-accent/10 font-medium text-accent"
                        : "text-foreground/70 hover:bg-surface-secondary hover:text-foreground",
                    ].join(" ")}
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto flex flex-col gap-2 pt-4">
        <Separator />
        <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-secondary hover:text-foreground">
          <Globe className="size-4" />
          Support
        </button>
        <Button className="w-full justify-between" size="sm" variant="tertiary">
          Upgrade
          <ArrowUpRightFromSquare className="size-3" />
        </Button>
        <Separator />
        <div className="flex items-center gap-2 px-2 py-1">
          <Avatar className="size-8">
            <Avatar.Image
              alt="Junior Garcia"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
            />
            <Avatar.Fallback>JG</Avatar.Fallback>
          </Avatar>
          <span className="text-sm font-medium">Junior Garcia</span>
        </div>
      </div>
    </nav>
  );
}
