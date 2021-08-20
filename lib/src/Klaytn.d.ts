import "dotenv/config";
declare class Klaytn {
    private caver;
    walletAddress: string | undefined;
    constructor();
    createContract(address: string, abi: any): any;
}
declare const _default: Klaytn;
export default _default;
//# sourceMappingURL=Klaytn.d.ts.map