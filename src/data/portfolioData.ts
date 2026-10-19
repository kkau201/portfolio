import type {
  AboutContent,
  ArchiveProject,
  ContactContent,
  FeaturedProject,
  HeroContent,
  NavLink,
  Role,
  SiteMeta,
  SocialLink,
} from "@/types/portfolio";

export const siteMeta: SiteMeta = {
  title: "Kayla Kautai — Software Engineer",
  description:
    "Software Engineer specialising in Android development with 3+ years of commercial experience building native Kotlin apps.",
  shortName: "Kayla.",
  copyright: "©2026 Kayla Kautai. All rights reserved.",
};

export const navLinks: NavLink[] = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/kayla-kautai/",
    external: true,
  },
  {
    label: "GITHUB",
    href: "https://github.com/kkau201",
    external: true,
  },
  {
    label: "EMAIL",
    href: "mailto:kaylak106@gmail.com",
  },
];

export const hero: HeroContent = {
  greeting: "Kia ora (hello), I'm",
  name: "Kayla Kautai",
  role: "Software Engineer",
  paragraphs: [
    "With 3+ years of commercial experience building native Android apps with Jetpack Compose and MVVM architecture for media streaming, healthcare, government and utility clients, reaching 2M+ downloads.",
    "Currently on sabbatical and enthusiastic to find my next Android role. Available to start immediately, and open to relocating.",
  ],
  avatar: {
    src: "/img/avatar.svg",
    alt: "Illustrated portrait of Kayla Kautai",
  },
  badges: [
    { file: "ux.svg", alt: "UI/UX Design", x: 38, y: 12, w: 16, amp: 6, speed: 0.35, phase: 0.2 },
    { file: "firebase.svg", alt: "Firebase", x: 56, y: 8, w: 18, amp: 7, speed: 0.28, phase: 1.1 },
    { file: "tdd.svg", alt: "Test-driven development", x: 78, y: 16, w: 22, amp: 8, speed: 0.32, phase: 2.0 },
    { file: "jetpack-compose.svg", alt: "Jetpack Compose", x: 15, y: 30, w: 28, amp: 9, speed: 0.22, phase: 0.6 },
    { file: "ci-cd.svg", alt: "CI/CD", x: 86, y: 36, w: 16, amp: 6, speed: 0.4, phase: 1.7 },
    { file: "coroutines.svg", alt: "Coroutines", x: 16, y: 56, w: 18, amp: 7, speed: 0.3, phase: 2.4 },
    { file: "di.svg", alt: "Dependency injection", x: 86, y: 56, w: 17, amp: 7, speed: 0.26, phase: 0.9 },
    { file: "git.svg", alt: "Git", x: 22, y: 76, w: 16, amp: 8, speed: 0.34, phase: 1.4 },
    { file: "android-dev.svg", alt: "Native Android development", x: 48, y: 86, w: 28, amp: 6, speed: 0.24, phase: 2.8 },
    { file: "kmp.svg", alt: "Kotlin Multiplatform", x: 78, y: 80, w: 18, amp: 7, speed: 0.38, phase: 0.4 },
  ],
};

export const about: AboutContent = {
  paragraphs: [
    "Born and raised in Aotearoa (New Zealand), my tech journey began when my dad enrolled me in an intermediate school laptop class. That early spark led to coding websites in high school, where I discovered a passion for blending design with development.",
    "After earning my Software Engineering degree from the University of Auckland, my primary goal was to build products that tangibly improved the lives of everyday New Zealanders. I spent over three years achieving exactly that as an Intermediate Android Developer at Alphero. Having successfully made that local impact, I am now eager to scale my ambitions overseas and build meaningful software for a global audience.",
  ],
  education: [
    {
      dates: "Jan 2018 – Nov 2022",
      title: "Bachelor of Engineering (Honours)",
      institution: "University of Auckland | Auckland, NZ",
      highlights: [
        "Specialisation: Software Engineering",
        "Covered software architecture, system performance, testing and quality assurance, requirements engineering, human-computer interaction, and documentation",
      ],
    },
  ],
  awards: [
    "UoA Final Year Project Machine Learning / AI Winner",
    "UoA Top Achiever Scholarship",
    "MOE Battle of Passchendaele Competition Winner",
    "NZQA Top Art Exhibition Placing for Design Portfolio",
  ],
  hobbies: [
    { label: "Design & photography", src: "/img/hobbies/design-photo.svg", motion: "shutter" },
    { label: "Baking & cooking", src: "/img/hobbies/baking-cooking.svg", motion: "stir" },
    { label: "Strength training", src: "/img/hobbies/strength-training.svg", motion: "rep" },
    { label: "Skateboarding", src: "/img/hobbies/skateboarding.svg", motion: "kickflip" },
    { label: "Crosswords & reading", src: "/img/hobbies/crosswords-reading.svg", motion: "pulse" },
  ],
};

