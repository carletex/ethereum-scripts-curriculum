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
      "\tâ The mnemonic file doesn't exist. Use the createWallet script to create it.."
    );
    process.exit(1);
  }

  // The same mnemonic will always produce the same seed =>
  // We'll always get the same addresses.
  const mnemonic = fs.readFileSync(mnemonicPath).toString();

  const accounts = [];
  for (let accountNumber = 0; accountNumber < 10; accountNumber++) {
    // Default derivedPath "m/44â/60â/0â/0/0"
    const derivedPath = `m/44'/60'/0'/0/${accountNumber}`;
    const account = Wallet.fromMnemonic(mnemonic, derivedPath);
    accounts.push(account);
  }

  return accounts;
};

(async () => {
  if (!isCalledFromCli(import.meta)) return;

  const accounts = await loadWallet();

  console.log(
    "\t1st derived wallet address from mnemonic:",
    accounts[0].address
  );
  console.log(
    "\t2nd derived wallet address from mnemonic:",
    accounts[1].address
  );
})();

export { loadWallet };
