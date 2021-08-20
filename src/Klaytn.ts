const Caver = require("caver-js");
import "dotenv/config";

class Klaytn {

    private caver = new Caver("https://kaikas.cypress.klaytn.net:8651/");
    public walletAddress = process.env.PUBLIC_KEY;

    constructor() {
        this.caver.wallet.add(
            new this.caver.wallet.keyring.singleKeyring(
                this.walletAddress,
                new this.caver.wallet.keyring.privateKey(process.env.PRIVATE_KEY),
            ),
        );
    }

    public createContract(address: string, abi: any) {
        return new this.caver.contract.create(abi, address);
    }
}

export default new Klaytn();
