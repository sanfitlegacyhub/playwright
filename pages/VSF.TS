import { Page, Locator,expect,test } from '@playwright/test';
import {  Action } from '../utils/Actions';
import {  user } from '../utils/user';
import { UserPage } from '../pages/User';

const USER_ID = user.USER_ID;
const Action_name= Action.Action_name;
const Description= Action.Description;
const Task_name= Action.Task_name;
// const userPage = new UserPage(page);

    export class ActionPage {

        userPage: UserPage;
        private page: Page;private Users: Locator;private Virtualfolders: Locator;private Add_virtual_folder: Locator;private Folder_name: Locator;private description: Locator;private Find: Locator;private Task_name_Locator:Locator;
        private Virtual_folder_redio_button: Locator; private Browse: Locator;private Add_successful_message: Locator;
        constructor(page: Page) {
            this.page = page;
            this.userPage = new UserPage(page); // Create an instance of UserPage

            //-----------------------------------  User page ------------------------------------- 
            this.Users = this.page.locator("//*[contains(text(),'Users')]");
            this.Virtualfolders = this.page.locator("//span[contains(text(),'Virtual folders')]");
            // this.Scheduled= this.page.locator("//span[contains(text(),'Scheduled')]");
            this.Folder_name= this.page.locator("//label[@aria-label='Folder name']//following-sibling::div/input")
            this.description= this.page.locator("//sng-textarea[@formcontrolname='description']//descendant::textarea")
            this.Find= this.page.locator("//span[@title='Find']")
            this.Task_name_Locator= this.page.locator("//label[@aria-label='Task name']//following-sibling::div/input")
            this.Virtual_folder_redio_button = this.page.locator("//label[@aria-label='Task name']//following-sibling::div/input")
            this.Browse=this.page.locator("//button[@title='Browse']")
            this.Add_successful_message=this.page.locator("//*[contains(text(),'Add successful.')]")
            this.Add_virtual_folder = this.page.locator("(//button[@title='Add virtual folder'])[1]")




      

     }

    //  async clickAdd(): Promise<void> {
    //     await this.userPage.Add.click();
    // }

            async Add_virtual_folder(){
                await this.Actions.isVisible();
                await this.Actions.click();
                await this.Scheduled.isVisible();
                await this.page.waitForTimeout(2000);
                await this.Scheduled.dblclick();
                await this.userPage.Add.click()
                await this.Action_name.click();
                await this.Action_name.fill(Action.Action_name);
                await this.description.click();
                await this.description.fill(Action.Description);
                await this.Find.isVisible();
                await this.Find.click();
                await this.Task_name_Locator.isVisible();
                await expect(this.Task_name_Locator).toHaveValue(Task_name);
                await this.Virtual_folder_redio_button.isVisible();
                await this.Virtual_folder_redio_button.click();
                await this.userPage.Add.dblclick()
                await this.Add_successful_message.isVisible();


               
            }
 }
        


