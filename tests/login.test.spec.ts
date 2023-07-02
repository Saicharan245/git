import { test, expect, chromium } from '@playwright/test';

test('Login test demo', async () => {
    const browser = await chromium.launch({
        headless:false
    });
    const context = await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle= 'dropdown']//span[contains(.,'My account')] ")
    await page.click("text=Login")

    await page.fill("input[name='email']", "chakisai111@gmail.com")

     await page.fill("input[name='password']", "Nagamani09@")
     await page.click("input[value='Login']");
     await page.waitForTimeout(5000);



})
test("handling dropdown", async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        // label: "Tuesday"
        // value: "Friday"
        index: 5
    })
    await page.waitForTimeout(3000);

    await page.selectOption("#multi-select", [
        {
            label: "Texas"
        }, {
            index: 2
        }, {
            value: "Washington"
        }
    ])
})

test.only("Bootstrap dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("South Africa");
    // await page.waitForTimeout(3000)

    async function selectCountry(countryName) {
        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
            .locator("li", {
                hasText: countryName
            }).click();
    }
})

test('verify',async({page})=>{
await page.goto("https://www.demoblaze.com/index.html");
 const pageTitle= await page.title();
 console.log('page title is:',pageTitle);
 await expect(page).toHaveTitle('STORE');

})

test('Verify the script',async({ page })=>{
   await page.goto("https://naveenautomationlabs.com/");
   const pageHeader= await page.title();
   console.log("Page title is :",pageHeader);
   await expect(page).toHaveTitle('Welcome to Naveen AutomationLabs - naveen automationlabs');

    }

)