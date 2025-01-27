import { test, expect, Page, Browser, chromium, BrowserContext } from '@playwright/test';
import { user } from '../../../utils/user';
import { config1 } from '../../../utils/config';
import { LoginPage } from '../../../pages/onprem/Login';
import { UserPage } from '../../../pages/onprem/User-onprem';
import { ListnerPage } from '../../../pages/onprem/Listner-onprem';
import { Listner } from '../../../utils/listner';

test.describe.configure({ mode: 'parallel' });

// Configurations from imported files
const baseURL = config1.baseURL_OnPrem;
const username = config1.username_OnPrem;
const password = config1.password_OnPrem;

// User details
const USER_ID = user.USER_ID;
const First_Name = user.First_Name;
const Last_Name = user.Last_Name;
const Email_Address = user.Email_Address;
const Password = user.Password;
const Confirmpassword = user.Confirmpassword;

let browser: Browser;
let page: Page;
let userpage: UserPage;
let listnerpage: ListnerPage;
let context: BrowserContext;

test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('username', 'password');

});

test.afterAll(async () => {
    // Close the browser after all tests
    await browser.close();
});

test.beforeEach(async () => {
    // Recreate the UserPage instance before each test
    userpage = new UserPage(page);
    listnerpage = new ListnerPage(page)
});

// test.describe('adduser functionality', () => {
//     test('should add a user successfully', async () => {
//         // Perform the add user operation
//         await userpage.Adduser();
//     });
// });

test.describe('addListner  functionality', () => {
    test('should add a Listner successfully', async () => {
        // Perform the add user operation
        await listnerpage.AddHTTPListner();
    });
});


    // test('verify added user', async () => {
    //     // const userpage = new UserPage(page);
    //     await userpage.verfiyaddeduser(USER_ID);
    // });

    // test('delete added user', async () => {
    //     // const userpage = new UserPage(page);
    //     await userpage.deleteuser(USER_ID);
    // });

