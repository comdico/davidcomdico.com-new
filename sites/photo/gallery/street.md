---
layout: layouts/base.hbs
title: "Street"
tags: portfolio
images:
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb1.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full1.jpg"
    alt: "City street scene"
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb2.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full2.jpg"
    alt: "Portrait in motion"
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb3.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full3.jpg"
    alt: "Portrait in motion"
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb4.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full4.jpg"
    alt: "Portrait in motion"
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb5.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full5.jpg"
    alt: "Portrait in motion"
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb6.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full6.jpg"
    alt: "Portrait in motion"
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb7.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full7.jpg"
    alt: "Portrait in motion"
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb8.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full8.jpg"
    alt: "Portrait in motion"
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb9.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full9.jpg"
    alt: "Portrait in motion"
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb10.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full10.jpg"
    alt: "Portrait in motion"
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb11.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full11.jpg"
    alt: "Portrait in motion"
  - thumbnail: "{{eleventy.pathPrefix}}assets/images/street/thumb12.jpg"
    full: "{{eleventy.pathPrefix}}assets/images/street/full12.jpg"
    alt: "Portrait in motion"
---

<section class="max-w-4xl mx-auto p-8">
  <h1 class="text-2xl font-display font-bold mb-8">GALLERY: <span class="text-blue uppercase "> {{title}} </span></h1>
  <p class="text-xs italic right-0">Click or tap for full image. Click or tap to cycle through all images. Click or tap away to close.</p>

{{> gallery-masonry }}

</section>
