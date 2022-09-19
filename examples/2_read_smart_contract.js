const { ethers } = require('ethers');
require('dotenv').config();

const INFURA_URL = process.env.INFURA_URL;
const provider = new ethers.providers.JsonRpcProvider(INFURA_URL);

const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint)',
];

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();
  console.log('name', name);
  console.log('symbol', symbol);
  console.log('totalSupply', totalSupply.toString());
  console.log('totalSupply in ether', ethers.utils.formatEther(totalSupply));
};

main();
