const scriptList = {
  provider: {
    name: "Provider",
    script: "src/getProvider.js",
    teaser: "Connects to a provider an shows the current Mainnet block",
  },
  createWallet: {
    name: "Create Wallet",
    script: "src/createWallet.js",
    teaser: "Set up a wallet creating a mnemonic file",
  },
  loadWallet: {
    name: "Load Wallet",
    script: "src/loadWallet.js",
    teaser: "Derives the wallet addresses using the mnemonic file",
  },
  ensAddress: {
    name: "ENS lookup",
    script: "src/ensLookup.js",
    teaser: "Get the address for a given ENS (Ethereum Name Service)",
  },
  getBalance: {
    name: "Get Address Balance",
    script: "src/getBalance.js",
    teaser: "Get the Balance from an address",
  },
  getSigner: {
    name: "Signer",
    script: "src/getSigner.js",
    teaser: "Get a signer and connect it to a provider",
  },
  sendEth: {
    name: "Send ETH",
    script: "src/sendEth.js",
    teaser: "Send ETH between accounts on the Rinkeby Testnet",
  },
  readContract: {
    name: "Read Contract",
    script: "src/readContract.js",
    teaser: "Call a read-only method from a contract",
  },
  readContractEvents: {
    name: "Read Contract Events",
    script: "src/readContractEvents.js",
    teaser: "Read the latest events from a contract",
  },
  signAndVerify: {
    name: "Sign and Verify",
    script: "src/signAndVerify.js",
    teaser: "Sign a message and verify its authenticity",
  },
};

export default scriptList;
