const scriptList = {
  provider: {
    name: "Provider",
    script: "src/providers.js",
    teaser: "Connects to a provider an show current block",
    description:
      "A Provider provides an abstraction for a connection to the Ethereum Network. It provides read-only access to the Blockchain and its status.\n",
  },
  createWallet: {
    name: "Create Wallet",
    script: "src/createWallet.js",
    teaser: "Set up a wallet creating a mnemonic file",
    description:
      "A Provider provides an abstraction for a connection to the Ethereum Network. It provides read-only access to the Blockchain and its status.\n",
  },
  loadWallet: {
    name: "Load Wallet",
    script: "src/loadWallet.js",
    teaser: "Derives the wallet addresses using the mnemonic file",
    description:
      "A Provider provides an abstraction for a connection to the Ethereum Network. It provides read-only access to the Blockchain and its status.\n",
  },
};

export default scriptList;
