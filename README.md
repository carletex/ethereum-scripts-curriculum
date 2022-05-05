# Ethereum Scripts Curriculum

A collection of scripts, using [EthersJS](https://docs.ethers.io/), to help you learn the foundations of Ethereum.

Run the scripts in order and check the code and all the in-code comments.

Requires NodeJS > 14.

## How to use

1. Clone the repo

```
git clone https://github.com/carletex/ethereum-scripts-curriculum.git
```

2. Install dependencies

```
cd ethereum-scripts-curriculum 
yarn install
# You can also use npm install
```

3. Run cli UI (which will show the scripts sorted)

```
node index.js
```

You can also run the scripts independently with `node src/scriptName.js`.

## Script list

1. **getProvider.js**: Connects to a provider and shows the latest mined Mainnet block.
2. **createWallet.js**: Creates a mnemonic file.
3. **loadWallet.js**: Derives the wallet addresses using the mnemonic file.
4. **ensLookup.js**: Get the address for a given ENS (Ethereum Name Service) and vice versa.
5. **getBalance.js**: Get the ETH Balance for an address.
6. **getSigner.js**: Get a signer and connect it to a provider.
7. **sendEth.js**: Send ETH between accounts on the Rinkeby Testnet.
8. **readContract.js**: Call a read-only function of a contract.
9. **readContractEvents.js**: Read the latest events from a contract.
10. **signAndVerify.js**: Sign a message and verify its authenticity.
11. **encryptAndDecrypt.js**: Encrypt a message with someone’s public key, and decrypt it using their private key.


