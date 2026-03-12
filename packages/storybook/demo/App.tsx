"use client";

import React from "react";

import {CreateAccountScreen} from "./screens/create-account-screen";
import {DashboardScreen} from "./screens/dashboard-screen";
import {LoadingScreen} from "./screens/loading-screen";
import {OnboardingScreen} from "./screens/onboarding-screen";

// ─── Flow state machine ───────────────────────────────────────────────────────

type Screen = "create-account" | "loading" | "onboarding" | "dashboard";

export function App() {
  const [screen, setScreen] = React.useState<Screen>("create-account");

  // Dashboard handles its own background; other screens use bg-page gradient
  const isDashboard = screen === "dashboard";

  return (
    <div className={`h-screen w-full antialiased${isDashboard ? "p-3" : "bg-page"}`}>
      {screen === "create-account" && (
        <CreateAccountScreen onSuccess={() => setScreen("loading")} />
      )}
      {screen === "loading" && <LoadingScreen onComplete={() => setScreen("onboarding")} />}
      {screen === "onboarding" && <OnboardingScreen onStart={() => setScreen("dashboard")} />}
      {screen === "dashboard" && <DashboardScreen />}
    </div>
  );
}
