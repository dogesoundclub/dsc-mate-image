"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const Klaytn_1 = __importDefault(require("./Klaytn"));
class Contract extends eventcontainer_1.default {
    constructor(address, abi) {
        super();
        this.address = address;
        this.contract = Klaytn_1.default.createContract(address, abi);
    }
}
exports.default = Contract;
//# sourceMappingURL=Contract.js.map