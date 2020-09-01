'use strict';

const {Given, When, Then} = require('cucumber');
const assert = require('assert');
const Application = require('spectron')
let app;

Given(/^I open application$/, {timeout: 100*1000}, async function () {

     app = await new Application.Application({
        path: 'C:/Users/Ievgen_Diachenko/AppData/Local/Programs/anatha-desktop-wallet/AnathaWallet.exe'
    })
    await app.start()
   console.log(await app.client.waitForVisible('h2',5000))
    await app.client.waitForVisible('h2',5000)
    assert.equal(true, await app.isRunning())


});
When(/^Click on Sing in button$/, async function () {

    app.client.element('#username').setValue('Testing')
    app.client.element(".create-account-button").click()

});
Then(/^Error pop up is displayed$/,{timeout: 100*1000}, async function () {

    let checkIcon = '.username i'
    await app.client.waitForVisible(checkIcon, 10000)
    let isVisible = await app.client.isVisible(checkIcon)
    assert.equal(isVisible, true)
    app.stop()

});