const Application = require('spectron')
const assert = require('assert')
let timeout = 30000



describe('Array',  async function () {

    it('Test1 ',  async function () {
        this.timeout(timeout)
        console.log('begin')
        const app = new Application.Application({

            path: 'C:/Users/Ievgen_Diachenko/AppData/Local/Programs/anatha-desktop-wallet/AnathaWallet.exe'

        })
        await app.start()
         console.log(await app.isRunning())
        // // Check if the window is visible
        // await app.stop()
        console.log('end')

    });
});