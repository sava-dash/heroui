"use client";

import {
  MagnifierPlus,
  ChevronRight,
  ChevronLeft,
  Plus,
  FileText,
  Picture,
  CircleInfo,
} from "@gravity-ui/icons";
import {Avatar, Button, Card, Chip, Input, Tabs} from "@heroui/react";
import React from "react";

import {NavigationSidebar} from "./navigation-sidebar";

// ─── Knowledge card data ────────────────────────────────────────────────────

type KnowledgeCard = {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  stats: {docs: number; images: number; files: number};
  avatars: string[];
  extraCount: number;
};

const knowledgeCards: KnowledgeCard[] = [
  {
    id: "k1",
    category: "Family",
    title: "Knowledge name",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    imageUrl: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg",
    stats: {docs: 5, images: 7, files: 4},
    avatars: [
      "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg",
      "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
      "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
    ],
    extraCount: 4,
  },
  {
    id: "k2",
    category: "Family",
    title: "Knowledge name",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    imageUrl: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg",
    stats: {docs: 5, images: 7, files: 4},
    avatars: [
      "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
      "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg",
      "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
    ],
    extraCount: 4,
  },
];

const recommendationCards = [
  {id: "r1", title: "Recommendations Name", description: "Lorem ipsum dolor sit amet consectet..."},
  {id: "r2", title: "Recommendations Name", description: "Lorem ipsum dolor sit amet consectet..."},
  {id: "r3", title: "Recommendations Name", description: "Lorem ipsum dolor sit amet consectet..."},
  {id: "r4", title: "Recommendations Name", description: "Lorem ipsum dolor sit amet consectet..."},
];

const chipFilters = [
  {id: "all", label: "All (13)", active: true},
  {id: "fishing", label: "Fishing (1)"},
  {id: "military", label: "Military (3)"},
  {id: "education", label: "Education (6)"},
  {id: "parenting", label: "Parenting (2)"},
  {id: "finance", label: "Finance (1)"},
];

const recommendedTags = [
  "Personal Growth & Development",
  "Health & Wellness",
  "Finances",
  "Professional Life",
  "Creative Projects",
  "Travel & Adventures",
  "Relationships & Social Life",
  "Home & Living",
  "Hobbies & Interests",
  "Learning & Education",
];

// ─── Knowledge card component ───────────────────────────────────────────────

function KnowledgeCardItem({card}: {card: KnowledgeCard}) {
  return (
    <Card className="min-w-0 flex-1">
      {/* Cover image */}
      <div className="relative h-32 w-full overflow-hidden rounded-xl">
        <img
          alt={card.title}
          className="h-full w-full object-cover"
          loading="lazy"
          src={card.imageUrl}
        />
        <Chip
          className="absolute top-2 left-2 text-xs"
          color="default"
          size="sm"
          variant="secondary"
        >
          {card.category}
        </Chip>
        <button
          aria-label="Bookmark"
          className="absolute top-2 right-2 rounded-full bg-white/80 p-1 text-foreground/60 backdrop-blur-sm hover:bg-white hover:text-foreground"
        >
          <CircleInfo className="size-3.5" />
        </button>
      </div>

      {/* Content */}
      <Card.Header className="pt-2">
        <Card.Title className="text-sm">{card.title}</Card.Title>
        <Card.Description className="text-xs">{card.description}</Card.Description>
      </Card.Header>

      {/* Stats row */}
      <Card.Content className="flex items-center gap-3 py-1">
        <span className="flex items-center gap-1 text-xs text-muted">
          <FileText className="size-3" />
          {card.stats.docs}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted">
          <Picture className="size-3" />
          {card.stats.images}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted">
          <FileText className="size-3" />
          {card.stats.files}
        </span>
      </Card.Content>

      {/* Footer: avatars */}
      <Card.Footer className="flex items-center gap-1">
        <div className="flex -space-x-1.5">
          {card.avatars.map((src, i) => (
            <Avatar key={i} className="size-5 ring-1 ring-surface">
              <Avatar.Image alt={`Collaborator ${i + 1}`} src={src} />
              <Avatar.Fallback className="text-[8px]">U</Avatar.Fallback>
            </Avatar>
          ))}
        </div>
        {card.extraCount > 0 && (
          <span className="ml-1 text-xs text-muted">+{card.extraCount}</span>
        )}
      </Card.Footer>
    </Card>
  );
}

// ─── Main dashboard screen ──────────────────────────────────────────────────

