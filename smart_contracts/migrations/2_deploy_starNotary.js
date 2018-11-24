var StarNotary = artifacts.require("./StarNotary.sol");


module.exports = function(deployer) {
  deployer.deploy(StarNotary)
  // Option 2) Console log the address:
  .then(() => console.log('ENDERECOOOO', StarNotary.address))

  // Option 3) Retrieve the contract instance and get the address from that:
  .then(() => StarNotary.deployed())
  .then(_instance => console.log('_instance.address', _instance.address));
};
