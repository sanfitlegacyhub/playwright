import type { PlaywrightTestConfig } from '@playwright/test';
 
const config: PlaywrightTestConfig = {
   
    workers: 1,
    timeout: 90000,
    testMatch: [
        "src/merge-reports.spec.ts"
         
   
],
    use: {
        ignoreHTTPSErrors: true,
        headless: false,
        video: "on",
        screenshot: "on",
    },
    reporter: [
    ['html', {
        outputFolder: "Reports/mergeReport"
    }],['html', {
        open: "never"
    }]],
   
 
 
};
 
export default config