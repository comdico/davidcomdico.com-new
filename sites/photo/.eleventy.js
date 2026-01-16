const hbPlugin = require("@11ty/eleventy-plugin-handlebars");

module.exports = function (eleventyConfig) {
  const isProd = process.env.ELEVENTY_ENV === "production";

  // Handlebars partials: watch and re-register on change
  eleventyConfig.addWatchTarget("./_includes/", { resetConfig: true });
  eleventyConfig.addPlugin(hbPlugin);

  // Watch CSS output folder (Tailwind writes here)
  eleventyConfig.addWatchTarget("./assets/css/");

  // Passthrough copies so /assets/... exists in _site
  eleventyConfig.addPassthroughCopy("assets/css/main.css");
  eleventyConfig.addPassthroughCopy("assets/images");

  // Dev server (Eleventy uses BrowserSync underneath)
  eleventyConfig.setBrowserSyncConfig({
    server: { baseDir: "_site" },
    files: ["_site/**/*.{html,css,js}"],
    port: 8080,
    open: false,
    notify: false,
  });

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    templateFormats: ["md", "hbs", "html"],
    htmlTemplateEngine: "hbs",
    markdownTemplateEngine: "hbs",
    dataTemplateEngine: "hbs",
    // Only prefix in production builds
    pathPrefix: isProd ? "/photography/" : "/"
  };
};
