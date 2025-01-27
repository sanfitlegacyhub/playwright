import { Page, Locator, expect} from '@playwright/test';
import {Listner} from "../../utils/listner";
import { UserPage } from '../../pages/onprem/User-onprem';

import { isAwaitExpression } from 'typescript';
import { listeners } from 'process';

    export class ListnerPage {

        private page: Page;
        private Listener_Add: Locator;
        private Listeners: Locator;
        private Listener_Name : Locator;
        private FTP_Protocol : Locator;
        private Select_Protocol : Locator;
        private Port_Number : Locator;
        userPage: UserPage;

        constructor(page: Page) {
            this.page = page;
            this.userPage = new UserPage(page);

            //-----------------------------------  Listner page ------------------------------------- 
            this.Listener_Add = this.page.locator("//button[contains(text(),' Add ') and @type='submit']")
            this.Listeners = this.page.locator("//*[contains(text(),'Listeners')]");
            this.Listener_Name = this.page.locator("//label[@aria-label='Name']//following-sibling::div/input")
            this.FTP_Protocol= this.page.locator("//span[@title='FTP']")
            this.Select_Protocol = this.page.locator(`//label[@title='${Listner.Protocol}']`);
            this.Port_Number = this.page.locator("//label[@aria-label='Port']//following-sibling::div/input")
         }

     async AddHTTPListner(){
        await this.Listeners.isVisible();
        await this.Listeners.click();
        await this.userPage.Add.click();
        await this.Listener_Name.isVisible();
        await this.Listener_Name.fill(Listner.Protocol);
        await this.FTP_Protocol.isVisible()
        await this.FTP_Protocol.click()
        await expect(this.Select_Protocol).toBeVisible();  // This checks visibility and waits
        await this.Select_Protocol.click();  // Click the element after it's confirmed visible
        await this.Port_Number.isVisible()
        await this.Port_Number.fill(Listner.Listner_Port)
        await this.Listener_Add.click();
        await this.userPage.Updated_successful_message.isVisible();

 }


}
