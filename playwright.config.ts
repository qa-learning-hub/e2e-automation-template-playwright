import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    baseURL: process.env.BASE_URL,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  workers: process.env.CI ? 2 : undefined,

  projects: [
    {
      name: 'API Tests',
      testMatch: /.*\.api\.spec\.ts/,
    },
    {
      name: 'UI Tests',
      testMatch: /.*\.spec\.ts/,
    },
  ],

  reporter: [['allure-playwright']],
});
