import { defineConfig, devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const baseUse: PlaywrightTestConfig['use'] = {
  actionTimeout: 5000,
  baseURL: 'http://127.0.0.1:8080',
  headless: true,
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
  trace: 'retain-on-failure',
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  retries: 1,
  workers: 1,
  use: baseUse,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        ...baseUse,
      },
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        ...baseUse,
      },
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        ...baseUse,
      },
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        ...baseUse,
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
