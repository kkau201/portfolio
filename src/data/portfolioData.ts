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
    "Software Engineer specialising in Android development with 3+ years of commercial experience building native Kotlin apps with Jetpack Compose and MVVM architecture for media streaming, healthcare, government and utility clients, reaching 2M+ downloads.",
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
    "I was born and raised in Aotearoa (New Zealand). My interest in computers started when my dad enrolled me in a laptop class in intermediate, sparking a passion that shaped my career path. In high school, I began coding websites using HTML, CSS, and JavaScript, sharpening my ability to blend design with development.",
    "To deepen my knowledge, I pursued a Software Engineering degree at the University of Auckland, where I spent five years honing my skills. I explored various programming languages such as Java, C#, Python and took courses in algorithms, testing, databases, and project management.",
    "After graduating, I worked at a digital agency for over three years becoming an Intermediate Android Developer. This gave me the opportunity to apply my skills across a variety of client projects and fulfilled my desire to contribute to products that benefit a wide range of New Zealanders, aligning with my goal of building meaningful and impactful software.",
  ],
  awards: [
    "UoA Final Year Project Machine Learning / AI Winner",
    "UoA Top Achiever Scholarship",
    "MOE Battle of Passchendaele Competition Winner",
    "NZQA Top Art Exhibition Placing for Design Portfolio",
  ],
  hobbies: [
    { label: "Design & photography", src: "/img/hobbies/design-photo.svg" },
    { label: "Baking & cooking", src: "/img/hobbies/baking-cooking.svg" },
    { label: "Skateboarding", src: "/img/hobbies/skateboarding.svg" },
    { label: "Strength training", src: "/img/hobbies/strength-training.svg" },
    { label: "Crosswords & reading", src: "/img/hobbies/crosswords-reading.svg" },
  ],
};

export const featuredProjects: FeaturedProject[] = [
  {
    kicker: "Honours Research · Cross-platform Mobile App",
    title: "Pūioio",
    img: "/img/puioio.png",
    desc: "A cutting-edge real-time smartphone-based exercise repetition counting system. Engineered utilising on-device sensor data processing, Pūioio empowers users to accurately track physical performance without reliance on external wearables.",
    tags: ["Flutter", "Machine Learning", "Pose Detection"],
  },
  {
    kicker: "Native Android App",
    title: "Pīkau",
    img: "/img/pikau.png",
    desc: "Currently building Pīkau, a Kotlin and Jetpack Compose tramping companion app, to keep my Android skills sharp while on a career sabbatical.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM"],
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    title: "Pūioio",
    img: "/img/puioio.png",
    year: "2022",
    desc: "With the ubiquity of mobile phones and the benefits of tracking physical activity, our final year research explored the feasibility of counting exercise repetitions in real-time, using only on-device inference, on flagship smartphones. As a result, we developed Pūioio, a cross-platform mobile application designed to track repetitions using our proposed pipeline for three standard exercises: Squats, Push-ups, and Pull-ups. Overall, Pūioio attained an accuracy of 98.8% in real-world testing and my partner and I won 1st in our category for the top 'AI & Machine Learning' project.",
  },
  {
    title: "Pīkau",
    img: "/img/pikau.png",
    year: "2026",
    desc: "Currently building Pīkau, a Kotlin and Jetpack Compose tramping companion app, to keep my Android skills sharp while on a career sabbatical.",
  },
  {
    title: "Quinzical | Java GUI Application",
    img: "/img/quinzical.png",
    year: "2020",
    desc: "The Quinzical application is a quiz game that aims to teach children more about New Zealand. A cooperative effort to develop Quinzical with my partner, Wayne, took place over two weeks. We chose the target audience of children aged 8-12 in order to teach the next generation about their beautiful and fascinating country. Furthermore, the application would require fun and colourful GUI design.",
  },
  {
    title: "Motukā | Android Mobile Application (Java)",
    img: "/img/motukaa.png",
    year: "2021",
    desc: "Our final Android application, Motukā, helps users browse information about different vehicles. The app was developed to meet the specifications given for a university paper as a competition. This involved developing an android app that can be used to showcase or sell items. More importantly, the team properly applied and realised SOLID principles during the period of this project.",
  },
  {
    title: "The Missed | Web Application Curriculum Resource",
    img: "/img/missed.png",
    year: "2017",
    desc: "A web application created as a digital curriculum resource for Year 7-10 students. Includes one-click-translation from English to Maori. Awarded with the amazing opportunity to attend the 100th Anniversary of the Battle of Passchendaele in Belgium by the Ministry of Education. Used technologies: HTML, CSS, jQuery and Adobe Photoshop",
  },
  {
    title: "Homey | Mobile Application Prototype",
    img: "/img/homey.png",
    year: "2020",
    desc: "A flatting workflow management app that promotes an organized and efficient living environment with roommates. It includes gamification as its main feature. This concept was a semi-finalist in the ON:Pitch competition.",
  },
  {
    title: "Mauao Collective | NZQA Level 3 Design Portfolio",
    img: "/img/mauao.png",
    year: "2016",
    desc: "A systematic body of work designed for an art collective consisting of a range of mediums, from logos and invitations to posters and a zine. Integrates conventions and regenerates ideas within design practice. My year-long portfolio was top 12 in NCEA Design Level 3, placing it in the NZQA Top Art Exhibition touring the country.",
  },
  {
    title: "Stroke Rehabilitation | Mobile Application Prototype",
    img: "/img/stroke.png",
    year: "2018",
    desc: "This app has been designed to aid stroke patients who experience difficulties with communication. The UI/UX was completed on Adobe XD.",
  },
  {
    title: "The Pink Room | e-Commerce Web Application",
    img: "/img/pinkroom.JPG",
    year: "2016",
    desc: "The Pink Room is a web application for a independent clothing outlet. It aims to help promote their clothing lines to potential and existing customers. It integrates a database to keep track of items, quantities, price etc.",
  },
  {
    title: "RGHS Te Mātārere | School Bulletin",
    img: "/img/bulletin.png",
    year: "2017",
    desc: "Took the initiative to revamp the my high school bulletin. As a co-designer, we developed each bulletin in Adobe Photoshop where 10 issues were released over the course of the year.",
  },
  {
    title: "Biopad | e-Commerce Website",
    img: "/img/digichem.png",
    year: "2016",
    desc: "An e-Commerce web application intended for selling biodegradable packaging for sanitary products.",
  },
];

export const experience: Role[] = [
  {
    company: "Alphero Ltd.  |  Wellington, NZ",
    title: "Intermediate Android Developer",
    desc: "Developed and maintained native Android applications focusing on delivering polished UX/UI and robust functionality. Collaborated cross-functionally to ensure high-quality software delivery over short release schedules.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "KMP"],
  },
  {
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
