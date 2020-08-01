const baseReleaseConfig = require("./base.release.config");

module.exports = {
  plugins: [
    ...baseReleaseConfig.plugins,
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
