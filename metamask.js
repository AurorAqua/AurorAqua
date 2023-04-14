const bttButton = document.querySelector('.enableBTTButton');

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  }