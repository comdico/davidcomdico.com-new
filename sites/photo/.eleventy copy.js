const hbPlugin = require("@11ty/eleventy-plugin-handlebars");

module.exports = function (eleventyConfig) {
  const isProd =
    process.env.ELEVENTY_ENV === "production" ||
    process.env.NODE_ENV === "production";

  eleventyConfig.addWatchTarget("./_includes/", { resetConfig: true });
  eleventyConfig.addPlugin(hbPlugin);

  eleventyConfig.addWatchTarget("./assets/css/");

  eleventyConfig.addPassthroughCopy("assets/css/main.css");
  eleventyConfig.addPassthroughCopy("assets/images");

  // Prefix-aware URL helper for Handlebars: {{url "/assets/images/foo.png"}}
  eleventyConfig.addHandlebarsHelper("url", function (inputPath) {
    const p = String(inputPath || "").replace(/^\/+/, ""); // strip leading /
    const prefix = isProd ? "/photography/" : "/";
    return (prefix + p).replace(/\/{2,}/g, "/");
  });

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
    pathPrefix: isProd ? "/photography/" : "/",
  };
};
