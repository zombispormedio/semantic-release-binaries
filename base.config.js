const releaseRules = require("./releaseRules");

module.exports = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "atom",
        releaseRules,
      },
    ],
  ],
};
