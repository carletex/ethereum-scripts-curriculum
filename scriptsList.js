const scriptList = {
  provider: {
    name: "Provider",
    script: "src/providers.js",
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
};

export default scriptList;
