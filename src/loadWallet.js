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

const mnemonic = fs.readFileSync(mnemonicPath).toString();

const wallet0 = Wallet.fromMnemonic(mnemonic);
console.log("1st derived wallet address from mnemonic:", wallet0.address);

// Default "m/44’/60’/0’/0/0"
const walletNumber = 1;
const derivedPath = `m/44'/60'/0'/0/${walletNumber}`;
const wallet1 = Wallet.fromMnemonic(mnemonic, derivedPath);
console.log("2nd derived wallet address from mnemonic:", wallet1.address);
