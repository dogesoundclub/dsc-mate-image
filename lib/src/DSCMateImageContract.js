"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contract_1 = __importDefault(require("./Contract"));
const Klaytn_1 = __importDefault(require("./Klaytn"));
class DSCMateImageContract extends Contract_1.default {
    constructor() {
        super("0x12C591fCd89B83704541B1Eac6b4aA18063A6954", require("./DSCMateImageContractABI.json"));
    }
    async set(mateId, dataURL) {
        const register = Klaytn_1.default.walletAddress;
        await this.contract.methods.set(mateId, dataURL).send({ from: register, gas: 1500000 });
    }
}
exports.default = new DSCMateImageContract();
//# sourceMappingURL=DSCMateImageContract.js.map