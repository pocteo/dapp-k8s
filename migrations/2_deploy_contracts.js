var HelloPocteo = artifacts.require("HelloPocteo.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloPocteo);
};
