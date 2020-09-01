const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');
const chromePath = require('chromedriver').path;


describe('Chrome driver Test', () => {

  it('opens a window', async() => {

      const Options = chrome.Options;
      const service = new chrome.ServiceBuilder(chromePath).build();
      chrome.setDefaultService(service);

      const driver = await new webdriver.Builder()
          .usingServer('http://localhost:9515')
          .setChromeOptions(new Options().excludeSwitches(["ignore-certificate-errors", chromePath]))
          .withCapabilities({
              chromeOptions: {
          // Here is the path to your Electron binary.
             binary: 'C:/Users/Ievgen_Diachenko/AppData/Local/Programs/anatha-desktop-wallet/AnathaWallet.exe',
            }
  })
          .forBrowser('chrome') // Per documentation should be "electron"
          .build();


      await driver.get('http://www.google.com')


});
});
