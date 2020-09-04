
const hooks = require("./../hooks")

    let mainTitle = "h2"
    let pageName = "Sign Up"
    let userNameInput = "#username"
    let emailInput = "#email"
    let passwordInput = "#password"
    let confirmPasswordInput = "#confirm"
    let wordRecoveryPhraseCheckbox = "#seedcb"
    let pinCheckbox = "#pin"
    let wordRecoveryPhraseInput = "#seed"
    let testModeCheckbox = "#testmode"
    let createAccountButton = ".create-account-button"
    let userNameSuccessTick = ".username i"
    let emailSuccessTick = ".email i"
    let passwordSuccessTick = ".password i"
    let confirmPasswordSuccessTick = ".password-confirmation i"

  module.exports = {
      async  fillInUserData(userData) {
          await hooks.fillInInput(userNameInput, userData.name)
          await hooks.waitForElementIsVisible(userNameSuccessTick)
          await hooks.fillInInput(emailInput, 'some' + userData.email) //TODO: add random name generator
          await hooks.waitForElementIsVisible(emailSuccessTick)
          await hooks.fillInInput(passwordInput, userData.password)
          await hooks.waitForElementIsVisible(passwordSuccessTick)
          await hooks.fillInInput(confirmPasswordInput, userData.confirmPassword)
          await hooks.waitForElementIsVisible(confirmPasswordSuccessTick)


      },

      async selectTestModeCheckbox() {
          await hooks.clickElement(testModeCheckbox)

      },
      async selectPinCheckbox() {
          await hooks.clickElement(pinCheckbox)

      },
      async selectRecoveryPhraseCheckbox() {
          await hooks.clickElement(wordRecoveryPhraseCheckbox)
      },

      async fillInRecoveryPhraseInput(){
          // await hooks.waitForElementIsVisible(wordRecoveryPhraseInput)
          await hooks.fillInInput(wordRecoveryPhraseInput, process.env.WORD_RECOVERY_PHRASE)

      },

      async clickOnCreateAccountButton() {
          await hooks.clickElement(createAccountButton)

      },

      async verifySingUpPageIsDisplayed() {
          await hooks.verifyPageIsDisplayed(mainTitle, pageName)

      }
  }