export function DashboardScreen() {
  const [activeFilter, setActiveFilter] = React.useState("all");

  return (
    <div className="flex h-screen min-h-[700px] w-full overflow-hidden rounded-2xl bg-background">
      {/* Sidebar */}
      <NavigationSidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center gap-4 border-b border-foreground/5 px-6 py-3">
          <div className="flex-1">
            <div className="relative max-w-[320px]">
              <MagnifierPlus className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
              <Input
                fullWidth
                className="pl-9"
                placeholder="Search"
                variant="secondary"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Chip color="default" size="sm" variant="secondary">
              😊 Happy
            </Chip>
            <Chip color="accent" size="sm" variant="soft">
              ✦ 100 XP
            </Chip>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto px-6 py-6">
          {/* Page title */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="mb-1 text-3xl font-bold italic text-foreground">Myself</h1>
              <p className="text-sm text-muted">
                Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque.
              </p>
            </div>
            <Button className="gap-2" size="sm">
              Add new
              <Plus className="size-4" />
            </Button>
          </div>

          {/* Popular Recommendations */}
          <section aria-labelledby="recommendations-heading" className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-foreground" id="recommendations-heading">
                  Popular Recommendation
                </h2>
                <p className="text-xs text-muted">
                  Create new event and earn{" "}
                  <span className="font-semibold text-accent">20 XP</span>
                </p>
              </div>
              <div className="flex gap-1">
                <button
                  aria-label="Previous recommendations"
                  className="rounded-full border border-foreground/10 p-1.5 text-muted hover:bg-surface-secondary hover:text-foreground"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  aria-label="Next recommendations"
                  className="rounded-full border border-foreground/10 p-1.5 text-muted hover:bg-surface-secondary hover:text-foreground"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {recommendationCards.map((rec) => (
                <Card key={rec.id} className="gap-2" variant="secondary">
                  <Card.Header className="gap-1">
                    <Card.Title className="text-sm">{rec.title}</Card.Title>
                    <Card.Description className="text-xs">{rec.description}</Card.Description>
                  </Card.Header>
                  <Card.Footer>
                    <Button className="gap-1.5 text-xs" size="sm" variant="tertiary">
                      Create
                      <Plus className="size-3" />
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          </section>

          {/* My Knowledge section */}
          <section aria-labelledby="knowledge-heading">
            {/* Tabs + controls */}
            <div className="mb-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Tabs defaultSelectedKey="my-knowledge">
                  <Tabs.ListContainer>
                    <Tabs.List aria-label="Knowledge view options">
                      <Tabs.Tab id="my-knowledge">
                        My knowledge
                        <Tabs.Indicator />
                      </Tabs.Tab>
                      <Tabs.Tab id="shared">
                        Shared with me
                        <Tabs.Indicator />
                      </Tabs.Tab>
                    </Tabs.List>
                  </Tabs.ListContainer>
                </Tabs>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <MagnifierPlus className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted" />
                    <Input
                      className="pl-8"
                      placeholder="Search"
                      size="sm"
                      variant="secondary"
                    />
                  </div>
                </div>
              </div>

              {/* Chip filters */}
              <div className="flex items-center gap-2 overflow-x-auto">
                <button
                  aria-label="Previous filters"
                  className="shrink-0 rounded-full p-1 text-muted hover:text-foreground"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <Button className="shrink-0 gap-1.5 text-xs" size="sm" variant="tertiary">
                  <Plus className="size-3" />
                  Add category
                </Button>
                {chipFilters.map((chip) => (
                  <Chip
                    key={chip.id}
                    className="shrink-0 cursor-pointer text-xs"
                    color={activeFilter === chip.id ? "accent" : "default"}
                    size="sm"
                    variant={activeFilter === chip.id ? "primary" : "secondary"}
                    onClick={() => setActiveFilter(chip.id)}
                  >
                    {chip.label}
                  </Chip>
                ))}
                <button
                  aria-label="Next filters"
                  className="shrink-0 rounded-full p-1 text-muted hover:text-foreground"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>

            {/* Knowledge cards grid + right panel */}
            <div className="flex gap-6">
              {/* Cards grid */}
              <div className="flex flex-1 gap-4">
                {knowledgeCards.map((card) => (
                  <KnowledgeCardItem key={card.id} card={card} />
                ))}
              </div>

              {/* Right panel */}
              <div className="hidden w-64 shrink-0 flex-col gap-4 xl:flex">
                {/* AI writing prompt */}
                <Card className="bg-accent/5" variant="secondary">
                  <Card.Header className="gap-1">
                    <span className="text-accent text-lg">✦</span>
                    <Card.Title className="text-sm">Don&apos;t know what to write about?</Card.Title>
                    <Card.Description className="text-xs">
                      Open AI will help you with your writing
                    </Card.Description>
                  </Card.Header>
                  <Card.Footer>
                    <Button className="w-full" size="sm">
                      Generate
                    </Button>
                  </Card.Footer>
                </Card>

                {/* Recommended tags */}
                <Card variant="default">
                  <Card.Header>
                    <Card.Title className="text-sm">Recommended for you</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <div className="flex flex-wrap gap-1.5">
                      {recommendedTags.map((tag) => (
                        <Chip
                          key={tag}
                          className="cursor-pointer text-xs"
                          color="default"
                          size="sm"
                          variant="secondary"
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </Card.Content>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
