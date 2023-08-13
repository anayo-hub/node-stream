// const fs = require("fs/promises");

// (async () => {
//   console.time("writeTime"); // Start timing

//   try {
//     const fileHandle = await fs.open("text.txt", "w");

//     for (let i = 0; i < 1000000; i++) {
//       await fileHandle.write(` ${i} `);
//     }

//     await fileHandle.close();

//     console.timeEnd("writeTime"); // End timing and log the elapsed time
//     console.log("File write operation successful.");
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       console.error("Error: The file or directory does not exist.");
//     } else if (error.code === "EACCES") {
//       console.error("Error: Permission denied.");
//     } else {
//       console.error("Error:", error);
//     }
//   }
// })();

// const fs = require("fs");

// (async () => {
//   console.time("writeTime"); // Start timing
//   fs.open("text.txt", "w", (err, fd) => {
//     for (let i = 0; i < 1000000; i++) {
//       const buff = Buffer.from(` ${i} `, "utf-8");
//       fs.writeSync(fd, buff);
//     }
//   });
//   console.timeEnd("writeTime"); // End timing and log the elapsed time
//   console.log("File write operation successful.");
// })();

// const fs = require("fs/promises");

// (async () => {
//   console.time("writeTime"); // Start timing
//   const fileHandle = await fs.open("text.txt", "w");

//   const stream = fileHandle.createWriteStream();

//   for (let i = 0; i < 1000000; i++) {
//     const buff = Buffer.from(` ${i} `, "utf-8");
//     stream.write(buff);
//   }

//   stream.createRe

//   console.timeEnd("writeTime"); // End timing and log the elapsed time
// })();

const fs = require("fs/promises");

(async () => {
  console.time("writeTime"); // Start timing
  const fileHandle = await fs.open("text.txt", "w");

  const stream = fileHandle.createWriteStream();

  console.log(stream.writableHighWaterMark);
  const buff = Buffer.from("string", "utf-8");
  stream.write(buff);
  console.log(stream.writableLength);
  console.log(buff);

  for (let i = 0; i < 1000000; i++) {
    const buff = Buffer.from(` ${i} `, "utf-8");
    stream.write(buff);
  }

  stream.createRe;

  console.timeEnd("writeTime"); // End timing and log the elapsed time
})();
