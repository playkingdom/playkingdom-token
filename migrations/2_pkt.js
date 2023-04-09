const config = require('../config/index')

const PKT = artifacts.require('PKT');

module.exports = async (deployer, network) => {
  await deployer.deploy(
    PKT,
    config.token.pkt.name,
    config.token.pkt.symbol,
    config.token.pkt.supply,

    config.token.pkt.owner,
    config.token.pkt.pause,
  );
  const pktToken = await PKT.deployed();


  if (network !== 'localhost') {
    const transferOwner = await pktToken.transferOwnership(config.token.pkt.owner)
    const tokenOwner = await pktToken.owner()
  }
};
