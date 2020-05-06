import {Anonymous} from "../support/anonymous";
import * as player from "../support/player";

describe('Smoke test', () => {

    it('E-mail user can log in', () => {
        cy.fixture("emailUser").then(user => {
            cy.visit("/");
            Anonymous.login(cy, user.email, user.password);
            player.sendFirstToAdventure();
        });
    });
});