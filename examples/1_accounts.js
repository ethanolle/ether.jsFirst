const { ethers } = require('ethers');
require('dotenv').config();

// set provider with the url from infura https://mainnet.infura.io/v3/4d109860d5f14c35af7655453e88d1d3
const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);

async function main() {
  const balance = await provider.getBalance(
    '0xe688b84b23f322a994A53dbF8E15FA82CDB71127',
  );
  console.log('balance', ethers.utils.formatEther(balance));
}

main();
