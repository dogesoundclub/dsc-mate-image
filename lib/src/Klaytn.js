"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Caver = require("caver-js");
require("dotenv/config");
class Klaytn {
    constructor() {
        this.caver = new Caver("https://kaikas.cypress.klaytn.net:8651/");
        this.walletAddress = process.env.PUBLIC_KEY;
        this.caver.wallet.add(new this.caver.wallet.keyring.singleKeyring(this.walletAddress, new this.caver.wallet.keyring.privateKey(process.env.PRIVATE_KEY)));
    }
    createContract(address, abi) {
        return new this.caver.contract.create(abi, address);
    }
}
exports.default = new Klaytn();
//# sourceMappingURL=Klaytn.js.map