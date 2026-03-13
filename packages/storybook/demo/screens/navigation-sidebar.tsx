"use client";

import {
  ArrowUpRightFromSquare,
  BarsUnaligned,
  Bell,
  Bucket,
  CommentDot,
  Comments,
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

// ─── Figma MCP assets ────────────────────────────────────────────────────────

/* YoursTruly logo layers — same assets as other screens */
const imgGroup = "http://localhost:3845/assets/ef73cd9e3e3cafdf77a83ef2a6eb4f58fd3bc7b4.svg";
const imgGroup1 = "http://localhost:3845/assets/41e820d59e312313e0141fc6621a9d1de74346c2.svg";
const imgGroup2 = "http://localhost:3845/assets/6e0b0a4348cc63aaac45c735a3fdc0943cccd88d.svg";

// ─── YoursTruly logo (sidebar-sized: 72×40 px) ───────────────────────────────

function YoursTrulyLogo() {
  return (
    <div aria-label="YoursTruly" className="relative h-[40px] w-[72px] select-none">
      <div className="absolute inset-[0_12.08%_69.03%_10.89%]">
        <img alt="" className="absolute block size-full max-w-none" src={imgGroup} />
      </div>
      <div className="absolute inset-[22.55%_-0.21%_15.48%_-1.39%]">
        <img alt="" className="absolute block size-full max-w-none" src={imgGroup1} />
      </div>
      <div className="absolute inset-[32.04%_5.79%_0_4.58%]">
        <img alt="" className="absolute block size-full max-w-none" src={imgGroup2} />
      </div>
    </div>
  );
}

// ─── Nav data ─────────────────────────────────────────────────────────────────

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
    items: [
      {icon: <BarsUnaligned className="size-4" />, id: "overview", label: "Overview"},
      {icon: <Person className="size-4" />, id: "myself", label: "Myself"},
      {icon: <Star className="size-4" />, id: "lifetime", label: "Lifetime"},
      {icon: <Bucket className="size-4" />, id: "bucket-list", label: "Bucket List"},
      {icon: <ListUl className="size-4" />, id: "contacts", label: "Contacts"},
      {icon: <Picture className="size-4" />, id: "gallery", label: "My Gallery"},
    ],
    label: "Account",
  },
  {
    items: [
      {icon: <FaceRobot className="size-4" />, id: "ai-chat", label: "AI chat"},
      {icon: <Comments className="size-4" />, id: "messages", label: "Messages"},
      {icon: <CommentDot className="size-4" />, id: "ps-messages", label: "PS messages"},
    ],
    label: "Chat",
  },
  {
    items: [{icon: <ShoppingCart className="size-4" />, id: "marketplace", label: "Marketplace"}],
    label: "Shop",
  },
];

// ─── Navigation Sidebar ───────────────────────────────────────────────────────

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
