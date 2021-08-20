"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");
require("hardhat-typechain");
const config = {
    solidity: {
        version: "0.5.6",
    },
    networks: {
        kovan: {
            url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts: [process.env.ADMIN || ''],
            chainId: 42,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
    },
};
exports.default = config;
//# sourceMappingURL=hardhat.config.js.map