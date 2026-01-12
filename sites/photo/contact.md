---
layout: layouts/base.hbs
title: "Contact"
---

<section class="max-w-4xl mx-auto p-8">
  <h1 class="text-2xl font-display font-bold mb-8"><span class="text-blue uppercase ">{{title}}: </span>
    Get in Touch</h1>
  
  <section class="max-w-4xl pt-12 pb-20 mx-auto mb-20 bg-neutral-700">
  <form
    action="https://formspree.io/f/mzzgljvv"
    method="POST"
    class="space-y-4 max-w-2xl mx-auto"
  >
    <label class="block">
      <span class="text-gray-100 ">Your Name</span>
      <input
        type="text"
        name="name"
        required
        class="mt-1 block w-full rounded bg-gray-400 text-gray-800 p-2 bold focus:bg-gray-200 focus:outline-0"
      />
    </label>
    <label class="block">
      <span class="text-gray-100">Email</span>
      <input
        type="email"
        name="email"
        required
        class="mt-1 block w-full rounded bg-gray-400 text-gray-800 p-2 bold focus:bg-gray-200 focus:outline-0"
      />
    </label>
    <label class="block">
      <span class="text-gray-100">Message</span>
      <textarea
        name="message"
        rows="5"
        required
        class="mt-1 block w-full rounded bg-gray-400 text-gray-800 p-2 bold focus:bg-gray-200 focus:outline-0"
      ></textarea>
    </label>
    <button
      type="submit"
      class="bg-blue text-white px-6 py-2 rounded hover:opacity-90"
    >
      Send Message
    </button>
  </form>
</section>

</section>
