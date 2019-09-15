const https = require("https");
const fs = require("fs");
const path = require("path");

const GIT_EMOJI_URL =
  "https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json";

const dst = path.resolve(process.cwd(), "lib/data", "gitmojis.json");

https.get(GIT_EMOJI_URL, res => {
  res.pipe(fs.createWriteStream(dst));
});
