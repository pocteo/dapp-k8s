# Hello Pocteo Dapp
Build a Hello-world decentralized application, or Dapp, on the Ethereum Network.

## Dependencies
Install these prerequisites to follow along with the tutorial. 

- [Truffle](https://github.com/trufflesuite/truffle)
- [Ganache](https://www.npmjs.com/package/ganache-cli)
- [Metamask](https://metamask.io/)

## Step 1. Clone the project
```
$ git clone https://github.com/pocteo/dapp-k8s.git
```
## Step 2. Start Ganache
Start a local blockchain instance:
```
$ ganache-cli
```
If you have already a wallet you can start ganache using your [mnemonic](https://blog.blockchain.com/2015/10/27/understanding-mnemonics-and-the-blockchain-wallet/) like this :
```
$ ganache-cli -m 'your-mnemonic'
```
It makes the next step which is `metamask configuration` much more easy.

## Step 3. Configure Metamask

1. Unlock Metamask :


![Unlock-metamask](https://miro.medium.com/max/359/1*ym2Y3hcop0aoPM2UOPy8GA.png)

2. Connect metamask to your local Etherum blockchain provided by Ganache by switching to https://localhost:8545 :


![ganache](https://i.stack.imgur.com/RaR7P.png)

3. Import an account provided by ganache :

If you started ganache with `ganache-cli`command, each time you start ganache you need to import the private key in metamask to connect to one of 10 accounts that ganache instance gives you. This is why it's recommended to start ganache with your mnemonic .

## Step 4. Compile & Deploy Hello-Pocteo Smart Contract

Contracts Deployment in ethereum network is done through an ethereum transaction. `Ethereum transaction` must have sender and reciever. The sender of the transaction is known as the owner of the contract . This is why we should configure `Truffle framework` to use our private key in creating an `Ethereum transaction` to deploy the smart contract.

To do that, you only have to create a file named `secret` in the root of the project and put your mnemonic inside it.

Fees will be automatically taken from the wallet that `truffle` is configured to use.

```
$ cd dapp-k8s
$ truffle migrate development
```
After contract migration we need the contract abi and address so that we can interact with it .
This why you need to change abi and address values in `utils.js` file. Every time you restart ganache you need to repeat the whole process. 

## Step 5. Run the Front End Application

Just open `index.html`file with your browser .
