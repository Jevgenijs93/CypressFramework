describe('My Third Test', function() {
    it('Visits localhost', function() {
        cy.visit('http://localhost:8888/')
        cy.wait(1000);

        let email = "elison.vihan@oolloo.org";
        let password = "E53jutos12";

        let startPlayingButton = cy.get('input[type=checkbox].startPlayBtnInput').eq(0);
        startPlayingButton.click();
        cy.wait(2000);

        cy.get('input[type=email]').eq(1)
            .type(email)
        cy.get('input[type=password]')
            .type(password)

        let LoginButton = cy.get("button.wallet-login-btn");
        LoginButton.click();

        cy.wait(2000);

        let ProfileButton = cy.get("div.ProfileHeader-clickarea");
        ProfileButton.click();

        let SignOutButton = cy.get("[data-click=profile-popup-signout]");
        SignOutButton.click({force: true, multiple: true});

    })
})