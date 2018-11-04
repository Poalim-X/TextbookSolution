const Account = require('../account');

describe("Account", function() {
    beforeAll(async function() {
        await Account.ensure_account_exists("TEST2-at-kashyoo.com");
    });

    it("return null when username does not exist", async function() {
        var balance = await Account.get_balance_for_user("nonexist");
	expect (balance).toEqual(null);
    });

    it("return 7000 for test user", async function() {
        var balance = await Account.get_balance_for_user("TEST2-at-kashyoo.com");
	expect (balance).toEqual(7000);
    });
});

