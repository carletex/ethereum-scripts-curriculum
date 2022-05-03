// We use the utils we create on previous scripts.
import { getProvider } from "./getProvider.js";

// Get an address from ENS and vice-versa.
//
// The Ethereum Name Service (ENS) acts like a traditional DNS, it maps
// an ENS name (e.g. vitalik.eth) into an address.
(async () => {
  const provider = await getProvider();

  // From an ENS name to an Address
  const vitalikAddress = await provider.resolveName("vitalik.eth");
  console.log("\tvitalik.eth address:", vitalikAddress);

  // From an Address to a ENS name
  const ethAddress = "0x34aa3f359a9d614239015126635ce7732c18fdf3";
  const ensName = await provider.lookupAddress(ethAddress);
  console.log("\t0x34a...fdf3 address ENS name:", ensName);
})();
