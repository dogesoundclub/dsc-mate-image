import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
import Klaytn from "./Klaytn";

class DSCMateImageContract extends Contract {

    constructor() {
        super("0x059308948cf1F550E15869f9C3E02dCEb8814F0A", require("./DSCMateImageContractABI.json"));
    }

    public async set(mateId: BigNumberish, dataURL: string): Promise<void> {
        const register = Klaytn.walletAddress;
        await this.contract.methods.set(mateId, dataURL).send({ from: register, gas: 1500000 });
    }

    public async image(mateId: BigNumberish): Promise<string> {
        return await this.contract.methods.image(mateId).call();
    }
}

export default new DSCMateImageContract();
