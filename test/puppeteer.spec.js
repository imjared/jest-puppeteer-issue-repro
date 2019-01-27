describe("Google", () => {
  beforeAll(async () => {
    await page.goto("https://google.com");
  });

  it('should display "Sign in" text on page', async () => {
    await page.waitFor("body");
    await expect(page).toMatch("Sign in");
  });
});
