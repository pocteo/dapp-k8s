// To instantiate the contract we need his abi and his address
// After the contract migration ($ truffle migrate development ) the build folder
// will be updated . In that folder you will find a file named HelloPocteo.json copy/paste 
// the file in the inputs of this web site https://jsonpath.com/ which is an online json extractor.


// To get the abi use this filtre " $.abi " and copy paste the result in here 

var Contract_abi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "name": "SayHello",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0x0739fb87"
    }
  ] ;

// To get the address use this filtre " $.networks[*].address" and copy paste the result in here 
// without [] .

var Contract_address ='0x60195C7E045b1FB271b272997504796dAeA9E5ae';