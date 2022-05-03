import { ethers } from "ethers";
import isCalledFromCli from "./helpers/isCalledFromCli.js";

// Init and return a provider.
//
// A Provider provides an abstraction for a connection to the Ethereum Network.
// It provides read-only access to the Blockchain and its status.
//
// We create a function so we can export it and use it in other scripts
const getProvider = async () => {
  // Your provider RPC URL. It provides read-only access to the Blockchain and its status.
  // It can be:
  // - 3rd party service: Infura, Alchemy, etc.
  // - Your own node.
  const providerUrl =
    "https://mainnet.infura.io/v3/460f40a260564ac4a4f4b3fffb032dad";

  let provider;
  try {
    provider = new ethers.providers.StaticJsonRpcProvider(providerUrl);
    // We can wait until the connection is established,
    // but most of the provider calls will await this internally.
    await provider.detectNetwork();
  } catch (e) {
    console.error(
      "\t❌📡❌ Error connecting to provider. Please try again or use a different provider"
    );
    process.exit(1);
  }

  return provider;
};

// Auto-calling async function to allow await-style. Will be run
// when we call this script from the Cli.
(async () => {
  // Avoid running this function when imported from other modules.
  if (!isCalledFromCli(import.meta)) return;

  const provider = await getProvider();
  // Once we are connected, we can do several read-only operations.
  // e.g. Getting the latest block number on the blockchain.
  const currentMainnetBlock = await provider.getBlockNumber();
  console.log("\tCurrent mainnet block number", currentMainnetBlock);
})();

// We export it so we can use it on other scripts.
export { getProvider };
