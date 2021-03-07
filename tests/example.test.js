const playwright = require('playwright')
const expect = require('chai').expect

describe("My first test", () =>{
    it('should launch the browser', async function() {
        
        const browser = await playwright.chromium.launch({headless: false, slowMo: 400, devtools: false})
        const page = await browser.newPage()
        await page.goto("https://logintest.onpraemium.com/auth/user/LoginOptions/")
        //await page.type('#Username', 'gor.nalbandyan')
        await page.waitForTimeout(1000)
        const title = await page.title()
        //const url = await page.url()
        console.log("Title: " + title)
        expect(title).to.be.equal( 'Login')
        
        //console.log('URL: ' + url)
        await browser.close()

    })
})