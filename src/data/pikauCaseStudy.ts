import { title } from "process"

export const pikauCaseStudy = {
  title: "Pīkau",
  subtitle: "Personal Project | Native Android",
  repoHref: "https://github.com/kkau201/pikau-android",
  repoLabel: "VIEW GITHUB",
  overview:
    "Pīkau is a native Android app for planning tramping trips and managing gear. The name is te reo Māori for a pack carried on the back.\n\nI am building it as a production-shaped codebase: modular Gradle, Jetpack Compose, Hilt, Room, and Navigation 3. The foundations for the four main destinations (Home, Gear, Trips, and Me) have been built, with detail screens, creation flows, and settings sub-screens next in line.",
  facts: {
    timeline: "2026 – Present",
    role: "Creator & Android Engineer",
    stack: ["Kotlin", "Jetpack Compose", "Hilt", "Room", "Navigation 3"],
  },
  challenge:
    "Trip planning on the trail still splits across paper, notes apps, and tools that need a signal. I wanted a single offline-first companion that matches how I actually pack and walk in Aotearoa, built to the same standard as a commercial Android app: isolated features, a real persistence layer, shared UI, and tests, rather than a single-module prototype.",
  bentoIntro:
    "A four-tab companion for the pack: home at a glance, a gear library, trip lists, and a profile, with packing, food, and notes kept on device.",
  bento: [
    {
      title: "Colour",
      body: "A fixed Compose palette of forest green, olive, and light sage. Dynamic Material colour is disabled so the outdoor brand palette stays consistent across light and dark mode.",
      tone: "oatmeal" as const,
      layout: "span6" as const,
      swatches: [
        { name: "Forest green", hex: "#2C5E05" },
        { name: "Olive green", hex: "#A7AA27" },
        { name: "Light green", hex: "#E2E3C6" },
      ],
    },
    {
      title: "Type",
      body: "Afacad Flux sets both headlines and body copy, paired with the platform default typeface for compact labels.",
      tone: "lime" as const,
      layout: "span6" as const,
      specimens: [
        { sample: "Pīkau", label: "Afacad Flux / headline", face: "afacad" as const },
        {
          sample: "Pack light. Walk far.",
          label: "Afacad Flux / body",
          size: "body" as const,
          face: "afacad" as const,
        },
      ],
    },
    {
      title: "Home",
      body: "Surfaces your next upcoming trip front and centre, paired with a quick to-do checklist for final packing tasks before you head out.",
      tone: "tangerine" as const,
      layout: "tall" as const,
      image: {
        src: "/img/projects/pikau/home.png",
        alt: "Upcoming trip and a short checklist before leaving",
        fit: "panel" as const,
        size: "full" as const,
        hoverable: false,
      },
    },
    {
      title: "Gear library",
      body: "Search and filter equipment by category. Each item stores its weight in grams so a trip pack can be totalled straight from your library.",
      tone: "guava" as const,
      layout: "wide" as const,
      image: {
        src: "/img/projects/pikau/gear-panel.png",
        alt: "Gear library with search, category chips, and item weights",
        fit: "panel" as const,
        size: "full" as const,
        hoverable: false,
      },
    },
    {
      title: "Trip detail",
      body: "Brings location, dates, difficulty, packing progress, food, trail notes, and a local weather forecast together in one screen for the walk ahead.",
      tone: "oatmeal" as const,
      layout: "span4" as const,
      video: {
        src: "/img/projects/pikau/trip-detail.mp4",
        poster: "/img/projects/pikau/trip-detail-poster.png",
        alt: "Trip detail with dates, a three-day forecast, and packing progress filling to 12 of 20",
        size: "full" as const,
        hoverable: false,
      },
    },
    {
      title: "Offline first",
      body: "Trips, gear, packing lists, food, and notes are stored locally on the device so the companion works reliably without a mobile signal.",
      tone: "blueberry" as const,
      layout: "span3" as const,
      chips: ["Trips", "Gear", "Packing", "Food", "Notes"],
    },
  ],
  architectureIntro:
    "Features depend on repositories, not on each other. The app module owns navigation. Shared Android setup lives in convention plugins so each module stays small.",
  architecture: [
    {
      title: "Modular Gradle",
      body: "The app is split into Gradle modules so home, trips, gear, and profile stay independent. The app module is only the shell: it applies Hilt and owns navigation. Each feature owns its screens. Shared UI, repositories, Room, models, and test helpers live in core.",
    },
    {
      title: "Schema before screens",
      body: "A trip has a name, location, dates, categories, and difficulty. Gear has a name, category, weight in grams, and suggested trip types. Categories are seeded on first launch. Packing list items, food items, and trip notes are in the same schema.",
    },
    {
      title: "Navigation 3",
      body: "Four tabs sit in a pager, and each tab preserves its own back stack. Tapping a trip or gear item is wired to hide the bottom bar and push a full-screen detail route, ready for the detail destinations currently in design.",
    },
    {
      title: "Shared Compose UI",
      body: "Theme, type, buttons, chips, inputs, list rows, and loading and error states live in core/ui. Screens collect a UiState from Hilt ViewModels: loading, content, or a full-screen error with retry.",
    },
  ],
  qualityIntro:
    "Rather than rushing out screens, I prioritized a maintainable Android architecture with solid test coverage across the core layers already in place.",
  quality: [
    {
      title: "Tests on the logic",
      body: "ViewModels are tested with Turbine. Room repositories have their own tests, with fixtures for entities and fakes. Compose UI tests cover the shared button, chip, and tabs components.",
    },
    {
      title: "CI on main",
      body: "GitHub Actions runs ./gradlew build and ./gradlew test on Ubuntu with JDK 17 for every push and pull request to main.",
    },
    {
      title: "Screenshot tests, local only",
      body: "Roborazzi goldens live under core/ui. They are not compared on CI because they were recorded on macOS and Ubuntu renders edges differently. Record and verify stay on one machine.",
    },
  ],
  nextIntro:
    "With the four core browse tabs and local database schema in place, the next milestones focus on detail views and data entry:",
  nextSteps: [
    {
      title: "Trip and gear detail",
      body: "Build out the full-screen detail destinations triggered from the Trips and Gear lists, bringing together trip overviews, packing checklists, food plans, and trail notes.",
    },
    {
      title: "Adding a trip or gear item",
      body: "Connect creation and editing forms directly to the existing Room schema so users can add new trips, log gear weights, and build packing lists on device.",
    },
    {
      title: "Profile settings",
      body: "Implement the sub-screens under the Me tab for notification preferences, emergency contact details, privacy controls, and app support.",
    },
  ],
  next: {
    label: "VIEW ALL PROJECTS",
    href: "/projects",
  },
};
