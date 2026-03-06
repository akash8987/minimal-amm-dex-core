const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Replace with actual ERC20 addresses for testing
  const TOKEN0_ADDRESS = "0x..."; 
  const TOKEN1_ADDRESS = "0x...";

  const SimpleDEX = await hre.ethers.getContractFactory("SimpleDEX");
  const dex = await SimpleDEX.deploy(TOKEN0_ADDRESS, TOKEN1_ADDRESS);

  await dex.waitForDeployment();

  console.log("SimpleDEX deployed to:", await dex.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
