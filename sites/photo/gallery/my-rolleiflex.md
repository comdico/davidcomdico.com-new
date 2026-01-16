---
layout: layouts/base.hbs
title: "My Rolleiflex"
tags: portfolio
images:
  - thumbnail: "/assets/images/rolleiflex/thumb1.jpg"
    full: "/assets/images/rolleiflex/full1.jpg"
    alt: "City street scene"
  - thumbnail: "/assets/images/rolleiflex/thumb2.jpg"
    full: "/assets/images/rolleiflex/full2.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/rolleiflex/thumb3.jpg"
    full: "/assets/images/rolleiflex/full3.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/rolleiflex/thumb4.jpg"
    full: "/assets/images/rolleiflex/full4.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/rolleiflex/thumb5.jpg"
    full: "/assets/images/rolleiflex/full5.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/rolleiflex/thumb6.jpg"
    full: "/assets/images/rolleiflex/full6.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/rolleiflex/thumb7.jpg"
    full: "/assets/images/rolleiflex/full7.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/rolleiflex/thumb8.jpg"
    full: "/assets/images/rolleiflex/full8.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/rolleiflex/thumb9.jpg"
    full: "/assets/images/rolleiflex/full9.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/rolleiflex/thumb10.jpg"
    full: "/assets/images/rolleiflex/full10.jpg"
    alt: "Portrait in motion"
---

<section class="max-w-4xl mx-auto p-8">
  <h1 class="text-2xl font-display font-bold mb-8">GALLERY: <span class="text-blue uppercase "> {{title}} </span></h1>
  <p class="text-xs italic right-0">Click or tap for full image. Click or tap to cycle through all images. Click or tap away to close.</p>

{{> gallery-masonry }}

</section>
