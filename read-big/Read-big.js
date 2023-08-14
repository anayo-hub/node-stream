const fs = require("fs/promises");

(async () => {
  const fileHandleRead = await fs.open("text.txt", "r");
  const fileHandleWrite = await fs.open("dest.txt", "w");

  const streamRead = fileHandleRead.createReadStream();
  const streamWrite = fileHandleWrite.createWriteStream();

  streamRead.on("data", (small) => {
    streamWrite.write(small);
  });
})();
