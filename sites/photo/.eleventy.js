const hbPlugin = require("@11ty/eleventy-plugin-handlebars");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");


module.exports = function (eleventyConfig) {
  // Re-run the entire config (and plugin registration) any time a partial changes
  eleventyConfig.addWatchTarget("./_includes/", { resetConfig: true });

  // Handlebars plugin (will re-register partials on each config run)
  eleventyConfig.addPlugin(hbPlugin);

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Your other watch targets, passthroughs, and Browsersync settings…
  eleventyConfig.addWatchTarget("./assets/css/");
  eleventyConfig.addPassthroughCopy("assets/css/main.css");
  eleventyConfig.addPassthroughCopy("assets/images");
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
    pathPrefix: "/photography/"
  };
};
