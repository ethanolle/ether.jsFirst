const { ethers } = require('ethers');
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(
  process.env.INFURA_ROBSTEN,
);

const ERC20_ABI = [
  'function balanceOf(address) view returns (uint)',
  'function transfer(address to, uint amount) returns (bool)',
];

const account1 = '0xce2839133BB0F22584747676C2d9Ab7a8a3fFdef'; // Your account address 1
const account2 = '0xb02a2eda1b317fbd16760128836b0ac59b560e9d'; // Your account address 2

const privateKey1 = process.env.PRIVATE_KEY; // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);
const contract = new ethers.Contract(
  '0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
  ERC20_ABI,
  wallet,
);

const main = async () => {
  const balance = await contract.balanceOf(account1);
  console.log('balance', balance.toString());
  const contractWithWallet = contract.connect(wallet);

  await contractWithWallet.transfer(account2, balance);
  await tx.wait();
  console.log(tx);

  const senderBalanceAfter = await contract.balanceOf(account1);
  const recieverBalanceAfter = await contract.balanceOf(account2);

  console.log(
    `\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`,
  );
  console.log(
    `reciever balance after: ${ethers.utils.formatEther(
      recieverBalanceAfter,
    )}\n`,
  );
};

main();
