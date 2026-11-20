export const readingAppCaseStudy = {
  title: "inkle",
  subtitle: "Personal Project | Native Android",
  repoHref: "https://github.com/kkau201/ReadingApp",
  repoLabel: "VIEW GITHUB",
  overview:
    "inkle is a native Android reading companion built around a tactile shelf of spines. Search is powered by Google Books, reading progress is logged one sitting at a time, and every finished book earns a stamp toward your annual goal. Accounts use email or Google sign-in, with shelves, profiles, and journal entries synced in Firestore.",
  facts: {
    timeline: "2024 - Present",
    role: "Creator & Android Engineer",
    stack: ["Kotlin", "Jetpack Compose", "Hilt", "Firebase", "Retrofit"],
  },
  challenge:
    "I originally started inkle in 2024 to learn Firebase Auth, Firestore, and REST APIs. Picking it back up now, I redesigned the app to feel like a real bookcase alongside a quiet record of the reading itself: how far through a book I am, what I noted after a sitting, and a stamp for each book finished this year. Local caching keeps the shelf available when the phone is offline, while leaving room to grow into custom book entry and smarter reading recaps.",
  architectureIntro:
    "The dashboard acts as the navigation shell, with screens reading from unified repositories. Auth, shelf data, and sessions live in Firestore, search queries Google Books, and both data sources cache locally so the app stays usable offline.",
  architecture: [
    {
      title: "Dashboard and destinations",
      body: "Four tabs sit in the dashboard: Home, Sessions, Search, and Profile. Compose Destinations owns the stack. Hilt ViewModels expose a UiState for loading, content, and errors.",
    },
    {
      title: "Firebase for the account and the shelf",
      body: "Email and Google sign-in run through Firebase Auth, complete with password resets and email verification prompts. User profiles, saved books, and reading sessions live in per-user Firestore collections—writes persist locally first and sync automatically once reconnected. Account deletion cleanly purges both the Auth user and all associated Firestore records.",
    },
    {
      title: "Google Books, with a cache",
      body: "Search and book details are fetched from the Google Books API via Retrofit, using an API key restricted to the app's package name and signing certificate. Responses are cached so previously opened books still display covers and descriptions offline, falling back to the saved shelf copy if a network request fails.",
    },
    {
      title: "Reactive UI state",
      body: "Changes in Firestore flow straight into the UI—updating a session recalculates shelf progress bars in real time, and marking a book finished automatically stamps Blot onto the profile card.",
    },
  ],
  bento: [
    {
      title: "Colour",
      body: "Two core tokens, paper and ink, anchor the interface, inverting between surface and foreground across light and dark mode. Book spines bring warmth in yellow, orange, purple, blue, and green.",
      tone: "oatmeal" as const,
      layout: "span6" as const,
      column: "left" as const,
      swatches: [
        { name: "Paper", hex: "#F7F4EF" },
        { name: "Ink", hex: "#1C1917" },
        { name: "Yellow", hex: "#F9C859" },
        { name: "Blue", hex: "#6698CC" },
        { name: "Purple", hex: "#D9ADD1" },
        { name: "Orange", hex: "#F08C21" },
        { name: "Green", hex: "#62823F" },
      ],
    },
    {
      title: "App icon",
      body: "Blot as a lowercase i. Ink on paper for light, paper on ink for dark.",
      tone: "lime" as const,
      layout: "span5short" as const,
      column: "right" as const,
      icons: [
        {
          src: "/img/projects/reading-app/icon-light.png",
          alt: "inkle app icon, dark character on a light squircle",
          label: "Light",
        },
        {
          src: "/img/projects/reading-app/icon-dark.png",
          alt: "inkle app icon, light character on a dark squircle",
          label: "Dark",
        },
      ],
    },
    {
      title: "Stamp card",
      body: "A green card on your profile tracks your annual reading goal with a star for each book. Finishing a book stamps Blot onto a star. Flip the card to edit your goal or add an optional reward.",
      tone: "guava" as const,
      layout: "span6" as const,
      column: "right" as const,
      video: {
        src: "/img/projects/reading-app/stamp-card.mp4",
        poster: "/img/projects/reading-app/stamp-empty.png",
        alt: "inkle stamp card filling from one to six Blot stamps",
        hoverable: false
      },
    },
    {
      title: "Type",
      body: "Editorial serifs lead the hierarchy: Nanum Myeongjo for titles and Arapey Italic for authors.\n\nLato grounds the UI across body text, actions, and journal logs, while the inkle wordmark is custom-lettered.",
      tone: "blueberry" as const,
      layout: "span6" as const,
      column: "left" as const,
      grow: true,
      specimens: [
        { sample: "Library", label: "Nanum Myeongjo / headline", face: "nanum" as const },
        {
          sample: "by Aldous Huxley",
          label: "Arapey italic / author",
          size: "body" as const,
          face: "arapey" as const,
        },
      ],
    },
    {
      title: "Sessions",
      body: "Active reads sit in a horizontal carousel, with progress driven by your journal logs. Record a reading session by pages, current page, or percentage, or mark the book finished when you reach the end.",
      tone: "tangerine" as const,
      column: "left" as const,
      layout: "wide" as const,
      image: {
        src: "/img/projects/reading-app/session.png",
        alt: "inkle sessions for Brave New World, 35 of 288 pages, with a journal entry",
        rotate: 0,
        size: "sm" as const,
        align: "beside" as const,
        fit: "panel" as const,
        hoverable: false,
      },
    },
    {
      title: "Search",
      body: "Search by title or author via Google Books. Each result includes a color-coded spine tab to keep the list scannable, while an empty search bar invites you to browse the stacks.",
      tone: "oatmeal" as const,
      column: "left" as const,
      layout: "span5short" as const,
      image: {
        src: "/img/projects/reading-app/search.png",
        alt: "inkle search results for Piranesi",
        size: "sm" as const,
        align: "beside" as const,
        fit: "panel" as const,
        hoverable: false,
      },
    },
    {
      title: "Your shelf",
      body: "Your home screen works like a real bookcase. Filter by All, Want to read, Reading, or Finished. Active reads turn face-out to show their cover, while the rest stand upright by their spines.",
      tone: "lime" as const,
      layout: "span3" as const,
      column: "right" as const,
      grow: true,
      video: {
        src: "/img/projects/reading-app/home-library.mp4",
        poster: "/img/projects/reading-app/home.png",
        alt: "inkle home library with a shelf of spines and Brave New World pulled forward",
        size: "sm" as const,
        hoverable: false,
      },
    },
    // {
    //   title: "Book detail",
    //   body: "Pulls cover art, author, page count, and categories from Google Books. Books on your shelf display reading status and session progress, while overflow category tags collapse into a clean count pill.",
    //   tone: "strawberry" as const,
    //   column: "right" as const,
    //   layout: "wide" as const,
    //   image: {
    //     src: "/img/projects/reading-app/details.png",
    //     alt: "inkle book detail for Brave New World with reading progress at 12 percent",
    //     rotate: -4,
    //   },
    // },
    // {
    //   title: "Log a sitting",
    //   body: "Log progress by pages read, current page, or percentage. Sessions default to today with space for an optional note, and reaching the final page prompts you to mark the book finished.",
    //   tone: "blueberry" as const,
    //   layout: "span5" as const,
    //   image: {
    //     src: "/img/projects/reading-app/session-log.png",
    //     alt: "inkle dialog to log a session by pages read, current page, or percent",
    //     rotate: 4,
    //   },
    // },
  ],
  nextIntro:
    "The next three features on my roadmap:",
  nextSteps: [
    {
      title: "Manually add books",
      body: "Let readers add their own books when a title is missing from Google Books, with the option to scan a cover or barcode using Google ML Kit.",
    },
    {
      title: "Progress-Aware Recaps",
      body: "Surface a subtle \"Catch me up to page X\" prompt on the Sessions screen when a book has been sitting unread for a while. Strict page and percentage cutoffs keep the short AI summary completely spoiler-free.",
    },
    {
      title: "Monthly/yearly reading recaps",
      body: "Combine local reading stats, finished books, and session notes into swipeable, shareable recap cards. Structured AI output highlights margin notes, captures reading moods, and tracks progress toward the annual stamp card reward.",
    },
  ],
  next: {
    label: "NEXT PROJECT: Pīkau",
    href: "/projects/pikau",
  },
};
