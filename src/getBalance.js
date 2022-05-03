import { ethers } from "ethers";
import { getProvider } from "./providers.js";
import { loadWallet } from "./loadWallet.js";

(async () => {
  const provider = await getProvider();
  const myWallet = await loadWallet();

  // The result is a BigNumber (a JS an object which safely allows mathematical
  // operations on numbers of any magnitude.)
  // We will get the balance in wei
  // - 10^9 wei = 1 gwei
  // - 10^18 wei = 1 ether
  const myBalance = await provider.getBalance(myWallet[0]);
  // We can also use ENS names.
  const vitalikBalance = await provider.getBalance("vitalik.eth");

  // We can use formatEther util to parse the Wei balance into Ether.
  console.log(
    "\tMy first wallet-address account ETH Balance:",
    ethers.utils.formatEther(myBalance)
  );
  console.log(
    "\tVitalik's address ETH Balance:",
    ethers.utils.formatEther(vitalikBalance)
  );
})();
