"use strict";

const {Given, When, Then, Before, After, BeforeAll, AfterAll,} = require("cucumber");
const {setDefaultTimeout} = require("cucumber")
let expect = require('chai').expect
setDefaultTimeout(15*1000);
let app, rippleWalletAddress;
const assert = require("assert");
const hooks = require("./../hooks")
let signUpPage = require("./../pages/SignUpPage")
let userData = require("./../fixtures/userdata.json")


Before(async function (){
    app = await hooks.startApp()
})

After(async function (){
    await hooks.stopApp()

})

When(/^I create account$/, async function () {

    await signUpPage.verifySingUpPageIsDisplayed()
    await signUpPage.fillInUserData(userData)
    await signUpPage.selectRecoveryPhraseCheckbox()
    await hooks.sleep(1)
    await signUpPage.fillInRecoveryPhraseInput()
    await hooks.sleep(1)
    await signUpPage.clickOnCreateAccountButton()
    await hooks.sleep(1)

});
Then(/^I wait for Chart Pie is loaded$/, {timeout: 150 * 1000}, async function () {
    //verify portfolio page is displayed
    let title = await app.client.element(".sub-nav--bottom--item-label").getText()
    expect(title).to.equal("COMPOSITION")

    // wait for chart pie is loaded
    await app.client.waitForVisible(".LogoLoading--md", 120*1000, true)
    await hooks.sleep(1)
    await hooks.waitForElementIsVisible('.recharts-pie')
    await hooks.sleep(1)

});
When(/^I open Menu$/, async function () {

    await hooks.sleep(1)
    await hooks.clickElement(".OffCanvasMenu button")


});
When(/^I open Wallet$/, async function () {
    await hooks.sleep(1)
    await hooks.waitForElementIsVisible(".OffCanvasMenu__list a[href='#/wallet/assets']")

    await hooks.clickElement(".OffCanvasMenu__list a[href='#/wallet/assets']")


});
When(/^I open Ripple Asset$/, async function () {

    await hooks.sleep(1)

    let title = await app.client.element("h2").getText()
    await hooks.sleep(1)

    expect(title).to.equal("ASSETS")
    await hooks.sleep(1)
    await app.client.element("img[alt='Ripple']").click()

    await hooks.sleep(1)

});
Then(/^I receive Address Text$/, async function () {
    await hooks.clickElement('i.icon-receive')
    await hooks.sleep(1)
    rippleWalletAddress = await app.client.element(".ReceiveView__addressText").getValue()
    console.log(rippleWalletAddress)
    await app.client.keys('Escape')


});
When(/^I send information$/, async function () {

    await hooks.sleep(1)
    await hooks.clickElement('i.icon-send')
    await hooks.sleep(1)
    await hooks.fillInInput("input[name='rawAddress']", rippleWalletAddress)
    await hooks.sleep(1)
    await hooks.fillInInput(".AmountInput__textInput", '0.01')
    await hooks.sleep(1)
    await hooks.clickElement('.ExchangeButton')
    await hooks.sleep(2)
    await hooks.clickElement('.ExchangeButton')
    await hooks.sleep(2)



});
Then(/^verify something$/, async function () {
    expect(await hooks.getElementByCssSelector("h4").getText()).to.equal("SEND COMPLETE")

});
//just to fail test
Then(/^Something is false$/, function () {
    expect(true).to.equal(false)

});
Then(/^Some system issue$/, async function () {

    await hooks.getElementByCssSelector("abracodabra").getText()

});