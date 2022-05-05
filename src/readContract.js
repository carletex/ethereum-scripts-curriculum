import { ethers } from "ethers";
import { getProvider } from "./getProvider.js";
import loogiesData from "./contracts/loogies.js";

// Call a read-only function of a contract
//
// We are going to use the Loogie NFT contract.
// We want to get who is the owner of the first token
(async () => {
  const provider = await getProvider();

  // Loogie contract address
  const contractAddress = "0xe203cdc6011879cde80c6a1dcf322489e4786eb3";

  // The Loogie ABI (application binary interface),
  // This interface allows us call smart contracts functions and get data back
  // from them, encoding/decoding bytecode data.
  //
  // You can get the ABI from verified contract on Etherscan:
  // https://etherscan.io/address/0xe203cdc6011879cde80c6a1dcf322489e4786eb3#code
  const loogiesAbi = loogiesData.abi;

  // Connect to the contract.
  // We connect to the Contract using a Provider, so we will only
  // have read-only access to the Contract
  let loggiesContract = new ethers.Contract(
    contractAddress,
    loogiesAbi,
    provider
  );

  // Call the ownerOf function to get the owner of a given token
  const owner = await loggiesContract.ownerOf(1);

  console.log("\tThe owner of the Loogie NFT nº1 is:", owner);
})();
