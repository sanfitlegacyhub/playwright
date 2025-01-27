import { Page, Locator } from '@playwright/test';

    export class ListnerPage {

        private page: Page;
        private FSTP_Protocol: Locator;
        private HTTPS_Protocol: Locator;
        private SFTP_Protocol: Locator;
        private ftps_Litenr_url: Locator;
        private https_Litenr_url: Locator;
        private sftp_Litenr_url: Locator;
        private ftps_Litenr_enabled: Locator;
        private https_Litenr_enabled: Locator;
        private sftp_Litenr_enabled: Locator;
        private Listeners: Locator;

        constructor(page: Page) {
            this.page = page;

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
            this.Listeners = this.page.locator("//*[contains(text(),'Listeners')]");
    
    
     }

            async VerifyListnerpagestuffs(){
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


}
