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
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "atom",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json"],
        message:
          ":bookmark: Release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
