import type {Meta} from "@storybook/react";

import React from "react";

import {CreateAccountScreen} from "./demos/screens/create-account-screen";
import {DashboardScreen} from "./demos/screens/dashboard-screen";
import {LoadingScreen} from "./demos/screens/loading-screen";
import {NavigationSidebar} from "./demos/screens/navigation-sidebar";
import {OnboardingScreen} from "./demos/screens/onboarding-screen";

/**
 * Screen compositions from the Figma "Screens" canvas — basic flow section
 * (figma node 6441:76012 — version 2329655686589982933, 2026-03-11)
 *
 * Four screens form the complete user onboarding journey:
 *  1. Create Account  — two-panel sign-up form
 *  2. Loading         — brand splash shown while the account is provisioned
 *  3. New Onboarding  — welcome screen with feature highlights + Get Started CTA
 *  4. Dashboard       — main app (V2_gradient)
 *
 * The "Interactive Flow" story wires all four together so you can step through
 * the complete journey inside Storybook.
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

// ─── Molecules ───────────────────────────────────────────────────────────────

/**
 * Navigation/Default — Figma node 6410:196664
 *
 * The 256 px sidebar molecule used across all dashboard screens.
 * Interactive: clicking a nav item highlights it with an accent tint.
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
        "Sidebar navigation molecule (Figma 6410:196664). 256 px wide, contains the Yours Truly logo, Account/Chat/Shop nav groups with active-state highlighting, support link, upgrade button, and user avatar footer.",
    },
  },
};

// ─── Standalone screens ───────────────────────────────────────────────────────

/**
 * create account_login — Figma node 6408:189555
 *
 * Two-panel authentication screen. The Sign Up button is gated behind the
 * Privacy Policy checkbox.
 */
export const CreateAccount = () => <CreateAccountScreen />;

CreateAccount.storyName = "basic flow / 1 · Create Account";
CreateAccount.parameters = {
  docs: {
    description: {
      story:
        "Authentication screen (Figma 6408:189555). Left brand panel + right form. Sign Up enables only after the Privacy Policy checkbox is checked.",
    },
  },
};

/**
 * Loading — Figma node 6408:189673
 *
 * Full-bleed amber brand splash shown while the account is provisioned.
 * Driven by a 2.5 s progress bar; in the standalone story onComplete is a no-op.
 */
export const Loading = () => <LoadingScreen />;

Loading.storyName = "basic flow / 2 · Loading";
Loading.parameters = {
  docs: {
    description: {
      story:
        "Brand loading splash (Figma 6408:189673). Full amber canvas with logo, headline, animated progress bar, social-proof avatars, and a spinner. Auto-completes in ≈ 2.5 s.",
    },
  },
};

/**
 * new onboarding — Figma node 6408:189720
 *
 * Centred welcome screen with feature highlights and a Get Started CTA.
 */
export const NewOnboarding = () => <OnboardingScreen />;

NewOnboarding.storyName = "basic flow / 3 · New Onboarding";
NewOnboarding.parameters = {
  docs: {
    description: {
      story:
        "Welcome onboarding screen (Figma 6408:189720). Centred Yours Truly logo, welcome copy, three feature-highlight cards, step indicators, and a Get Started button.",
    },
  },
};

/**
 * V2_gradient — Figma node 6440:18958
 *
 * Full application dashboard: sidebar + search + recommendations + knowledge grid.
 */
export const Dashboard = () => <DashboardScreen />;

Dashboard.storyName = "basic flow / 4 · Dashboard (V2_gradient)";
Dashboard.parameters = {
  docs: {
    description: {
      story:
        "Main dashboard screen (Figma 6440:18958). Sidebar navigation, search bar, mood/XP chips, recommendations carousel, tabbed knowledge sections with chip category filters, card grid, and AI writing prompt + recommended tags sidebar.",
    },
  },
};

// ─── Interactive Flow ─────────────────────────────────────────────────────────

type FlowStep = "create-account" | "loading" | "onboarding" | "dashboard";

const STEP_LABELS: Record<FlowStep, string> = {
  "create-account": "1 · Create Account",
  loading: "2 · Loading",
  onboarding: "3 · Onboarding",
  dashboard: "4 · Dashboard",
};

const STEP_ORDER: FlowStep[] = ["create-account", "loading", "onboarding", "dashboard"];

/**
 * The full onboarding journey wired together as a single interactive story.
 *
 * Navigation:
 * - Create Account  → submit form (requires Privacy Policy ✓) → Loading
 * - Loading         → auto-advances after ≈ 2.5 s            → Onboarding
 * - Onboarding      → click "Get Started"                     → Dashboard
 * - Dashboard       → use the step indicator below to restart
 */
function BasicFlowWrapper() {
  const [step, setStep] = React.useState<FlowStep>("create-account");

  const goTo = (s: FlowStep) => setStep(s);

  return (
    <div className="relative flex h-screen w-full flex-col">
      {/* Screen */}
      <div className="flex-1 overflow-hidden">
        {step === "create-account" && (
          <CreateAccountScreen onSuccess={() => goTo("loading")} />
        )}
        {step === "loading" && (
          <LoadingScreen onComplete={() => goTo("onboarding")} />
        )}
        {step === "onboarding" && (
          <OnboardingScreen onStart={() => goTo("dashboard")} />
        )}
        {step === "dashboard" && <DashboardScreen />}
      </div>

      {/* Step navigator (Storybook-only chrome — not part of the Figma design) */}
      <nav
        aria-label="Flow step navigator"
        className="flex shrink-0 items-center justify-center gap-2 border-t border-foreground/5 bg-background px-4 py-2"
      >
        {STEP_ORDER.map((s, i) => (
          <button
            key={s}
            aria-current={step === s ? "step" : undefined}
            className={[
              "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors",
              step === s
                ? "bg-accent text-accent-foreground"
                : "text-muted hover:bg-surface-secondary hover:text-foreground",
            ].join(" ")}
            onClick={() => goTo(s)}
          >
            {STEP_LABELS[s]}
          </button>
        ))}
      </nav>
    </div>
  );
}

export const InteractiveFlow = () => <BasicFlowWrapper />;

InteractiveFlow.storyName = "basic flow / ▶ Interactive Flow";
InteractiveFlow.parameters = {
  docs: {
    description: {
      story:
        "All four screens wired into a complete onboarding journey. Submit the sign-up form to trigger the Loading splash → auto-advance to Onboarding → click Get Started to reach the Dashboard. Use the step bar at the bottom to jump between screens.",
    },
  },
};
