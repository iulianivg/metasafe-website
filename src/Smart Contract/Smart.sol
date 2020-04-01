pragma solidity ^0.5.5;
contract MetaSafe {
   

   address public owner;
   
   struct VerifiedParameters  {
    uint256  id;
    string  website;
    string  companyName;
   }
   
   mapping(uint256 => VerifiedParameters) public VerifiedAddresses;
   
   constructor() public {
       owner = msg.sender;
   }
   
   function addWebsite(uint256 _id, string memory _website, string memory _companyName) public {
       require(msg.sender == owner);
       VerifiedAddresses[_id].id = _id;
       VerifiedAddresses[_id].website = _website;
       VerifiedAddresses[_id].companyName = _companyName;
   }
}
