require("hardhat/types")
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.getAddress());
  }
});
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "eth_goerli",
  networks: {
    hardhat:{},
    eth_goerli:{
      url: 'https://rpc.ankr.com/eth_goerli',
      accounts: [`0x${"bf4d886238f63f44a219389d8cdff6b1314cf5c279d19f415e85b973b29aa518"}`]
    }
  }
};