const GetBalance = require('../getbalance');

describe("GetBalance", function() {
    it("return null when username does not exist", async function() {
        var balance = await GetBalance.get_balance_for_user("nonexist");
	expect (balance).toEqual(null);
    });

    it("return 100 for test user", async function() {
        var balance = await GetBalance.get_balance_for_user("TEST2-at-kashyoo.com");
	expect (balance).toEqual(100);
    });
});

