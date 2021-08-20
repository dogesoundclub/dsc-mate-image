pragma solidity ^0.5.6;

interface IDSCMateImage {
    function hash() view external returns (string memory);
    function ipfs() view external returns (string memory);
    function image(uint256 mateId) view external returns (string memory);
}
