import { test, expect,Page, Browser, chromium, BrowserContext,Locator } from '@playwright/test';
import {user} from "../../utils/user";
// import { user } from '../../utils/user';
const USER_ID = user.USER_ID;

    export class UserPage {

        private page: Page;private Users: Locator;private SubUsers: Locator;Add: Locator;private USER_ID: Locator;private First_Name: Locator;private Last_Name: Locator;private Email_Address: Locator;
        private CreatePassword: Locator;private Ok_Button: Locator; private Password: Locator; private Confirmpassword: Locator; private Add_to_user_list: Locator; private Create: Locator; private Security_warning: Locator;
        private Security_warning_message: Locator;private Filters: Locator;private Apply: Locator;private Filters_checkbox_userid: Locator;private Delete: Locator;private Delete_users_box_text: Locator;private Delete_box_text_confirmation_message: Locator;
        private Delete_successful_message: Locator;private Users_page_Basic: Locator; private Change_Password: Locator;private Associated_partner:Locator;private Upload_preferences:Locator;private Download_preferences:Locator;
        private Active_time_window:Locator;private File_name_filters:Locator;private Block_paths_matching_these_patterns:Locator;private Authentication_and_login:Locator;private Trusted_Public_SSH_key_alias:Locator;
        private Connection:Locator;private File_based_encryption:Locator;private Public_PGP_Key_alias:Locator;private File_based_decryption:Locator;private Private_PGP_Key_alias;
        private Save_and_Close:Locator;Updated_successful_message:Locator;filters_checkbox:Locator;
        
        constructor(page: Page) {
            this.page = page;

            //-----------------------------------  User page ------------------------------------- 
            this.Users = this.page.locator("//*[contains(text(),'Users')]");
            this.SubUsers = this.page.locator("//a[span[contains(text(),'Users')]]");
            this.Add = this.page.locator('//button[contains(normalize-space(), "Add") and not(@aria-hidden="true") and not(ancestor::*[@aria-hidden="true"])]');
            this.USER_ID = this.page.locator("//label[@aria-label='User ID']//following-sibling::div/input")
            this.First_Name = this.page.locator("//label[@aria-label='First name']//following-sibling::div/input")
            this.Last_Name = this.page.locator("//label[@aria-label='Last name']//following-sibling::div/input")
            this.Email_Address = this.page.locator("//label[@aria-label='Email address']//following-sibling::div/input")
            this.CreatePassword = this.page.locator("//label[contains(text(), 'Create new password')]")
            this.Security_warning= this.page.locator("//*[contains(text(),'Security warning')]")
            this.Security_warning_message= this.page.locator("//p[contains(text(),'Your password will be sent in an unencrypted plain-text email. As a security best practice, it is recommended to use the Send password link option. Generate random password and Create new password options will be deprecated in future releases.')]")
            this.Ok_Button = this.page.locator("//button[contains(text(),'Ok ')]")
            this.Password = this.page.locator("//label[@aria-label='Password']//following-sibling::div/input")
            this.Confirmpassword = this.page.locator("//label[@aria-label='Confirm password']//following-sibling::div/input")
            this.Add_to_user_list = this.page.locator("//button[text()='Add to user list ']")
            this.Create  = this.page.locator("//button[text()='Create ']")
            this.Filters  = this.page.locator("//span[contains(text(),' Filters ')]")
            this.Apply   = this.page.locator("//button[text()=' Apply ']")
            this.Filters_checkbox_userid   = this.page.locator("//div//td[contains(text(),'sannr1')]")
            this.filters_checkbox = this.page.locator("//td[contains(text(),'sannr1')]//preceding-sibling::td[1]//descendant::input")
            this.Delete   = this.page.locator("//button[text()='Delete']")
            this.Delete_users_box_text = this.page.locator("//*[contains(text(),'Delete users')]")
            this.Delete_box_text_confirmation_message = this.page.locator("//p[contains(text(),' The selected user will not be able to perform actions that they have permissions for. Would you like to continue? ')]")
            this.Delete_successful_message = this.page.locator("//*[contains(text(),'Delete successful.')]")
            this.Users_page_Basic = this.page.locator("//*[contains(text(),'Basic')]");
            this. Change_Password   = this.page.locator("//button[text()=' Change Password ']")
            this. Associated_partner   = this.page.locator("//*[contains(text(),'Associated partner')]")
            this. Upload_preferences   = this.page.locator("//*[contains(text(),'Upload_preferences')]")
            this. Download_preferences   = this.page.locator("//*[contains(text(),'Download preferences')]")
            this. Active_time_window   = this.page.locator("//*[contains(text(),'Active time window')]")
            this. File_name_filters   = this.page.locator("//*[contains(text(),'File name filters')]")
            this. Block_paths_matching_these_patterns   = this.page.locator("//*[contains(text(),'Block paths matching these patterns')]")
            this. Authentication_and_login   = this.page.locator("//*[contains(text(),'Authentication and login')]")
            this. Trusted_Public_SSH_key_alias   = this.page.locator("//*[contains(text(),'Trusted Public SSH key alias')]")
            this. Private_PGP_Key_alias   = this.page.locator("//*[contains(text(),'Private PGP Key alias')]")
            this. File_based_decryption   = this.page.locator("//*[contains(text(),'File-based decryption')]")
            this. Public_PGP_Key_alias   = this.page.locator("//*[contains(text(),'Public PGP Key alias')]")
            this. File_based_encryption   = this.page.locator("//*[contains(text(),'File-based encryption')]")
            this. Connection   = this.page.locator("//*[contains(text(),'Connection')]")
            this. Save_and_Close = this.page.locator("//button[contains(text(),'Save & Close ')]")
            this.Updated_successful_message = this.page.locator("//*[contains(text(),'Update successful.')]")           


     }
                async   Adduser(){
                await this.Users.isVisible();
                await this.Users.click();
                await this.SubUsers.isVisible();
                await this.page.waitForTimeout(2000);
                await this.SubUsers.dblclick();
                await this.Add.isVisible();
                await this.Add.click();
                await this.USER_ID.isVisible();
                await this.USER_ID.click();
                await this.USER_ID.fill(user.USER_ID);
                await this.First_Name.isVisible();
                await this.First_Name.click();
                await this.First_Name.fill(user.First_Name);
                await this.Last_Name.isVisible();
                await this.Last_Name.click();
                await this.Last_Name.fill(user.Last_Name);
                await this.Email_Address.isVisible();
                await this.Email_Address.click();
                await this.Email_Address.fill(user.Email_Address);
                // await this.page.waitForTimeout(2000);
                // await this.CreatePassword.isVisible();
                if (await this.CreatePassword.isVisible()) {
                    // Check the radio button
                    await this.CreatePassword.check();
                  } else {
                    console.error('Radio button is not visible');
                  }
                // await this.CreatePassword.check();
                await this.page.waitForTimeout(2000);
                await this.Security_warning.isVisible()
                await this.Security_warning_message.isVisible()
                // await this.page.waitForTimeout(2000);
                await this.Ok_Button.isVisible();
                await this.Ok_Button.click();
                await this.Password.isVisible();
                await this.Password.click();
                await this.Password.fill(user.Password);
                await this.Confirmpassword.isVisible();
                await this.Confirmpassword.click();
                await this.Confirmpassword.fill(user.Confirmpassword);
                await this.Add_to_user_list.isVisible();
                await this.Add_to_user_list.click();
                // await this.page.waitForTimeout(2000);
                await this.Create.isVisible();
                await this.Create.click();
                // await this.Updated_successful_message.isVisible();
                // await expect(this.Updated_successful_message).toBeVisible();
                // Ensure the element containing the exact text "Update successful." is visible
                // await expect(this.page.locator('text=Update successful.')).toBeVisible({ timeout: 3000 });
                const message = await this.page.locator('text=add successful.').textContent({ timeout: 3000 });
                if (message) {
                  console.log('Captured message:', message.trim());
                } else {
                  console.log('Message was not visible in time.');
                }



                
            }

            getUserLocator(USER_ID: string): Locator {
                const dynamicXPath = `//div//td[contains(text(),'${USER_ID}')]`;
                return this.page.locator(dynamicXPath);
              }
            
              // Function to click on the user ID element
              async clickUserID(USER_ID: string): Promise<void> {
                const userLocator = this.getUserLocator(USER_ID);
                await userLocator.dblclick();
              }
        // async verfiyaddeduser(USER_ID){

        //     await this.page.waitForTimeout(2000);
        //     await this.Filters.isVisible();
        //     await this.Filters.click();
        //     await this.USER_ID.isVisible();
        //     await this.USER_ID.click();
        //     await this.USER_ID.fill(user.USER_ID);
        //     await this.Apply.isVisible();
        //     await this.Apply.click();
        //     await this.clickUserID(USER_ID);
        //     // await this.verifyUserInputField.click()
        //     // await this.USER_ID.isVisible();
        //     // await this.USER_ID.click();
        //     await this.Users_page_Basic.isVisible()
        //     await this.Change_Password.isEnabled()
        //     await expect(this.First_Name).toHaveValue(user.First_Name);
        //     await expect(this.Last_Name).toHaveValue(user.Last_Name);
        //     await expect(this.Email_Address).toHaveValue(user.Email_Address);
        //     await this.Associated_partner.isVisible();
        //     await this.Download_preferences.isVisible();
        //     await this.Active_time_window.isVisible();
        //     await this.File_name_filters.isVisible();
        //     await this.Block_paths_matching_these_patterns.isVisible();
        //     await this.Authentication_and_login.isVisible();
        //     await this.Trusted_Public_SSH_key_alias.isVisible();
        //     await this.Private_PGP_Key_alias.isVisible();
        //     await this.File_based_decryption.isVisible();
        //     await this.Public_PGP_Key_alias.isVisible();
        //     await this.Connection.isVisible();
        //     await this.Save_and_Close.isVisible()
        //     await this.Save_and_Close.click()
        //     await this.Updated_successful_message.isVisible();
        //     // await this.page.waitForTimeout(40000);
        // }
        
        async deleteuser(USER_ID){
            await this.page.waitForTimeout(2000);
            await this.Filters.isVisible();
            await this.Filters.click();
            await this.page.waitForTimeout(2000);
            await this.USER_ID.click();
            await this.USER_ID.fill(user.USER_ID);
            await this.Apply.isVisible();
            await this.Apply.click();
            await this.page.waitForLoadState('networkidle');
            await this.page.waitForTimeout(2000);
            // await this.filters_checkbox.isVisible();
            await this.page.hover("//td[contains(text(),'sannr1')]//preceding-sibling::td[1]//descendant::input",{force:true});
            await this.page.click("//td[contains(text(),'sannr1')]//preceding-sibling::td[1]//descendant::input",{force:true});
            
            await this.filters_checkbox.uncheck();
            await this.Delete.isVisible();
            await this.Delete.click();
            await this.Delete_users_box_text.isVisible();
            await this.Delete_box_text_confirmation_message.isVisible();
            await this.Ok_Button.isVisible();
            await this.Ok_Button.click();
            await this.Delete_successful_message.isVisible();

        }

}



