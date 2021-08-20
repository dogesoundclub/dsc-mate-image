pragma solidity ^0.5.6;

import "./klaytn-contracts/ownership/Ownable.sol";
import "./interfaces/IDSCMateImage.sol";

contract DSCMateImage is Ownable, IDSCMateImage {

    string public hash = "6110b42d1575f2bfb80a98cb6ce7d6743fa249b6ee2be08467487c12f5f95753";
    string public ipfs = "QmfTimyAQTQjQsnvECn9U44LdnPzSDF2XREoP2WFdjHitQ";

    mapping(uint256 => string) public image;
    function set(uint256 mateId, string calldata dataURL) onlyOwner external {
        image[mateId] = dataURL;
    }
}
