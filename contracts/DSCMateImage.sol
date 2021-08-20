pragma solidity ^0.5.6;

import "./klaytn-contracts/ownership/Ownable.sol";
import "./klaytn-contracts/math/SafeMath.sol";
import "./interfaces/IDSCMateImage.sol";

contract DSCMateImage is Ownable, IDSCMateImage {
    using SafeMath for uint256;
}
