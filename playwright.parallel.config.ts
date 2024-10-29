// import type { PlaywrightTestConfig } from '@playwright/test';
import type {defineConfig ,PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    workers: 3,
    // fullyParallel: true,
    timeout: 90000,
    

    testMatch: [ 
        'tests/parallel/main.test.ts'
],
    use: {
        ignoreHTTPSErrors: true,
        headless: false,
        // video: "on",
        // screenshot: "on",
        // trace: 'on',
        // trace: 'on-first-retry',
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
        // outputDir: 'allure-results/parallel',
    },
    // reporter: [
    // ['html', {
    //     outputFolder: "Reports/login"
    // }],['html', {
    //     open: "never"
    // }]],
    // reporter: [['list'], ['allure-playwright']],
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report/parallel', open: 'never' }],
      ],



};

export default config
    

    