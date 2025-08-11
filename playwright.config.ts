import { PlaywrightTestConfig } from '@playwright/test';

const Testconfig : PlaywrightTestConfig = ({
  use: {
    baseURL: 'https://ecommerce-playground.lambdatest.io/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter : [["json", {
    outputFile : "Reports/JsonReport.json"
  }],
    ["html", {
      outputFile : "Reports/HtmlReport.html",
      open : "never",
    }]],

  testDir: './tests',
  // testMatch : ['tests/frames.spec.ts'],
  retries: 0,
});

export default Testconfig;
