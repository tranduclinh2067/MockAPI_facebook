const mockAPI = 'http://localhost:8488/user';

(function start() {
    handleAccound();
})();

function getAccount(data) {

    options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }

    fetch(mockAPI, options)
        .then ( response => response.json())
};

function consoleAccount (consoles) {
    console.log(consoles.map(consolE => (consolE.id)));
}

function handleAccound () {
    const loginButton = document.querySelector('#login');

    loginButton.onclick = function () {
        const account = document.querySelector('input[name="account').value;
        const password = document.querySelector('input[name="password').value;
        
        const formData = {
            account: account,
            password: password
        }

        console.log(account.length);
        if (account.length > 8 && password.length > 8) {
            getAccount(formData);
        }
        else console.log("Ký tự tối thiểu phải lớn hơn 8");

    }
}