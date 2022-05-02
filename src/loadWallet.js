import fs from "fs";
import path from "path";
import { Wallet } from "ethers";

const mnemonicPath = path.resolve("./mnemonic.txt");
if (!fs.existsSync(mnemonicPath)) {
  console.error(
    "❌ The mnemonic file doesn't exist. Use the createWallet script to create it.."
  );
  process.exit(1);
}

// The same mnemonic will always produce the same seed =>
// We'll always get the same addresses.
const mnemonic = fs.readFileSync(mnemonicPath).toString();

const account0 = Wallet.fromMnemonic(mnemonic);
console.log("1st derived wallet address from mnemonic:", account0.address);

// Default "m/44’/60’/0’/0/0"
const accountNumber = 1;
const derivedPath = `m/44'/60'/0'/0/${accountNumber}`;
const account1 = Wallet.fromMnemonic(mnemonic, derivedPath);
console.log("2nd derived wallet address from mnemonic:", account1.address);
