import DSCMateImageContract from "./src/DSCMateImageContract";

(async () => {
    for (let i = 0; i < 10000; i += 1) {
        if (await DSCMateImageContract.image(i) === "") {
            console.log(`Mate #${i} NOT Uploaded!`);
            break;
        } else {
            console.log(`Mate #${i} Checked.`);
        }
    }
})();