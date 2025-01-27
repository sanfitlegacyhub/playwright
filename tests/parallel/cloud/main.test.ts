import { test, Page, Browser, chromium} from '@playwright/test';
import { HomePage } from '../../pages/Homepageverification';
import { config } from '../../utils/config';
import { ListnerPage } from '../../pages/Listner';
import { LoginPage } from '../../pages/Login_Logout';
import { ActionPage } from '../../pages/Scheduled_action';
import { PostProcessingActionPage }from  '../../pages/Post_Processing_action'
test.describe.configure({ mode: 'parallel' });
const baseURL = config.baseURL;
const username = config.username;
const password = config.password;
let browser: Browser;
let page: Page;

test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('username', 'password');

});

test.describe.parallel('Smoke_Tests ', () => {
test('Verify home page functionality ', async () => {
   
    const homePage = new HomePage(page);
    await homePage.WelcomeHomePage();
});

test('Verify lables ', async () => {
   
    const homePage = new HomePage(page);
    await homePage.VerifyAllLabes();
});


test('Verify VerifyListnerPage', async () => {
    
    const homePage = new HomePage(page);
    await homePage.VerifyListnerPage();

});


test('User_Account_Verify', async () => {
   
    const homePage = new HomePage(page);
    await homePage.VerifyUserAccount();
    
});


test('VerifyListnerpagestuffs', async () => {
   
    const listnerpage = new ListnerPage(page);
    await listnerpage.VerifyListnerpagestuffs();
    await page.screenshot({ path: 'screenshot4.png' });
    try {
        await listnerpage.VerifyListnerpagestuffs();
        await page.screenshot({ path: 'screenshot4.png' });
        console.log('Screenshot captured successfully.');
      } catch (error) {
        console.error('Error capturing screenshot:', error);
      }
});

test('Logout_UI', async () => {
   
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.Logout_UI();
    await page.screenshot({ path: 'screenshot3.png' });
    await homePage.WelcomeHomePage()
    
});


test('Add schedule Action', async () => {
   
    const actionPage = new ActionPage(page);
    await actionPage.AddAction();
    
});


test('Add_Post_proccessiing_Action', async () => {
   
    const postprocessingpage = new PostProcessingActionPage(page);
    await postprocessingpage.Add_Post_Processing_Action();
    
});

});

