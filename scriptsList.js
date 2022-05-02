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
};

export default scriptList;
