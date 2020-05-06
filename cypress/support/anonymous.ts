export class Anonymous {

    static LOGIN_BUTTON = "div.landingLogIn.ripple-button";
    static XP_SIGN_UP_LINK = "div.wallet-login-key span";

    static LOGIN_CALL = "/rest/1/login";

    static byName(cy: Cypress.cy, name: string) {
        return cy.get("input[name='" + name + "']");
    }

    createGameAccount(cy: Cypress.cy, email: string, password:string) {
        let emailField = Anonymous.byName(cy, "email");
        emailField.type(email);

        let passwordField = Anonymous.byName(cy, "password");
        passwordField.type(password);

        let repeatPasswordField = Anonymous.byName(cy, "repeatPassword");
        repeatPasswordField.type(password);

        let createAccountButton = cy.get("button.wallet-login-btn");
        createAccountButton.click();
    }

    static login(cy: Cypress.cy, email: string, password: string) {
        cy.route('POST', Anonymous.LOGIN_CALL).as('loginCall');

        cy.get(Anonymous.LOGIN_BUTTON)
            .click();

        cy.wait(500);

        Anonymous.byName(cy, "email")
            .type(email);

        cy.get("input[type=password]")
            .type(password);

        cy.get("button.wallet-login-btn")
            .click();

        cy.wait('@loginCall')
            .should((response) => {
                expect(response.method).to.equal('POST');
                expect(response.responseBody).to.have.property("result", "Ok");
            })
    }
}
//result: "EmailOrPassInvalid"