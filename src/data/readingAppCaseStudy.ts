export const readingAppCaseStudy = {
  title: "inkle",
  subtitle: "Personal Project | Native Android",
  repoHref: "https://github.com/kkau201/ReadingApp",
  repoLabel: "VIEW GITHUB",
  overview:
    "inkle is a native Android reading companion. Home is a shelf of spines. Search comes from Google Books. A session is one sitting with the book you are reading, and each book you finish stamps a card for the year. Sign-in is email or Google. The shelf, profile, and journal live in Firestore.",
  facts: {
    timeline: "2024 - Present",
    role: "Creator & Android Engineer",
    stack: ["Kotlin", "Jetpack Compose", "Hilt", "Firebase", "Retrofit"],
  },
  challenge:
    "I wanted a shelf that feels like a bookcase, and a record of the reading itself: how far through a book I am, what I noted after a sitting, and a stamp for each book finished this year. That meant Compose UI, Firebase Auth and Firestore, and the Google Books API. It also meant the shelf still opening from the copy on the device when the phone is offline.",
  architectureIntro:
    "The dashboard is the shell. Screens talk to repositories. Auth, the shelf, and sessions live in Firebase. Search goes out to Google Books, and both stores keep a cache for when the connection drops.",
  architecture: [
    {
      title: "Dashboard and destinations",
      body: "Four tabs sit in the dashboard: Home, Sessions, Search, and Profile. Compose Destinations owns the stack. Hilt ViewModels expose a UiState for loading, content, and errors.",
    },
    {
      title: "Firebase for the account and the shelf",
      body: "Email and Google sign-in use Firebase Auth, with password reset and an email verification reminder. Users, saved books, and sessions are Firestore collections for the signed-in user. A write is stored on the device first and syncs when the connection returns. Delete account removes the Firebase user and the books and sessions stored against them.",
    },
    {
      title: "Google Books, with a cache",
      body: "Search and book detail come from the Books API through Retrofit. The key is restricted to this package, and each request sends the package name and signing certificate. Responses are cached, so a book already opened still shows its cover and description offline. If that call fails, detail falls back to the copy saved on the shelf.",
    },
    {
      title: "A shelf, a journal, a stamp card",
      body: "Home draws spines, with the book in progress pulled forward. Sessions is a carousel of books marked reading, a progress line from the journal, and a place to log a sitting or mark the book finished. The profile holds a green stamp card for the year. It flips over to change the goal and an optional reward.",
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
      layout: "span3" as const,
      column: "left" as const,
      layout: "wide" as const,
      image: {
        src: "/img/projects/reading-app/session.png",
        alt: "inkle sessions for Brave New World, 35 of 288 pages, with a journal entry",
        rotate: 0,
        size: "sm",
        align: "beside",
        fit: "panel" as const,
        hoverable: false
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
        size: "sm",
        align: "beside",
        fit: "panel" as const,
        hoverable: false
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
        size: "sm",
        hoverable: false
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
    "The  next three bigger features I plan to work towards:",
  nextSteps: [
    {
      title: "Manually add books",
      body: "Allow user to add their own books, especially if they are unable to find it via the Google Books API. An add-on would be to use Google ML Kit to scan a book cover or barcode."
    },
    {
      title: "Progress-Aware Recaps",
      body: "Surface a subtle \"Catch me up to page X\" prompt on the Sessions screen when a currently reading book hasn't been logged in a while. Use an AI prompt with strict page and percentage cutoff constraints to generate a short summary."
    },
    {
      title: "Monthly/yearly reading recaps",
      body: "Aggregate reading stats, finished books, and session notes locally to generate swipeable, shareable editorial recap cards. Use structured AI output to synthesize reading moods, highlight notes, and summarize progress toward the annual stamp card goal and reward."
    },
  ],
  next: {
    label: "NEXT PROJECT: Pīkau",
    href: "/projects/pikau",
  },
};
