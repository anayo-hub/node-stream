const fs = require("fs/promises");

(async () => {
  console.time("writeTime"); // Start timing
  const fileHandle = await fs.open("text.txt", "w");

  const stream = fileHandle.createWriteStream();

  let i = 0;

  const writeMany = () => {
    while (i < 1000000) {
      const buff = Buffer.from(` ${i} `, "utf-8");

      if (i === 999999) {
        return stream.end(buff);
      }

      if (!stream.write(buff)) break;
      i++;
    }
  };

  writeMany();

  stream.on("drain", () => {
    writeMany();
  });

  stream.on("close", () => {
    console.timeEnd("writeTime"); // End timing and log the elapsed time
    fileHandle.close();
  });
})();
