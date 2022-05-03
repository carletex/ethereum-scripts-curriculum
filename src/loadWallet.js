import fs from "fs";
import path from "path";
import { Wallet } from "ethers";
import isCalledFromCli from "./helpers/isCalledFromCli.js";

// Loads a wallet using a mnemonic file and returns the first 10 addresses.
//
// With a single mnemonic, using a derivedPath, we can create a set of
// deterministic addresses. So 1 mnemonic => N addresses (N public/private keys)
const loadWallet = async () => {
  const mnemonicPath = path.resolve("./mnemonic.txt");
  if (!fs.existsSync(mnemonicPath)) {
    console.error(
      "\t❌ The mnemonic file doesn't exist. Use the createWallet script to create it.."
    );
    process.exit(1);
  }

  // The same mnemonic will always produce the same seed =>
  // We'll always get the same addresses.
  const mnemonic = fs.readFileSync(mnemonicPath).toString();

  const addresses = [];
  for (let accountNumber = 0; accountNumber < 10; accountNumber++) {
    // Default derivedPath "m/44’/60’/0’/0/0"
    const derivedPath = `m/44'/60'/0'/0/${accountNumber}`;
    const wallet = Wallet.fromMnemonic(mnemonic, derivedPath);
    addresses.push(wallet.address);
  }

  return addresses;
};

(async () => {
  if (!isCalledFromCli(import.meta)) return;

  const wallet = await loadWallet();

  console.log("\t1st derived wallet address from mnemonic:", wallet[0]);
  console.log("\t2nd derived wallet address from mnemonic:", wallet[1]);
})();

export { loadWallet };
