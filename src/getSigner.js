import { ethers } from "ethers";
import isCalledFromCli from "./helpers/isCalledFromCli.js";
import { getProvider } from "./getProvider.js";
import { loadWallet } from "./loadWallet.js";

// Init and return a signer.
//
// A Signer can sign messages and transactions and send signed transactions to
// the Ethereum Network to execute state changing operations.
// (VS. provider, which is read-only)
const getSigner = async () => {
  const provider = await getProvider();
  const accounts = await loadWallet();

  // Instantiate and return the first signer from our Wallet,
  // connecting it to a provider.
  return new ethers.Wallet(accounts[0], provider);
};

(async () => {
  if (!isCalledFromCli(import.meta)) return;

  const signer = await getSigner();
  console.log(
    "\tSigner connected:",
    signer.address,
    "\n\ton",
    signer.provider.connection.url
  );
})();

export { getSigner };
