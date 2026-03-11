import type {Meta} from "@storybook/react";

import React from "react";

import {CreateAccountScreen} from "./demos/screens/create-account-screen";
import {DashboardScreen} from "./demos/screens/dashboard-screen";
import {NavigationSidebar} from "./demos/screens/navigation-sidebar";

/**
 * Screen compositions from the Figma "Screens" canvas
 * (figma node 6408:187914 — version 2329655686589982933, 2026-03-11)
 *
 * These stories demonstrate how HeroUI components combine to form complete
 * application screens, matching the reference designs in the Figma Kit.
 *
 * Two sections are covered:
 *  - Molecules: reusable navigation sidebar, card hover states, app logo
 *  - basic flow: full 1440×1024 screens (create account, loading, onboarding, dashboard)
 */

const meta: Meta = {
  title: "Screens",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Full-screen compositions from the [YT] HeroUI Figma Kit (Screens canvas). Each story maps to a Figma frame and shows HeroUI components in real-world layout contexts.",
      },
    },
  },
};

export default meta;

// ─── Molecules ──────────────────────────────────────────────────────────────

/**
 * Navigation/Default — Figma node 6410:196664
 *
 * The 256px sidebar navigation molecule used across all dashboard screens.
 * Contains logo, grouped nav links, support link, upgrade CTA, and user avatar.
 * Components: Button, Avatar, Separator (+ Tailwind layout utilities).
 */
export const NavigationMolecule = () => (
  <div className="flex h-screen bg-background p-6">
    <NavigationSidebar />
  </div>
);

NavigationMolecule.storyName = "Molecules / Navigation Sidebar";
NavigationMolecule.parameters = {
  docs: {
    description: {
      story:
        "Sidebar navigation molecule (Figma 6410:196664). 256px wide, contains the Yours Truly logo, Account/Chat/Shop nav groups with active-state highlighting, support link, upgrade button, and user avatar footer.",
    },
  },
};

// ─── basic flow screens ──────────────────────────────────────────────────────

/**
 * create account_login — Figma node 6408:189555
 *
 * Two-panel authentication screen:
 * - Left: brand panel (Yours Truly, orange gradient, social proof)
 * - Right: form with OAuth buttons, inputs, privacy checkbox, sign-up button
 * Components: Button, Input, TextField, Label, Checkbox, Separator, Avatar.
 */
export const CreateAccount = () => <CreateAccountScreen />;

CreateAccount.storyName = "basic flow / Create Account";
CreateAccount.parameters = {
  docs: {
    description: {
      story:
        "Authentication screen (Figma 6408:189555). Two-panel layout: brand marketing panel on the left with orange gradient + social proof, and a create-account form on the right. Interactive: Sign Up button enables only after accepting the Privacy Policy checkbox.",
    },
  },
};

/**
 * V2_gradient (Dashboard) — Figma node 6440:18958
 *
 * Main application dashboard for the 'Yours Truly' app:
 * - Navigation sidebar (256px)
 * - Top bar: search input + mood/XP chips
 * - Popular Recommendations section (horizontal card scroll)
 * - Knowledge tabs (My knowledge / Shared with me)
 * - Category chip filters
 * - Knowledge card grid
 * - Right panel: AI writing prompt + recommended tags
 * Components: NavigationSidebar, Input, Chip, Button, Card, Tabs, Avatar, Separator.
 */
export const Dashboard = () => <DashboardScreen />;

Dashboard.storyName = "basic flow / Dashboard (V2_gradient)";
Dashboard.parameters = {
  docs: {
    description: {
      story:
        "Main dashboard screen (Figma 6440:18958). Full application layout with sidebar navigation, search bar, mood/XP status chips, recommendations carousel, tabbed knowledge sections with chip category filters, card grid, and AI writing prompt + recommended tags sidebar.",
    },
  },
};
