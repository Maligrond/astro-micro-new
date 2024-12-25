---
title: "Getting DDSDSDSDed"
description: "Hit the ground running."
date: "2024-12-22"
tags:
  - tutorial
---

---

# Путешествие в Японию
## Апрель 2025

Join the room, introduce yourself and find out how you can help out.

![Tokyo Tower](./japan1.jpg)


```js
// src/components/Head.astro

const setGiscusTheme = () => {
  const giscus = document.querySelector(".giscus-frame");

  const isDark = document.documentElement.classList.contains("dark");

  if (giscus) {
    const url = new URL(giscus.src);
    // Change "dark" and "light" to other Giscus themes
    url.searchParams.set("theme", isDark ? "dark" : "light");
    giscus.src = url.toString();
  }
};
```
