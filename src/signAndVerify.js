import { ethers } from "ethers";
import { loadWallet } from "./loadWallet.js";
import { getSigner } from "./getSigner.js";

// Sign a message and verify its authenticity
//
// Signing&verifying it's used for identity verification.
// e.g. log in with you wallet into a website.
(async () => {
  const signer = await getSigner(true);

  // Sign a message
  // (We should use a Nonce inside the message to avoid replay attacks)
  const messageToSign = `Hello, I'm really ${signer.address}.`;
  const signature = await signer.signMessage(messageToSign);

  // Verify a message
  const decodedSignerAddress = ethers.utils.verifyMessage(
    messageToSign,
    signature
  );

  console.log(
    `\tI can confirm that the signer of: «${messageToSign}» is ${decodedSignerAddress}`
  );
})();
