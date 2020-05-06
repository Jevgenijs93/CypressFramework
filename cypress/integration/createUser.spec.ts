import {Anonymous} from "../support/anonymous";
import * as player from "../support/player";

describe('Smoke test', () => {

    it('Creates e-mail user', () => {
        cy.server();
        cy.route('rest/1/telegram/member_count').as('getTelegramMembers');

        cy.visit("/");
        cy.wait("@getTelegramMembers");

        Anonymous.login(cy, "vasja@vasja.lv", "Bebebebe11+");
        player.sendFirstToAdventure();
    });
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger
    return false
});