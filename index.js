const semanticRelease = require("semantic-release");
const config = require("./base.release.config");

semanticRelease(config, {
  stdout: process.stdout,
  stderr: process.stderr,
}).catch((err) => {
  console.error("The automated release failed with %O", err);
  process.exit(1);
});
