import EventContainer from "eventcontainer";
export default abstract class Contract extends EventContainer {
    address: string;
    protected contract: any;
    constructor(address: string, abi: any);
}
//# sourceMappingURL=Contract.d.ts.map