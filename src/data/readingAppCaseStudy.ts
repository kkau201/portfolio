export const readingAppCaseStudy = {
  title: "Reading App",
  subtitle: "Personal Project | Native Android",
  repoHref: "https://github.com/kkau201/ReadingApp",
  repoLabel: "VIEW GITHUB",
  overview:
    "A native Android reading companion with a home library shelf, Google Books search, and a yearly stamp card for books finished. Sign-in uses Firebase Auth. The shelf, profile, and reading sessions live in Firestore.",
  facts: {
    timeline: "2024 - Present",
    role: "Creator & Android Engineer",
    stack: ["Kotlin", "Jetpack Compose", "Hilt", "Firebase", "Retrofit"],
  },
  challenge:
    "I wanted to learn Firebase Auth and Firestore by shipping a real Android app, not a sample. The product goal was a shelf that feels like a bookcase: search Google Books, save a title, mark want to read, reading, or finished, log sittings, and watch a yearly stamp card fill in. That meant Compose UI, a restricted Books API key, and a signed-in cloud store for users, books, and sessions.",
  architectureIntro:
    "The dashboard is the shell. Screens talk to repositories. Auth, the shelf, and sessions live in Firebase. Search goes out to Google Books.",
  architecture: [
    {
      title: "Dashboard and destinations",
      body: "Four tabs sit in the dashboard: Home, Sessions, Search, and Profile. Compose Destinations owns the stack. Hilt ViewModels expose a UiState for loading, content, and errors.",
    },
    {
      title: "Firebase for the shelf",
      body: "Email sign-in uses Firebase Auth. Users, saved books, and reading sessions are Firestore collections, queried by the signed-in user. Saving, status, notes, ratings, and session logs all write through FireRepository.",
    },
    {
      title: "Google Books search",
      body: "Search and details come from the Google Books API through Retrofit. The key is restricted to this Android package. Each request sends the app package and signing certificate so Google will accept it.",
    },
    {
      title: "A shelf, not a list",
      body: "Home draws spines on a shelf, with the book you are reading pulled forward as a cover. Status chips filter the case. The currently reading title stays the tall one on the row.",
    },
  ],
  bentoIntro:
    "Paper, ink, and cloth colours. A serif library title. Search, a shelf, book detail, and a stamp card for the year.",
  bento: [
    {
      title: "Colour",
      body: "Paper and ink for the library. Yellow, orange, pink, purple, blue, and green for spines, the stamp card, and the tab bar colour you pick on your profile.",
      tone: "oatmeal" as const,
      layout: "span6" as const,
      swatches: [
        { name: "Paper", hex: "#F7F4EF" },
        { name: "Ink", hex: "#1C1917" },
        { name: "Yellow", hex: "#F9C859" },
        { name: "Pink", hex: "#F87EA3" },
        { name: "Purple", hex: "#CA97C3" },
        { name: "Green", hex: "#267F53" },
      ],
    },
    {
      title: "Type",
      body: "Nanum Myeongjo for library titles. Arapey italic for authors and secondary lines. Lato for body and controls.",
      tone: "lime" as const,
      layout: "span6" as const,
      specimens: [
        { sample: "Library", label: "Nanum Myeongjo / headline" },
        { sample: "Aldous Huxley", label: "Arapey italic / author", size: "body" as const },
      ],
    },
    {
      title: "Your shelf",
      body: "Home is a bookcase. Filter by all, want to read, reading, or finished. The book in progress sits forward as a cover. The rest stand as spines.",
      tone: "lime" as const,
      layout: "tall" as const,
      image: {
        src: "/img/projects/reading-app/home.png",
        alt: "Reading App home library with a shelf of spines and Brave New World pulled forward",
        rotate: -7,
        size: "lg",
      },
    },
    {
      title: "Search",
      body: "Type a title or author. Results come from Google Books, with a colour tick on the left so the list stays scannable.",
      tone: "tangerine" as const,
      layout: "wide" as const,
      image: {
        src: "/img/projects/reading-app/search.png",
        alt: "Reading App search for Catch-22 with Google Books results",
        rotate: 0,
      },
    },
    {
      title: "Book detail",
      body: "Cover, author, page count, and categories from Google Books. Once it is on your shelf you can change status, rate it, or remove it.",
      tone: "guava" as const,
      layout: "wide" as const,
      image: {
        src: "/img/projects/reading-app/details.png",
        alt: "Reading App book detail for Brave New World with shelf status and rating",
        rotate: 6,
      },
    },
    {
      title: "Profile",
      body: "Name, bio, avatar, and tab colour. Counts for want to read, reading, and finished, plus what is on the nightstand now.",
      tone: "strawberry" as const,
      layout: "wide" as const,
    },
    {
      title: "Stamp card",
      body: "A yearly card on the profile. Each finished book stamps a mascot. Set how many books you want before the year ends.",
      tone: "oatmeal" as const,
      layout: "span5" as const,
      image: {
        src: "/img/projects/reading-app/stamp.png",
        alt: "Reading App yearly stamp card with three mascot stamps filled of eight",
        fit: "card",
      },
    },
    {
      title: "Sessions",
      body: "A sitting is pages plus an optional note. Log it against a book marked reading. The journal is stored in Firestore with the rest of the shelf.",
      tone: "lime" as const,
      layout: "span5" as const,
      chips: ["Pages", "Date", "Note", "Firestore"],
    },
    {
      title: "Update a book",
      body: "Move a title between want to read, reading, and finished. Add a star rating and a short note. Finished dates are optional.",
      tone: "blueberry" as const,
      layout: "wide" as const,
      image: {
        src: "/img/projects/reading-app/update-book.png",
        alt: "Reading App update book screen with status, rating, and notes",
        rotate: 5,
      },
    },
  ],
  nextIntro:
    "The shelf, search, sessions, and stamp card are in the app. Account and profile polish is still to build.",
  nextSteps: [
    {
      title: "Google sign-in",
      body: "Email and password work today. Google sign-in is next so a reader can enter with the account they already use.",
    },
    {
      title: "Delete account",
      body: "Log out is in the profile. There is not yet a flow to delete the Firebase user and the books and sessions stored against them.",
    },
    {
      title: "Edit profile polish",
      body: "Avatar, colour, name, bio, and yearly goal already save. The remaining work is making that screen feel as finished as the shelf.",
    },
  ],
  next: {
    label: "NEXT PROJECT: Pīkau",
    href: "/projects/pikau",
  },
};
