import { ethers } from "ethers";
import EthCrypto from "eth-crypto";
import { loadWallet } from "./loadWallet.js";
import { getProvider } from "./getProvider.js";

// Encrypt a message with someone’s public key,
// and decrypt it using their private key
//
// We use the eth-crypto library.
(async () => {
  const provider = await getProvider();

  const message = "My secret message";

  // Get their public key
  const accounts = await loadWallet();
  const signerReceptor = new ethers.Wallet(accounts[1], provider);
  const theirPublicKey = signerReceptor.publicKey;

  console.log(
    "\tWe want to encrypt & send the following message:\n\t",
    `«${message}»`,
    `\n\tto ${signerReceptor.address} which public key is ${theirPublicKey}`
  );

  // Encrypt the message
  const encryptedMessage = await EthCrypto.encryptWithPublicKey(
    // EthCrypto takes the public key without the 0x hex prefix
    theirPublicKey.replace("0x", ""),
    message
  );

  console.log("\tEncrypted message:\n\t", encryptedMessage);

  // We send the message to them and they can decrypt their private key:
  const theirPrivateKey = signerReceptor.privateKey;
  const decryptedMessage = await EthCrypto.decryptWithPrivateKey(
    theirPrivateKey,
    encryptedMessage
  );

  // Note that you could also sign the encrypted message, so the receiver
  // can also verify who is the sender.

  console.log(
    "\tMessage received. Decrypted message:\n\t",
    `«${decryptedMessage}»`
  );
})();
