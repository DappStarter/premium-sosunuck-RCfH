require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note soap unveil install inhale flee strike'; 
let testAccounts = [
"0x366c2c7d9361294665b3f53ff800dcbdb0b6bf7b2c33c6aa06400c6599619d77",
"0x3e7d0e64fec6f9dc2baa767ff65dd7ef8b8b5776d6a90d9dde568f0719a2f954",
"0x892be454c5c4adfc86bf1b8a9fbb629263771bf7415a052e681a43601d0ca465",
"0x2df1eb59ad86416f73bcb26ac87352d5ead218b5e2536cb340a6983f4f27b147",
"0xe156f51d9a403266bc131f7f09c37598d1c1569d963a112ff30974f4e4b869a4",
"0x2b2074aad42d5eedbd9716f27e7d0ac9f2d47f20d56395eed13ecd14048e5f0e",
"0xaa30ca76a3b54fa28dfd561419569c09c30bd1148dbd6eb9b1e23977e425f97d",
"0x7930a80b25f6da193668b650edbea973031533f28312d147ed544b44a5c6ca36",
"0x567761955a7e61e4900a11b255fa1d4cd4af13b2ce3afef75e94158237782ddc",
"0xc955ee1fce2919d3aca2043ea2e89818b7f0ebf7e037b832027e963d8225ee4c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


