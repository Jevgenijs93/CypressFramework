describe('My Sixth Test', function () {
    it('Visits localhost', function () {
        cy.server();
        cy.route("GET", '/rest/1/telegram/member_count').as('landingCall');

        cy.visit('http://localhost:8888/');
        cy.wait('@landingCall');

        let password = "ee";


        let startPlayingButton = cy.get('input[type=checkbox].startPlayBtnInput').eq(0);
            startPlayingButton.click();
        cy.wait(500);

        let SelectETHTab = cy.get('div.login-wallet-header').eq(1);
            SelectETHTab.click();

        let SelectNewWallet = cy.get('div.wallet_big_button').eq(1);
            SelectNewWallet.click();

        let CopyMnemonic = cy.get('div.copy-phrase-link');
            CopyMnemonic.click();

        let ClickNext = cy.get('button.wallet-login-btn');
            ClickNext.click();

      /*  let ClickOnInput = cy.get('div.menmonic_word').eq(0).should('have.text', '1');
        ClickOnInput.click();

        navigator.clipboard.readText() .then(CopiedMnemonic => {
        cy.get('input[type=text]').eq(0)
        .type(CopiedMnemonic)});

      let EnterPassword1 = cy.get('div.wallet-input-container').eq(0);
          EnterPassword1.click().type(password);

      let EnterPassword2 = cy.get('div.wallet-input-container').eq(1);
          EnterPassword2.click().type(password);

      let CreateMyAccount  = cy.get('button.wallet-login-btn');
          CreateMyAccount.click(); */
    })
})