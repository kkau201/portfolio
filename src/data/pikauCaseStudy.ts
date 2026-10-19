export const pikauCaseStudy = {
  title: "Pīkau",
  subtitle: "Personal Project | Native Android",
  repoHref: "https://github.com/kkau201/pikau-android",
  repoLabel: "VIEW GITHUB",
  overview:
    "A Kotlin and Jetpack Compose tramping companion app, built to keep my Android skills sharp while on a career sabbatical. Named pīkau — te reo Māori for a pack carried on the back — it is a native home for the planning and on-trail habits I rely on in the New Zealand backcountry.",
  facts: {
    timeline: "2026 – Present",
    role: "Creator & Android Engineer",
    stack: ["Kotlin", "Jetpack Compose", "MVVM"],
  },
  challenge:
    "Most tramping tools I used were either paper, a jumble of unrelated apps, or products that assumed constant connectivity. I wanted a single native Android companion that felt at home on the trail: fast, offline-friendly, and designed around how I actually plan and walk trips in Aotearoa. Building it solo on sabbatical also meant choosing a stack I could stand behind in production — Kotlin, Jetpack Compose, and MVVM — without leaning on a cross-platform shortcut.",
  approachIntro:
    "Pīkau is still in active development. The early architecture decisions are the ones I would make on a commercial Android codebase:",
  approach: [
    {
      title: "Native Kotlin & Jetpack Compose",
      body: "The UI is Compose-first so screens, state, and motion stay in one modern toolkit. That keeps the project aligned with the apps I shipped commercially, rather than treating sabbatical work as a throwaway prototype.",
    },
    {
      title: "MVVM as the backbone",
      body: "Feature UI talks to view models, not directly to data sources. That separation makes it realistic to grow offline storage, location, and trail content without collapsing the presentation layer.",
    },
    {
      title: "Designed for the pack, not the desk",
      body: "The product framing is a companion you carry: glanceable in poor weather, useful without a signal, and honest about the difference between planning at home and making decisions on the track.",
    },
  ],
  next: {
    label: "VIEW ALL PROJECTS",
    href: "/projects",
  },
};
