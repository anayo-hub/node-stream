const fs = require("fs/promises");

(async () => {
  console.time("writeTime"); // Start timing

  try {
    const fileHandle = await fs.open("test.txt", "w");

    for (let i = 0; i < 1000000; i++) {
      await fileHandle.write(` ${i} `);
    }

    await fileHandle.close();

    console.timeEnd("writeTime"); // End timing and log the elapsed time
    console.log("File write operation successful.");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("Error: The file or directory does not exist.");
    } else if (error.code === "EACCES") {
      console.error("Error: Permission denied.");
    } else {
      console.error("Error:", error);
    }
  }
})();
