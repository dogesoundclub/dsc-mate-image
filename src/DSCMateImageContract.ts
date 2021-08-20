import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
import Klaytn from "./Klaytn";

class DSCMateImageContract extends Contract {

    constructor() {
        super("0x12C591fCd89B83704541B1Eac6b4aA18063A6954", require("./DSCMateImageContractABI.json"));
    }

    public async set(mateId: BigNumberish, dataURL: string): Promise<void> {
        const register = Klaytn.walletAddress;
        await this.contract.methods.set(mateId, dataURL).send({ from: register, gas: 1500000 });
    }
}

export default new DSCMateImageContract();
