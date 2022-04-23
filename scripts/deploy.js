const {ethers} = require("hardhat");

async function main() {
  const SuperMarioWorldOZ = await ethers.getContractFactory(
    "SuperMarioWorldOZ"
  );
  const superMarioWorldOZ = await SuperMarioWorldOZ.deploy(
    "SuperMarioWorldOZ",
    "SPRMOZ"
  );

  await superMarioWorldOZ.deployed();
  console.log("Success! Contract was deployed to: ", superMarioWorldOZ.address);

  await superMarioWorldOZ.mint(
    "https://ipfs.io/ipfs/QmWWM6mHEBzkuAcf7QNbJgMRWwWmB16K5Wc6BrFdvoBh5z"
  );

  console.log("NFT successfully minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
