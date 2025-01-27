import { Page, Locator,expect,test } from '@playwright/test';

    export class HomePage {

        private page: Page;
        private welcomeTextSelector: Locator;
        private Listeners: Locator;
        private Users: Locator;
        private Actions: Locator;
        private Virtualfolders: Locator;
        private Logs: Locator;
        private Certificates: Locator;
        private Settings: Locator;
        private UIpermissions: Locator;
        private Assetmovement: Locator;
        private Databasearchival: Locator;
        private FSTP_Protocol: Locator;
        private HTTPS_Protocol: Locator;
        private SFTP_Protocol: Locator;
        private ftps_Litenr_url: Locator;
        private https_Litenr_url: Locator;
        private sftp_Litenr_url: Locator;
        private ftps_Litenr_enabled: Locator;
        private https_Litenr_enabled: Locator;
        private sftp_Litenr_enabled: Locator;
        private User_profile: Locator;
        private User_Accountsettings: Locator;
        private User_Account: Locator;
        private Logout: Locator;
       



    
        constructor(page: Page) {
            this.page = page;
// -----------------HomePage------------------
            this.welcomeTextSelector = this.page.locator("//div[h1[contains(text(),'Welcome to')]] | //div[span[contains(text(),'webMethods.io MF')]]");
            this.Listeners = this.page.locator(" //*[contains(text(),'Listeners')]");
            this.Users = this.page.locator(" //*[contains(text(),'Users')]");
            this.Actions = this.page.locator("//*[contains(text(),'Actions')]");
            this.Virtualfolders =  this.page.locator("//div[a[span[contains(text(),'Virtual folders')]]]");
            this.Logs = this.page.locator(" //*[contains(text(),'Logs')]");
            this.Certificates = this.page.locator(" //*[contains(text(),'Certificates')]");
            this.Settings = this.page.locator(" //*[contains(text(),'Settings')]");
            this.UIpermissions = this.page.locator(" //*[contains(text(),'UI permissions')]");
            this.Assetmovement = this.page.locator(" //*[contains(text(),'Asset movement')]");
            this.Databasearchival = this.page.locator(" //*[contains(text(),'Database archival')]");
//-----------------------------------  Listner page ------------------------------------- 
            this.FSTP_Protocol = this.page.locator("//td[contains(text(),' FTPS ')]");
            this.HTTPS_Protocol = this.page.locator("//td[contains(text(),' HTTPS ')]");
            this.SFTP_Protocol = this.page.locator("//td[contains(text(),' SFTP ')]");
            this.ftps_Litenr_url = this.page.locator("//*[@title=\"ftps://awdevtenant1.mft-aw-us.webmethods-dev.io:8990\"]")
            this.https_Litenr_url = this.page.locator("//*[@title=\"ftps://awdevtenant1.mft-aw-us.webmethods-dev.io:8990\"]")
            this.sftp_Litenr_url = this.page.locator("//*[@title=\"ftps://awdevtenant1.mft-aw-us.webmethods-dev.io:8990\"]")
            this.ftps_Litenr_enabled = this.page.locator("//tr[td[contains(text(),' ftps://awdevtenant1.mft-aw-us.webmethods-dev.io:8990 ')]]//following-sibling::td//descendant::span[contains(text(),'On')]")
            this.https_Litenr_enabled = this.page.locator("//tr[td[contains(text(),' https://awdevtenant1.mft-aw-us.webmethods-dev.io:8990 ')]]//following-sibling::td//descendant::span[contains(text(),'On')]")
            this.sftp_Litenr_enabled = this.page.locator("//tr[td[contains(text(),' sftp://awdevtenant1.mft-aw-us.webmethods-dev.io:8990 ')]]//following-sibling::td//descendant::span[contains(text(),'On')]")
//----------------------------------User_Account----------------------------------------------------------
            this.User_Account = this.page.locator("//*[@title=\"Account\"]");
            this.User_Accountsettings =  this.page.locator("//a[contains(text(),'Account settings')]");
            this.User_profile =  this.page.locator("//*[contains(text(),' Profile ')]")
            this.Logout =  this.page.locator("//button[contains(text(),'Logout')]")


        }
    
        async WelcomeHomePage() {
          await this.welcomeTextSelector.isVisible();
            // await expect(this.welcomeTextSelector).toBeVisible({ timeout: 50000 });
        }

        async VerifyAllLabes(){
            await this.Listeners.isVisible();
            await this.Users.isVisible();
            await this.Actions.isVisible();
            await this.Assetmovement.isVisible();
            await this.Logs.isVisible();
            await this.UIpermissions.isVisible();
            await this.Databasearchival.isVisible();
            await this.Virtualfolders.isVisible();
            await this.Certificates.isVisible();
            await expect(this.Settings).toBeVisible({ timeout: 50000 });
        }
    

        async VerifyListnerPage(){
            await this.Listeners.isVisible();
            await this.Listeners.click()
            await this.FSTP_Protocol.isVisible();
            await this.HTTPS_Protocol.isVisible();
            await this.SFTP_Protocol.isVisible();
            await this.sftp_Litenr_url.isVisible();
            await this.ftps_Litenr_url.isVisible();
            await this.https_Litenr_url.isVisible();
            await this.ftps_Litenr_enabled.isVisible();
            await this.https_Litenr_enabled.isVisible();
            await this.sftp_Litenr_enabled.isVisible();
            
        }

        async VerifyUserAccount(){
           
            await this.User_Account.isVisible();
            await this.User_Account.click();
            await this.User_profile.isVisible();
            await expect(this.User_profile).toBeVisible();
            await this.User_Accountsettings.isVisible();
            await expect(this.Logout).toBeVisible();
            
            
        }




}
