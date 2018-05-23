const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "LearningTheSword - documenting my study into historical arms", // <title>
  shortSiteTitle: "LearningTheSword", // <title> ending for posts and pages
  siteDescription: "LearningTheSword is the historical arms blog for Will Weaver, known in the SCA as Lord Erich Guter Muth.",
  siteUrl: "https://www.learningthesword.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Will Weaver",
  authorTwitterAccount: "buildingbananas",
  // info
  infoTitle: "Learning\nThe Sword",
  infoTitleNote: "",
  // manifest.json
  manifestName: "Learning The Sword - documenting my study into historical arms",
  manifestShortName: "LearnSword", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/funkymonkeymonk" },
    { name: "twitter", url: "https://twitter.com/buildingbananas" },
    { name: "facebook", url: "https://www.facebook.com/funkymonkeymonk" }
  ]
};
