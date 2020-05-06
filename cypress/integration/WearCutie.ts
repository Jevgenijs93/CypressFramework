describe('My Fifth Test', function () {
    it('Visits localhost', function () {
        cy.server();
        cy.route("POST", '/rest/1/inventory/cutie/usable').as('itemsCall');
        cy.route("POST", '/rest/1/pets').as('cutiesCall');

        cy.visit('http://localhost:8888/index')
        cy.wait(2000);

        let Mnemonic = "bench deliver laugh moon van salad become fitness crime glove pole destroy";
        let password = "ee";

        let startPlayingButton = cy.get('input[type=checkbox].startPlayBtnInput').eq(0);
        startPlayingButton.click();
        cy.wait(500);

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

        cy.wait('@cutiesCall');

        let ClickOnPet = cy.get('a[href="/pet/2175"]');
        ClickOnPet.click();
        cy.wait(1000);

        let ScrollToQuickSlots1 = cy.get('div.pet_section_content').eq(3);
        ScrollToQuickSlots1.scrollIntoView();

        let SelectWeapon = cy.get('div.slot_weapon');
        SelectWeapon.click({force: true});

        cy.wait('@itemsCall');

        let EquipFlySwatter = cy.get('img[src="/static/items/png/WeaponFlySwatter.png"].pet_card_image');
        EquipFlySwatter.click({force: true});

        cy.wait(1000);
        let ScrollToQuickSlots2 = cy.get('div.pet_section_content').eq(3);
        ScrollToQuickSlots2.scrollIntoView();
        cy.wait(500);

        let SelectHat = cy.get('div.slot_head');
        SelectHat.click({force: true});

        cy.wait('@itemsCall');

        let EquipHatJester = cy.get('img[src="/static/items/png/HatJester.png"].pet_card_image');
        EquipHatJester.click({force: true});

        cy.wait(1000);
        let ScrollToQuickSlots3 = cy.get('div.pet_section_content').eq(3);
        ScrollToQuickSlots3.scrollIntoView();
        cy.wait(500);

        let SelectBody = cy.get('div.slot_body');
        SelectBody.click({force: true});

        cy.wait('@itemsCall');

        let EquipNecklaceBiker = cy.get('img[src="/static/items/png/NecklaceBiker.png"].pet_card_image');
        EquipNecklaceBiker.click({force: true});

        cy.wait(1000);
        let ScrollToQuickSlots4 = cy.get('div.pet_section_content').eq(3);
        ScrollToQuickSlots4.scrollIntoView();
        cy.wait(500);

        let SelectBracelet = cy.get('div.slot_bracelet');
        SelectBracelet.click({force: true});

        cy.wait('@itemsCall');

        let EquipBraceletBiker = cy.get('img[src="/static/items/png/BraceletBiker.png"].pet_card_image');
        EquipBraceletBiker.click({force: true});

        cy.wait(1000);
        let ScrollToQuickSlots5 = cy.get('div.pet_section_content').eq(3);
        ScrollToQuickSlots5.scrollIntoView();
        cy.wait(500);

        let SelectAccessory = cy.get('div.slot_accessory');
        SelectAccessory.click({force: true});

        cy.wait('@itemsCall');

        let EquipNecklaceShipWheel = cy.get('img[src="/static/items/png/NecklaceShipWheel.png"].pet_card_image');
        EquipNecklaceShipWheel.click({force: true});

        cy.wait(1000);

        let ItemUse = cy.get('a[href="/pet_item_use/2175"]');
        ItemUse.click();

        let ViewItemList = cy.get('div#matron_container');
        ViewItemList.click({force: true});

        let SelectItemRemover = cy.get('img[src="/static/items/png/ItemRemover.png"');
        SelectItemRemover.click({force: true});

        let UseItem = cy.get('div#use_item_button');
        UseItem.click({force: true});

    })
})