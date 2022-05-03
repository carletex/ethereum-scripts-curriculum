import fs from "fs";
import path from "path";
import bip39 from "bip39";

// Creates mnemonic file that we can use to create a Wallet.
//
// A Wallet manages a private/public key pair which is used to cryptographically
// sign transactions and prove ownership on the Ethereum network.

const savePath = path.resolve("./mnemonic.txt");
// Most modern cryptocurrency wallets implement BIP39,
// a way of generating deterministic keys/wallets.
const mnemonic = bip39.generateMnemonic();

if (!fs.existsSync(savePath)) {
  fs.writeFileSync(savePath, mnemonic.toString());
} else {
  console.error(
    "\t❌ The mnemonic file already exists:",
    savePath,
    "\n\tDelete it if you want to create a new one."
  );
  process.exit(1);
}

console.log("\t✔️  mnemonic filed saved to", savePath);
