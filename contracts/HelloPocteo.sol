pragma solidity ^0.5.0;

contract HelloPocteo{

    function SayHello(string memory name)public pure returns(string memory){
        return string(abi.encodePacked("Hello ",name," Welcome to Pocteo "));
      
    }
}