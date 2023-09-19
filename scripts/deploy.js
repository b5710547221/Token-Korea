async function main() {
  const [deployer] = await ethers.getSigners();
  
  const accountBalance = await deployer.provider.getBalance(deployer.getAddress());
  console.log("Deploying contracts with the account:", deployer.getAddress());

  //const weiAmount = (await deployer.getBalance()).toString();
  
  console.log("Account balance:", (await ethers.formatEther(accountBalance)));

  // make sure to replace the "GoofyGoober" reference with your own ERC-20 name!
  const Token1 = await ethers.getContractFactory("Testing");
  const token = await Token1.deploy();
  await token.waitForDeployment();

  console.log("Token address:", token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});