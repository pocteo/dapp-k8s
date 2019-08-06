# Hello Pocteo Dapp
Build a Hello-world decentralized application, or Dapp, on the Ethereum Network.

## Dependencies
Install these prerequisites to follow along with the tutorial. 
- [NPM](https://nodejs.org)
- [Truffle](https://github.com/trufflesuite/truffle)
- [Ganache](https://www.npmjs.com/package/ganache-cli)
- [Metamask](https://metamask.io/)

## Step 1. Clone the project
```
git clone https://github.com/pocteo/dapp-k8s.git
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
It makes the next step which is `configuring metamask` much more easy.

## Step 3. Configure Metamask

1. Unlock Metamask :
![Unlock-metamask](https://miro.medium.com/max/359/1*ym2Y3hcop0aoPM2UOPy8GA.png)

2. Connect metamask to your local Etherum blockchain provided by Ganache by switching to https://localhost:8545 :

![ganache](https://i.stack.imgur.com/RaR7P.png)

3. Import an account provided by ganache :
If you started ganache with `ganache-cli`command, each time you start ganache you need to import the private in metamask to connect to one of 10 accounts that ganache instance gives you. This is why it's recommended to start ganache with you mnemonic .

## Step 4. Compile & Deploy Election Smart Contract

```
$ cd dapp-k8s
$ truffle migrate development
```

## Step 5. Run the Front End Application

Just open `index.html`file with your browser .
