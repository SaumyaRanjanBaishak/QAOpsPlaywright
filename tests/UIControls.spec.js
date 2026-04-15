const { test, expect } = require('@playwright/test');




test('UI Controls', async ({ page }) => {

const documentLink=page.locator("[href*='documents-request']");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
//await expect(page).toHaveTitle("Google");
await page.locator('input#username').fill("rahulshettyacademy");
await page.locator("[name='password']").fill("Learning@830$3mK2");

//dropdown
const dropdown=page.locator("select.form-control");
await dropdown.selectOption("consult");

//radio button
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();

//Assertions
console.log(await page.locator(".radiotextsty").last().isChecked());
await expect(page.locator(".radiotextsty").last()).toBeChecked();

//checkbox
await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy();

await expect(documentLink).toHaveAttribute("class","blinkingText");

//await page.pause();

});