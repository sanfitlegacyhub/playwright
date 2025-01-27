import { Page, Locator,expect,test } from '@playwright/test';
// import { Page, Locator, } from '@playwright/test';
import { config } from 'import { user } from '../../utils/user';config';
import { HomePage } from '../pages/Homepageverification';
export class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;
    private User_Account: Locator;
    private Logout: Locator;
    private Login_page_message: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.locator('input[name="username"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.loginButton = this.page.locator("input[name='login']");
        this.errorMessage = this.page.locator('.error-message');
        this.User_Account = this.page.locator("//*[@title=\"Account\"]");
        this.Logout =  this.page.locator("//button[@class='user-menu__item'][contains(text(),' Logout ')]")
        this.Login_page_message =  this.page.locator("//*[contains(text(),'Log into your account')]")
        
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(config.username);
        await this.passwordInput.fill(config.password);
        await this.loginButton.click();
        
    
    }

    async Logout_UI(){

        await this.User_Account.isVisible();
        await this.User_Account.click();
        await this.Logout.isVisible();
        // await this.Logout.dblclick();
        // await this.page.waitForTimeout(20000);
        await this.Logout.dblclick();
        await this.User_Account.click();
        await this.Logout.dblclick();
        // await this.page.locator(this.Logout).scrollIntoViewIfNeeded().then(element => element.click());
        // await this.page.waitForTimeout(40000);
        // await this.Login_page_message.isVisible({timeout:20000});
        await expect(this.Login_page_message).toBeVisible({timeout:40000});
        // await this.page.waitForSelector(this.Login_page_message, { state: 'visible', timeout: 30000 });

        
        
        }
     
    async getErrorMessage() {
        await this.page.waitForSelector(this.errorMessage.toString());
        return await this.page.textContent(this.errorMessage.toString());
    }

    async open() {
        await this.page.goto(config.baseURL);
    }
}

