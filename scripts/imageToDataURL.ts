import * as fs from "fs";

for (let i = 0; i < 1; i += 1) {
    const dataURL = `data:image/png;base64,${fs.readFileSync(`../images/dscMate-${i}.png`, "base64")}`;
    console.log(dataURL);
}