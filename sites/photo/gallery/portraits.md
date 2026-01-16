---
layout: layouts/base.hbs
title: "Portraits"
tags: portfolio
images:
  - thumbnail: "/assets/images/portrait/thumb1.jpg"
    full: "/assets/images/portrait/full1.jpg"
    alt: "City street scene"
  - thumbnail: "/assets/images/portrait/thumb2.jpg"
    full: "/assets/images/portrait/full2.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/portrait/thumb3.jpg"
    full: "/assets/images/portrait/full3.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/portrait/thumb4.jpg"
    full: "/assets/images/portrait/full4.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/portrait/thumb5.jpg"
    full: "/assets/images/portrait/full5.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/portrait/thumb6.jpg"
    full: "/assets/images/portrait/full6.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/portrait/thumb7.jpg"
    full: "/assets/images/portrait/full7.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/portrait/thumb8.jpg"
    full: "/assets/images/portrait/full8.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/portrait/thumb9.jpg"
    full: "/assets/images/portrait/full9.jpg"
    alt: "Portrait in motion"
  - thumbnail: "/assets/images/portrait/thumb10.jpg"
    full: "/assets/images/portrait/full10.jpg"
    alt: "Portrait in motion"
---

<section class="max-w-4xl mx-auto p-8">
  <h1 class="text-2xl font-display font-bold mb-8">GALLERY: <span class="text-blue uppercase "> {{title}} </span></h1>
  <p class="text-xs italic right-0">Click or tap for full image. Click or tap to cycle through all images. Click or tap away to close.</p>

{{> gallery-masonry }}

</section>
