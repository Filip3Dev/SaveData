var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider( "https://ropsten.infura.io/v3/8628516a60934baf8786f20ea6740bf9")
      },
      network_id: 3
    }
  }
};
