import * as fs from "fs";
import DSCMateImageContract from "./src/DSCMateImageContract";

(async () => {
    for (let i = 0; i < 10000; i += 1) {
        const dataURL = `data:image/png;base64,${fs.readFileSync(`./images/dscMate-${i}.png`, "base64")}`;
        await DSCMateImageContract.set(i, dataURL);
        console.log(`Mate #${i} Uploaded.`);
    }
})();