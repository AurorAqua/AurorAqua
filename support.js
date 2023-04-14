const sendBTTButton = document.querySelector('.sendBTTButton');
const bttAmountInput = document.querySelector('#bttAmountInput');

let accounts = [];

//Sending BTT to an address
sendBTTButton.addEventListener('click', () => {
const bttAmount = bttAmountInput.value;
ethereum
    .request({
    method: 'eth_sendTransaction',
    params: [
        {
        from: accounts[0],
        to: '0x18a2E07cb2F4a3b6ef0DDEfe965819C6e32745d7',
        value: '0x' + (bttAmount * 10**18).toString(16), // convert BTT amount to wei
        gasPrice: '111C20613D000', // 301,000 Gwei in Wei
        gas: '5398', // Gas limit of 214000
        chainId: '0x9A'
        },
    ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error(error));
});

bttButton.addEventListener('click', () => {
getAccount();
});