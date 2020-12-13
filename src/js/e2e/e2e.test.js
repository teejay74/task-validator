import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('Validate Widget ', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: true,
      slowMo: 100,
      devtools: false,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  describe('Credit Card Validator ', () => {
    test('Check class "valid"', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[id=validate_form]');
      const input = await form.$('[id=validate_input]');
      await input.type('0604598628026554');
      const submit = await form.$('[id=validate_button]');
      submit.click();
      await page.waitForSelector('[id=validate_input].valid');
    });
    test('Check class "invalid"', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[id=validate_form]');
      const input = await form.$('[id=validate_input]');
      await input.type('5698462416546546');
      const submit = await form.$('[id=validate_button]');
      submit.click();
      await page.waitForSelector('[id=validate_input].invalid');
    });
  });
});
