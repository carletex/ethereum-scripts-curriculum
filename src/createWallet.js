import fs from "fs"
import path from "path";
import bip39 from "bip39";

const savePath = path.resolve("./mnemonic.txt");
const mnemonic = bip39.generateMnemonic();

if (!fs.existsSync(savePath)) {
  fs.writeFileSync(savePath, mnemonic.toString());
} else {
  // file exists
  console.error("❌ The mnemonic file already exists:", savePath, "\n\nDelete it if you want to create a new one.");
  process.exit(1);
}

console.log("✔️ mnemonic filed saved to", savePath);
