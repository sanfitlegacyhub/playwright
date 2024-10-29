import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    workers: 1,
    // fullyParallel: true,
    timeout: 90000,

    testMatch: [ 
        'tests/sequential/user.test.ts'

],
    use: {
        ignoreHTTPSErrors: true,
        headless: false,
        video: "on",
        screenshot: "on",
        // trace: 'on',
    },
    // reporter: [
    // ['html', {
    //     outputFolder: "Reports/login"
    // }],['html', {
    //     open: "never"
    // }]],
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report/sequential', open: 'never' }],
      ],
    
    


};

export default config
    

    