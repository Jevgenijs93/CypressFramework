describe('My First Test', function() {
    it('Visits localhost', function() {
        cy.visit('http://localhost:8888/')
        cy.wait(1000);

       let email = "elison.vihan@oolloo.org";
       let password = "E53jutos12";

       let startPlayingButton = cy.get('input[type=checkbox].startPlayBtnInput').eq(0);
       startPlayingButton.click();
       cy.wait(500);

        cy.get('input[type=email]').eq(1)
            .type(email)
        cy.get('input[type=password]')
            .type(password)

        let LoginButton = cy.get("button.wallet-login-btn");
        LoginButton.click();

        cy.wait(2000);

        let ClickOnPet = cy.get('a[href="/pet/x64632"]');
        ClickOnPet.click();

        let SendOnAdventure = cy.get('button[data-click="single_pet_adventure_select_popup"]');
        SendOnAdventure.click();

        let WindyHills = cy.get('div.season-challanges-anim-bg.season-challenge-bg-WindyHills_overlay');
        WindyHills.click({force: true});

    //    let ProfileButton = cy.get("div.ProfileHeader-clickarea");
    //    ProfileButton.click();

      //  let SignOutButton = cy.get("[data-click=profile-popup-signout]");
      //  SignOutButton.click({force: true, multiple: true});
   //    let EditNameButton = cy.get('span.profile-popup-changename.changename-default');
    //   EditNameButton.click();
      //  cy.reload()

    })
})