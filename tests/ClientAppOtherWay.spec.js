const { test, expect } = require('@playwright/test');




test('Client App login Using Special Locators', async ({ page }) => {
//js file- Login js, DashboardPage
const email = "mantubaishak@gmail.com";
const productName = 'ZARA COAT 3';
const products = page.locator(".card-body");
await page.goto("https://rahulshettyacademy.com/client");
await page.getByPlaceholder("email@example.com").fill(email);
await page.getByPlaceholder("enter your passsword").fill("Saumya01");
await page.getByRole("button",{name:'Login'}).click();
await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();//component to wait

await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
.getByRole("button",{name: ' Add To Cart'}).click();

await page.getByRole("listitem").getByRole("button",{name: 'Cart'}).click();
await page.locator("div li").first().waitFor();//component to Wait

await expect (page.getByText("ZARA COAT 3")).toBeVisible();
await page.getByRole("button",{name:'Checkout'}).click();

await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:150});
await page.getByRole("button",{name:'India'}).nth(1).click();

await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.getByText("PLACE ORDER").click();

await expect (page.getByText("Thankyou for the order.")).toBeVisible();

});