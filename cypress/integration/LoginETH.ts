describe('My Fourth Test', function() {
    it('Visits localhost', function() {
        cy.visit('http://localhost:8888/')
        cy.wait(2000);

        let Mnemonic = "bench deliver laugh moon van salad become fitness crime glove pole destroy";
        let password = "ee";

        let startPlayingButton = cy.get('input[type=checkbox].startPlayBtnInput').eq(0);
            startPlayingButton.click();
        cy.wait(500);

        let SelectETH = cy.get('div.login-wallet-header').eq(1);
            SelectETH.click();

        let SelectETHTab = cy.get('div.login-wallet-header').eq(1);
            SelectETHTab.click();

        let SelectPK = cy.get('div.wallet_big_button.login-private-key');
            SelectPK.click();

        let UsingMnemonic = cy.get('div.wallet-login-key').eq(1);
            UsingMnemonic.click();

        cy.get('input[type=password]').eq(0)
            .type(Mnemonic)
        cy.get('input[type=password]').eq(1)
            .type(password)
        cy.get('input[type=password]').eq(2)
            .type(password)
        let ImportMnemonic = cy.get('button.wallet-login-btn');
            ImportMnemonic.click();

        cy.get('input[type=password]').eq(0)
            .type(password)
        let UnlockWallet = cy.get('button.wallet-login-btn');
            UnlockWallet.click();
    })
})