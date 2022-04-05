require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn purpose install case fox turn'; 
let testAccounts = [
"0xacaca91bdb2502d0366558bc8195ab61302627ac8bdd7232707bc01dee205bca",
"0x6475fb3ad044e83dcb8f380e6f4cdae692217618184847f1b7087e0aa1636a4f",
"0x5838d7135c933c352ed42b1aafca7e245d71204355c8945966b9fe56636206a0",
"0xc0fbee37c3c95ae140db9c58b1be21e5d43b92f69c19764ebb8a4b50a57f734e",
"0x80209c069718e2f946fffda1a38db7b358258de05be45f6495d7f8e74b61b401",
"0xc8c447ec0ab5585bc71cae119c1ed03a7415408cd6feed7a25eb3724b8e8000d",
"0x095a5e921489a11a4a9609c102a34ad58e1e98b2fc0e8874632319697d7da17b",
"0x5ad042eee9fabd0a50dbdbaf1b39af7aae5f08570214df62912fecef9ea6effb",
"0x2dba44ba9f9e33b6ee8c395e418ac37647cfda707983b1dfc650636c23462cba",
"0xc76b273e222dc3b1d7fb5822278f0c462db9481ccc6e0822ecdc6c08de562174"
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


