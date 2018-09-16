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

// show user's current balance in account
function getBalance() {
    console.log("getting balance with token " + authToken);
    $.ajax({
        method: 'POST',                     
        url: _config.api.invokeUrl + "/getaccountbalance",           
        headers: {
            Authorization: authToken
        },
        contentType: 'application/json',
        success: successGetBalance,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
        console.error('Error requesting balance: ', textStatus, ', Details: ', errorThrown);
        console.error('Response: ', jqXHR.responseText);
        alert('error getting balance ' + jqXHR.responseText);
        }
    });
}

// show result after JSON returns
function successGetBalance(result) {
    console.log("getting balance event finished. result: ")
    console.log(result);
    alert("Your balance is " + result.CurrentBalance);
}

// handle auth if in system - useful when refreshing page to reload token.
if  ((window.location.href.indexOf("bank-system-logged-in") > -1)) {
    console.log("logged in screen, loading auth creds");
    loadLoginInfo();
}