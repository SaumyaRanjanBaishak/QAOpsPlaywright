// @ts-check
import { devices } from '@playwright/test';
import { trace } from 'node:console';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config={
  testDir: './tests',
  timeout: 40*1000,

  expect:{
    timeout:40*1000
  },
  reporter: 'html',
  /* Run tests in files in parallel */
  use: {

    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on'
    //trace: 'retain-on-failure'


    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },

  
};

