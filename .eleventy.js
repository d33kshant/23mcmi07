const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const BASE_URL = "https://obscure-space-eureka-j995x94ggwv2pw4j-8080.app.github.dev" // "https://scis.uohyd.ac.in/~23mcmi07"

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("withBaseURL", function (url="") {
    try {
      return new URL(BASE_URL + url).href;
    } catch (err) {
      console.error(err);
      return url;
    }
  });
};