import { test, expect,Page, Browser, chromium } from '@playwright/test';
// import { HomePage } from '../../pages/homepageverification';
import { user } from '../../utils/user';
import { config } from '../../utils/config';
import { ListnerPage } from '../../pages/Listner';
import { LoginPage } from '../../pages/Login_Logout';
import { UserPage } from '../../pages/User';
test.describe.configure({ mode: 'parallel' });
const baseURL = config.baseURL;
const username = config.username;
const password = config.password;
//user
const USER_ID = user.USER_ID;
const First_Name = user.First_Name;
const Last_Name = user.Last_Name;
const Email_Address = user.Email_Address;
const Password = user.Password;
const Confirmpassword = user.Confirmpassword;
let browser: Browser;
let page: Page;
let userpage;

test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('username', 'password');

});

test.beforeEach(async () => {
    // Create a new instance of UserPage before each describe block
    userpage = new UserPage(page);
});

test.describe('adduser ', () => {
    test('add user', async () => {
       
        // const userpage = new UserPage(page);
        await userpage.Adduser();
    });

    test('verify added user', async () => {
        // const userpage = new UserPage(page);
        await userpage.verfiyaddeduser(USER_ID);
    });

    test('delete added user', async () => {
        // const userpage = new UserPage(page);
        await userpage.deleteuser(USER_ID);
    });

});

