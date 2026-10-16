export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

export type HobbyMotion = "shutter" | "stir" | "kickflip" | "rep" | "pulse";

export interface Hobby {
  label: string;
  src: string;
  motion: HobbyMotion;
}

export interface FeaturedProject {
  kicker: string;
  title: string;
  img: string;
  desc: string;
  tags: string[];
}

export interface ArchiveProject {
  kicker: string;
  title: string;
  img: string;
  year: string;
  desc: string;
  tags: string[];
}

export interface Role {
  company: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface HeroBadge {
  file: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  amp: number;
  speed: number;
  phase: number;
}

export interface HeroContent {
  greeting: string;
  name: string;
  role: string;
  paragraphs: string[];
  avatar: {
    src: string;
    alt: string;
  };
  badges: HeroBadge[];
}

export interface AboutContent {
  paragraphs: string[];
  awards: string[];
  hobbies: Hobby[];
}

export interface ContactContent {
  heading: string;
  body: string;
  cvHref: string;
  cvLabel: string;
  social: SocialLink[];
}

export interface SiteMeta {
  title: string;
  description: string;
  shortName: string;
  copyright: string;
}
