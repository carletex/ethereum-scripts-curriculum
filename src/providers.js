import { ethers } from "ethers";

// Use your INFURA API KEY.
const providerUrl = "https://mainnet.infura.io/v3/9984a6dfdd074685a738dc728cc5077a";

let provider;
try {
  provider = new ethers.providers.StaticJsonRpcProvider(providerUrl);
  await provider.detectNetwork();
} catch (e) {
  console.error("❌📡❌ Error connecting to provider. Please try again or use a different provider");
  process.exit(1);
}

const currentMainnetBlock = await provider.getBlockNumber();

console.log("Current mainnet block number", currentMainnetBlock);
