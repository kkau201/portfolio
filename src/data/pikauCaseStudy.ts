export const pikauCaseStudy = {
  title: "Pīkau",
  subtitle: "Personal Project | Native Android",
  repoHref: "https://github.com/kkau201/pikau-android",
  repoLabel: "VIEW GITHUB",
  overview:
    "Pīkau is a native Android app for planning tramping trips and managing gear. The name is te reo Māori for a pack carried on the back.\n\nI am building it as a production-shaped codebase: modular Gradle, Jetpack Compose, Hilt, Room, and Navigation 3. Home, Gear, Trips, and Me are in the app. Trip and gear detail, create flows, and the remaining Me destinations are still to build.",
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
      body: "A fixed Compose palette (forest, olive, light green). Dynamic colour is disabled so brand stays consistent in light and dark.",
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
      body: "Afacad Flux for headlines and body. Compact labels use the platform default typeface.",
      tone: "lime" as const,
      layout: "span6" as const,
      specimens: [
        { sample: "Pīkau", label: "Afacad Flux / headline" },
        { sample: "Pack light. Walk far.", label: "Afacad Flux / body", size: "body" as const },
      ],
    },
    {
      title: "Gear library",
      body: "Search and filter equipment by category. Each item stores weight in grams so a trip pack can be totalled from the library.",
      tone: "lime" as const,
      layout: "tall" as const,
      image: {
        src: "/img/projects/pikau/gear-list.png",
        alt: "Pīkau gear library with search, chips, and weighted items",
        rotate: -7,
      },
    },
    {
      title: "Trips",
      body: "Upcoming and past trips, split by start date. Open a trip for overview, packing, food, and notes.",
      tone: "tangerine" as const,
      layout: "wide" as const,
      image: {
        src: "/img/projects/pikau/trips-list.png",
        alt: "Pīkau trips tab with upcoming walks",
        rotate: 0,
      },
    },
    {
      title: "Me",
      body: "Profile, trips completed, distance, and average pack weight, plus settings, notifications, emergency contact, and support.",
      tone: "guava" as const,
      layout: "span4" as const,
      image: {
        src: "/img/projects/pikau/me.png",
        alt: "Pīkau Me tab with stats and settings",
        rotate: 6,
      },
    },
    {
      title: "Offline first",
      body: "Trips, gear, packing lists, food, and notes live on the device so the companion still works without a signal.",
      tone: "blueberry" as const,
      layout: "span3" as const,
      chips: ["Trips", "Gear", "Packing", "Food", "Notes"],
    },
    {
      title: "Home",
      body: "The next trip up front, with a short to-do list for what still needs packing or checking before you leave.",
      tone: "strawberry" as const,
      layout: "wide" as const,
      image: {
        src: "/img/projects/pikau/home.png",
        alt: "Pīkau home tab design with an upcoming trip",
        rotate: 0,
      },
    },
    {
      title: "Trip detail",
      body: "Location, dates, difficulty, packing progress, food, notes, and a forecast in one place for the walk ahead.",
      tone: "oatmeal" as const,
      layout: "span5" as const,
      image: {
        src: "/img/projects/pikau/trip-detail.png",
        alt: "Pīkau trip detail design with map and weather",
        rotate: 7,
      },
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
      body: "Four tabs sit in a pager, and each tab keeps its own history. Tapping a trip or a gear item is meant to open a full screen and hide the tab bar. That screen is designed, not built yet.",
    },
    {
      title: "Shared Compose UI",
      body: "Theme, type, buttons, chips, inputs, list rows, and loading and error states live in core/ui. Screens collect a UiState from Hilt ViewModels: loading, content, or a full-screen error with retry.",
    },
  ],
  qualityIntro:
    "The current value of the project is a maintainable Android structure with coverage on the layers that already exist, not a finished packing product.",
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
    "You can already browse Home, Gear, Trips, and Me. The next screens are the ones that open from those lists.",
  nextSteps: [
    {
      title: "Trip and gear detail",
      body: "Tapping a trip or a gear item hides the tab bar, but the screen that should open is not built yet. For a trip, that screen is the overview, packing list, food, and notes.",
    },
    {
      title: "Adding a trip or gear item",
      body: "Lists work. There is not yet a form to create a trip or a piece of gear. Those forms will use the fields already stored on the device.",
    },
    {
      title: "Profile settings",
      body: "The Me tab already shows settings, notifications, emergency contact, privacy, and support. Tapping those rows does not open a screen yet.",
    },
  ],
  next: {
    label: "VIEW ALL PROJECTS",
    href: "/projects",
  },
};
