import { ethers } from "ethers";
import { getProvider } from "./getProvider.js";
import daiData from "./contracts/dai.js";

// Read the latest events of a contract
//
// Events are the logs of the Ethereum Network.
// We can listen and act to these events.
// Event are also a cheap way of storage.
//
// We are going to get the latest transfer events from the DAI stablecoin contract.
(async () => {
  const provider = await getProvider();

  // DAI stablecoin contract address
  const DaiContractAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";

  // Instantiate contract
  let daiContract = new ethers.Contract(
    DaiContractAddress,
    daiData.abi,
    provider
  );

  // We want to filter by the "Transfer" event.
  const transferFilter = daiContract.filters.Transfer();

  // Let's just get the latest 200 blocks, if omitted, it'll fetch all
  // the event from the beggining.
  const currentMainnetBlock = await provider.getBlockNumber();
  transferFilter.fromBlock = currentMainnetBlock - 200;
  transferFilter.toBlock = currentMainnetBlock;

  // Get the logs (with the filters applied)
  const transferLogs = await provider.getLogs(transferFilter);

  // Last event
  const lastTransferEvent = transferLogs.slice(-1)[0];

  console.log(
    "\tThere are",
    transferLogs.length,
    "DAI Transfer events in the last 200 blocks"
  );
  console.log(
    "\tThe last one happened on block",
    lastTransferEvent?.blockNumber,
    "from the address",
    lastTransferEvent?.address
  );
})();
