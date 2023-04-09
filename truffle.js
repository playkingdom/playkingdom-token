require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const config = require('./config/index')


module.exports = {
  networks: {
    localhost: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '5777',
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(env.bsc.mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
      network_id: 97,
    },
    bsc: {
      provider: () => new HDWalletProvider(env.bsc.mnemonic, 'https://bsc-dataseed1.binance.org'),
      network_id: 56,
    },
  },
  compilers: {
    solc: {
      version: '0.8.4',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
