import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Блог Кабана",
  DESCRIPTION: "Блог Кабана.",
  EMAIL: "kaban@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Главная",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Блог",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Проекты",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://x.com/lehakaban322",
  },
  {
    NAME: "Telegram",
    HREF: "https://t.me/durov",
  },
];
