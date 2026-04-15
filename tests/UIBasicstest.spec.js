const {test,expect}= require('@playwright/test')

test('First Playwright test', async ({page})=>{
const cardTitles=page.locator(".card-body a");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
//await expect(page).toHaveTitle("Google");
await page.locator('input#username').fill("rahulshettyacademy");
await page.locator("[name='password']").fill("Learning@830$3mK2");
await page.locator("#signInBtn").click();
//extract the text
//console.log(await page.locator("[style*='block']").textContent());
//Assertions
//await expect(page.locator("[style*='block']")).toContainText('Incorrect');

console.log(await cardTitles.nth(0).textContent());

const allTitles=await cardTitles.allTextContents();
console.log(allTitles);
 





});

test('Child Window Handle', async ({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    const userName=page.locator('input#username');
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink=page.locator("[href*='documents-request']");

    const [newPage]=await Promise.all([
    context.waitForEvent('page'),//listen for any new page
    documentLink.click(),//new page is opened
    ])
    const text=await newPage.locator("[class='im-para red']").textContent();
    const arrayText=text.split("@");
    const domain=arrayText[1].split("")[0];
    console.log(domain);

    await page.locator("#username").fill(domain);
    await page.pause();
    console.log(await page.locator("#username").textContent());







});
