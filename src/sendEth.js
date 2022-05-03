import { ethers } from "ethers";
import { loadWallet } from "./loadWallet.js";
import { getSigner } from "./getSigner.js";

// Send eth between accounts on the Rinkeby testnet.
(async () => {
  const signer = await getSigner(true);
  const accounts = await loadWallet();

  // The second account (0-indexed)
  const receiverAddress = accounts[1].address;
  // Converts it to Wei.
  const amountToSend = ethers.utils.parseEther("0.001");

  // Check if we have enough balance (on Rinkeby)
  // lt (lessThan) it's a Bignumber util.
  if ((await signer.getBalance()).lt(amountToSend)) {
    console.error(
      "\t❌ The address",
      signer.address,
      "doesn't have enough ETH to send\n\n",
      "\tYou can use any of the free faucets available online."
    );
    process.exit(1);
  }

  console.log(`\tSending ETH from ${signer.address} to ${receiverAddress}`);

  // This sends the TX to be processed.
  // The await here just waits for the transaction to be sent (not completed!)
  const tx = await signer.sendTransaction({
    to: receiverAddress,
    value: amountToSend,
  });

  console.log("\tTransaction Sent! Wait until the TX is mined...");

  // We can wait until the tx is completed (mined)
  const receipt = await tx.wait();
  console.log(
    `\tTransaction mined! You can check the TX info on: https://rinkeby.etherscan.io/tx/${receipt.transactionHash}`
  );
})();
