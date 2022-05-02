import { ethers } from "ethers";

// Auto-calling async function to allow await-style.
(async () => {
  // Your provider RPC URL. It provides read-only access to the Blockchain and its status.
  // It can be:
  // - 3rd party service: Infura, Alchemy, etc.
  // - Your own node
  const providerUrl =
    "https://mainnet.infura.io/v3/9984a6dfdd074685a738dc728cc5077a";

  let provider;
  try {
    provider = new ethers.providers.StaticJsonRpcProvider(providerUrl);
    // We can wait until the connection is established.
    // But most of the providers calls will await this internally.
    await provider.detectNetwork();
  } catch (e) {
    console.error(
      "❌📡❌ Error connecting to provider. Please try again or use a different provider"
    );
    process.exit(1);
  }

  // Once we are connected, we can do several read-only operations.
  // e.g. Getting the latest block number on the blockchain.
  const currentMainnetBlock = await provider.getBlockNumber();
  console.log("Current mainnet block number", currentMainnetBlock);
})();
