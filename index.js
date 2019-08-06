
  /*  window.addEventListener("load", async () => {
     
      if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        //resolve(web3);
      }
    });*/

    if (typeof web3 !== 'undefined') {
        // automatically detect the provider by metmask which is infura
        web3 = new Web3(web3.currentProvider);
    } else {
        // set ganache as  provider if metamask is not installed
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }


     // Use web3 to get the user's accounts.
     const accounts =  web3.eth.getAccounts();
     // use the first account as the default account
     web3.eth.defaultAccount = web3.eth.accounts[0];
    // Instaniciate the contract 
     const PocteoContract = new web3.eth.Contract([
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
      ],'0xFAbCb95934764b9A6c1c5E767ed6DADE8381e49E');

    //  const Pocteo = PocteoContract.at(0xFAbCb95934764b9A6c1c5E767ed6DADE8381e49E);
        console.log(PocteoContract);
    
function Showmsg(name) {

 Name = $("#name").val();
 console.log(Name);
 const response =  PocteoContract.methods.SayHello(Name).call();
 response.then(function(value) {
    console.log(value);
    document.write(value);
  });
 //.log(response);

}

