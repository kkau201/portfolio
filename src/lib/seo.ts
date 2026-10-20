export const SITE_URL = "https://kkau201.github.io/portfolio";

export const seo = {
  title: "Kayla Kautai | Android Developer & Software Engineer",
  description:
    "Portfolio of Kayla Kautai, a Software Engineer specializing in native Android development with Kotlin, Jetpack Compose, and Kotlin Multiplatform (KMP).",
  keywords: [
    "Kayla Kautai",
    "Android Developer",
    "Software Engineer",
    "Kotlin",
    "Jetpack Compose",
    "Kotlin Multiplatform",
    "Mobile Developer",
    "New Zealand",
  ],
  ogImage: "/og-image.jpg",
  ogImageAlt: "Kayla Kautai — Android Developer & Software Engineer",
} as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kayla Kautai",
  jobTitle: "Android Developer & Software Engineer",
  url: `${SITE_URL}/`,
  sameAs: ["https://www.linkedin.com/in/kayla-kautai/", "https://github.com/kkau201"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Auckland",
  },
  knowsAbout: [
    "Android Development",
    "Kotlin",
    "Jetpack Compose",
    "Kotlin Multiplatform (KMP)",
    "Software Architecture",
    "Flutter",
  ],
};
