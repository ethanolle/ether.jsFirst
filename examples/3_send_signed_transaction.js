const { ethers } = require('ethers');
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(
  process.env.INFURA_ROBSTEN,
);

const account1 = '0xce2839133BB0F22584747676C2d9Ab7a8a3fFdef'; // Your account address 1
const account2 = '0xb02a2eda1b317fbd16760128836b0ac59b560e9d'; // Your account address 2

const privateKey1 = process.env.PRIVATE_KEY; // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
  // get balance of account 1 and 2
  const balance1 = await provider.getBalance(account1);
  const balance2 = await provider.getBalance(account2);
  console.log('balance1', ethers.utils.formatEther(balance1));
  console.log('balance2', ethers.utils.formatEther(balance2));
  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther('0.025'),
  });

  await tx.wait();
  console.log(tx);

  const senderBalanceAfter = await provider.getBalance(account1);
  const recieverBalanceAfter = await provider.getBalance(account2);

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
