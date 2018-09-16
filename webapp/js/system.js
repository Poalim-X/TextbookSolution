var BankApp = window.BankApp || {};
BankApp.map = BankApp.map || {};

var authToken;

// on login and on refreshing page, need the TOKEN ready to do actions.
function loadLoginInfo() {
    BankApp.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
            $('.authToken').text(token);
        } else {
            window.location.href = '/index.html';
        }
    }).catch(function handleTokenError(error) {
        alert("error in auth " + error);
        window.location.href = '/index.html';
    });
}

// handle auth if in system - useful when refreshing page to reload token.
if  ((window.location.href.indexOf("bank-system-logged-in") > -1)) {
    console.log("logged in screen, loading auth creds");
    loadLoginInfo();
}