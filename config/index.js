const BN = require('bignumber.js')
const web3 = require('web3')

const all = {
  token: {
    pkt: {
      name: 'Play Kingdom Token',
      symbol: 'PKT',
      supply: web3.utils.toWei('1000000000', 'ether'),
      owner: '0x36648296feA07E2c79E680B54B9D5756cc120a63',
      pause: '0x0CC1006CF72F48fB981dccD06B454aB1fF1C7c3a',
    },
  },
}
module.exports = all