export const featuredProjects: FeaturedProject[] = [
  {
    kicker: "Mobile cross-platform",
    title: "Pūioio",
    img: "/img/puioio.jpg",
    desc: "A cutting-edge real-time smartphone-based exercise repetition counting system. Engineered utilising on-device sensor data processing, Pūioio empowers users to accurately track physical performance without reliance on external wearables.",
    tags: ["Flutter", "Machine Learning", "Honours Research"],
    href: "/projects/puioio",
  },
  {
    kicker: "Native Android",
    title: "Pīkau",
    img: "/img/pikau.jpg",
    desc: "Currently building Pīkau, a Kotlin and Jetpack Compose tramping companion app, to keep my Android skills sharp while on a career sabbatical.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM"],
    href: "/projects/pikau",
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    kicker: "Mobile cross-platform",
    title: "Pūioio",
    img: "/img/puioio.jpg",
    year: "2022",
    desc: "With the ubiquity of mobile phones and the benefits of tracking physical activity, our final year research explored the feasibility of counting exercise repetitions in real-time, using only on-device inference, on flagship smartphones. As a result, we developed Pūioio, a cross-platform mobile application designed to track repetitions using our proposed pipeline for three standard exercises: Squats, Push-ups, and Pull-ups. Overall, Pūioio attained an accuracy of 98.8% in real-world testing and my partner and I won 1st in our category for the top 'AI & Machine Learning' project.",
    tags: ["Flutter", "Machine Learning", "Honours Research"],
    href: "/projects/puioio",
  },
  {
    kicker: "Native Android",
    title: "Pīkau",
    img: "/img/pikau.jpg",
    year: "2026",
    desc: "Currently building Pīkau, a Kotlin and Jetpack Compose tramping companion app, to keep my Android skills sharp while on a career sabbatical.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM"],
    href: "/projects/pikau",
  },
  {
    kicker: "Web application",
    title: "The Missed | Web Application Curriculum Resource",
    img: "/img/missed.jpg",
    year: "2017",
    desc: "A web application created as a digital curriculum resource for Year 7-10 students. Includes one-click-translation from English to Māori. Awarded with the amazing opportunity to attend the 100th Anniversary of the Battle of Passchendaele in Belgium by the Ministry of Education. Used technologies: HTML, CSS, jQuery and Adobe Photoshop.",
    tags: ["HTML", "CSS", "jQuery"],
    links: [
      {
        label: "View website",
        href: "https://kkau201.github.io/The-Missed/index.html",
      },
      {
        label: "View article",
        href: "https://www.nzherald.co.nz/rotorua-daily-post/news/rotorua-girls-high-school-students-win-trip-to-belgium/DBMMTCWSL4ZDBAFLENFNEMCI4M/",
      },
    ],
  },
  {
    kicker: "Design portfolio",
    title: "Mauao Collective | NZQA Level 3 Design Portfolio",
    img: "/img/mauao.jpg",
    year: "2016",
    desc: "A systematic body of work designed for an art collective consisting of a range of mediums, from logos and invitations to posters and a zine. My year-long portfolio was selected as top 12 nationally in NCEA Design Level 3, placing it in the NZQA Top Art Exhibition touring the country.",
    tags: ["Branding", "Print", "NCEA Design"],
    href: "https://www.nzherald.co.nz/rotorua-daily-post/news/girls-high-student-to-feature-in-exhibition/WO2AKN4XY7PDLKDBU3JOS55XTQ/",
    ctaLabel: "View article",
  },
];

export const experience: Role[] = [
  {
    dates: "Jan 2023 - Apr 2026",
    company: "Alphero Ltd.  |  Wellington, NZ",
    title: "Intermediate Android Developer",
    desc: "Developed and maintained native Android applications focusing on delivering polished UI/UX and robust functionality. Collaborated cross-functionally to ensure high-quality software delivery over short release schedules.",
    tags: ["Android", "Kotlin", "Java", "Jetpack Compose", "KMP", "Firebase", "GraphQL", "RESTFUL API"],
  },
  {
    dates: "Nov 2021 - Feb 2022",
    company: "Bank of New Zealand  |  Wellington, NZ (Remote)",
    title: "Full-stack Intern",
    desc: "Built customer-facing items in the lending funnel for credit card and personal loan applications. Refactored APIs for performance and maintainability, and facilitated a team retrospective in agile workflow.",
    tags: ["RESTFUL API", "YAML", "Agile"],
  },
];

export const contact: ContactContent = {
  heading: "Let's connect",
  body: "I'm currently open to new opportunities and collaborations. Whether you have a question, or just want to say hi, feel free to reach out!",
  cvHref: "/CV_KaylaKautai_061026.pdf",
  cvLabel: "Download CV",
  social: socialLinks,
};
