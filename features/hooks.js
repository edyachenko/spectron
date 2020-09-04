"use-strict";
const Application = require('spectron').Application;
require("cucumber-assert")
require('dotenv').config();
const assert = require("chai").assert
let app, client;

module.exports = {
    async startApp() {
        app = await new Application({
            waitTimeout: process.env.TIMEOUT,
            path: process.env.PATH_TO_WALLET_EXE
        })
        //testUser123@#$%^&

        await app.start()
        client = app.client
        return app;
    },

    async stopApp() {
        if (await app.isRunning()) {
            await app.stop();
        }
    },

     getElementByCssSelector(selector) {
        return  client.element(selector)
    },

    async waitForElementIsVisible(selector) {
        await client.waitForVisible(selector)

    },
    async clickElement(selector) {
        await this.getElementByCssSelector(selector).click()
    },
    async fillInInput(selector, value) {
        await this.getElementByCssSelector(selector).setValue(value)
        // await this.verifyTextIsEntered(selector, value)
    },

    async verifyTextIsEntered(selector, value){
        //TODO: add verification

    },

    async verifyPageIsDisplayed(selector,value){
        await client.waitForVisible(selector, process.env.TIMEOUT)
        //     true, 'Page is not displayed')


    },
    // for debug purpose only and for quick test writing
    async sleep(sec) {
        return new Promise(resolve => setTimeout(resolve, sec * 1000));
    }

};
