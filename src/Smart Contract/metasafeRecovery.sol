pragma solidity ^0.5.5;
contract metasafeRecovery {
   

   address payable public owner;
   mapping(address => bool)public players;

   constructor() public {
       owner = msg.sender;
   }
   
   
   function buyAccess() payable public {
       require(msg.value == 0.25 ether);
       owner.transfer(msg.value);
       players[msg.sender] = true;
       
   }
   
   function moderatePlayer(address address_, bool _bool) public {
       require(msg.sender == owner);
       players[address_] = _bool;
   }
   
   
}
