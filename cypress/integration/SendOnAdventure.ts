describe('My Second Test', function() {
    it('Visits localhost', function () {
        cy.server();
        cy.route("POST", '/rest/1/pets').as('PetsCall');
        cy.route("POST", '/rest/1/activities').as('ActivitiesCall');

        cy.visit('http://localhost:8888/index')
        cy.wait(2000);

        let email = 'elison.vihan@oolloo.org';
        let password = "E53jutos12";

        let startPlayingButton = cy.get('input[type=checkbox].startPlayBtnInput').eq(0);
            startPlayingButton.click();
        cy.wait(2000);

        cy.get('input[type=email]').eq(0)
            .type(email)
        cy.get('input[type=password]')
            .type(password)

        let LoginButton = cy.get("button.wallet-login-btn");
            LoginButton.click();
        cy.wait('@PetsCall');

        let ClickOnPet = cy.get('a[href="/pet/x64632"]');
            ClickOnPet.click();

        let SendOnAdventure = cy.get('button[data-click="single_pet_adventure_select_popup"]');
            SendOnAdventure.click();

        let WindyHills = cy.get('div.season-challanges-anim-bg.season-challenge-bg-WindyHills_overlay');
            WindyHills.click({force: true});

        let ClickOnActivities = cy.get('a[href="/activity"]').eq(1);
            ClickOnActivities.click({force: true});
            cy.wait('@ActivitiesCall');

        let ClickOnReport = cy.get('span[data-click="battle_log_popup"]').eq(0);
            ClickOnReport.click({force: true});
            cy.wait(2000);

        cy.get('div.battlelog-popup-header-data').should('contain.text', 'Adventure report:Windy Hills');

        cy.log('**TEST 1 PASSED**');

        let ClickOnCuties = cy.get('div.header-login-menu-icon').eq(1);
        ClickOnCuties.click({force: true});
        cy.wait('@PetsCall');

        let ClickOnPet1 = cy.get('a[href="/pet/x64632"]');
        ClickOnPet1.click({multiple: true, force: true});

        cy.get('span.pet_header_details_cond.adventure_tooltip').should('contain.text', "Hefty");

        cy.log('**TEST 2 PASSED**');

        let ItemUse1 = cy.get('span.button-icon').eq(2);
        ItemUse1.click({force: true});

        let ViewItemList1 = cy.get('div#matron_container');
        ViewItemList1.click({force: true});

        let SelectAdventurePotion = cy.get('img[src="/static/items/png/ElixirAdventure.png"');
        SelectAdventurePotion.click({force: true});

        let UseItem = cy.get('div#use_item_button');
        UseItem.click({force: true});
        cy.wait(2000);

        let ClickOnActivities1 = cy.get('a[href="/activity"]').eq(1);
        ClickOnActivities1.click({force: true});
        cy.wait('@ActivitiesCall');

        cy.get('span.battle-log-text').eq(0).should('contain.text', "You used an item 'Adventure Potion' on 'Intro cutie'.");

        cy.log('**TEST 3 PASSED**');

        let ClickOnCuties1 = cy.get('div.header-login-menu-icon').eq(1);
        ClickOnCuties1.click({force: true});
        cy.wait('@PetsCall');

        let ClickOnPet2 = cy.get('a[href="/pet/x64632"]');
        ClickOnPet2.click({multiple: true, force: true});

        cy.get('span.pet_header_details_cond.adventure_tooltip').should('contain.text', "Hard");

        cy.log('**TEST 4 PASSED**');

        let ItemUse2 = cy.get('a[href="/pet_item_use/x64632"]');
        ItemUse2.click();

        let ViewItemList2 = cy.get('div#matron_container');
        ViewItemList2.click({force: true});

        let SelectEnergyElixir = cy.get('img[src="/static/items/png/ElixirEnergy.png"');
        SelectEnergyElixir.click({force: true});

        let UseItem2 = cy.get('div#use_item_button');
        UseItem2.click({force: true});
        cy.wait(2000);

        let ClickOnActivities2 = cy.get('a[href="/activity"]').eq(1);
        ClickOnActivities2.click({force: true});
        cy.wait('@ActivitiesCall');

        cy.get('span.battle-log-text').eq(0).should('contain.text', "You used an item 'Cutenergy Drink' on 'Intro cutie'.");

        cy.log('**TEST 5 PASSED**');

        let ClickOnCuties2 = cy.get('div.header-login-menu-icon').eq(1);
        ClickOnCuties2.click({force: true});
        cy.wait('@PetsCall');

        let ClickOnPet3 = cy.get('a[href="/pet/x64632"]');
        ClickOnPet3.click({multiple: true, force: true});

        cy.get('button[data-click="single_pet_adventure_select_popup"]').should('contain.text', 'Send on an adventure');

        cy.log('**TEST 6 PASSED**');

    })
})