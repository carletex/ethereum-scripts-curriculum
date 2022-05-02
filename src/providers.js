import { ethers } from "ethers";

// Auto-calling async function to allow await-style.
(async () => {
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

  // Once we are connected, we can do several read-only operations.
  // e.g. Getting the latest block number on the blockchain.
  const currentMainnetBlock = await provider.getBlockNumber();
  console.log("\tCurrent mainnet block number", currentMainnetBlock);
})();
