const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    mumbai: {
    	provider: () => new HDWalletProvider(mnemonic, `https://matic-mumbai.chainstacklabs.com`),
    	network_id: 80001,
    	confirmations: 2,
    },
  }
};
