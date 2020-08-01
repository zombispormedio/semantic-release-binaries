const baseReleaseConfig = require("./base.config");

module.exports = {
  plugins: [
    ...baseReleaseConfig.plugins,
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "atom",
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
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
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build/semantic-release-linux", label: "Linux binary" },
          { path: "build/semantic-release-macos", label: "MacOS binary" },
          { path: "build/semantic-release-win.exe", label: "Windows binary" },
        ],
      },
    ],
  ],
};
