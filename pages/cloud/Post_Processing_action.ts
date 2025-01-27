import { Page, Locator,expect,test } from '@playwright/test';
import {  user } from '../utils/user';
import { UserPage } from '../pages/User';
import { PostProcessingAction } from '../utils/Post_Processing';
const USER_ID = user.USER_ID;
const Action_name= PostProcessingAction.Action_name;
const Description= PostProcessingAction.Description;
const Task_name= PostProcessingAction.Task_name;
// const userPage = new UserPage(page);

    export class PostProcessingActionPage {

        userPage: UserPage;
        private page: Page;private Users: Locator;private Actions: Locator;private Scheduled: Locator;private Action_name: Locator;private description: Locator;private Find: Locator;private Task_name_Locator:Locator;
        private Virtual_folder_redio_button: Locator; private Browse: Locator;private Add_successful_message: Locator;private Post_Processing:Locator;private Posr_Processing_Find:Locator;
        private Click_to_add_task:Locator;
        constructor(page: Page) {
            this.page = page;
            this.userPage = new UserPage(page); // Create an instance of UserPage

            //-----------------------------------  User page ------------------------------------- 
            this.Users = this.page.locator("//*[contains(text(),'Users')]");
            this.Actions = this.page.locator("//span[contains(text(),'Actions')]");
            this.Post_Processing= this.page.locator("//span[contains(text(),'Post-Processing')]");
            this.Action_name= this.page.locator("//label[@aria-label='Action name']//following-sibling::div/input")
            this.description= this.page.locator("//sng-textarea[@formcontrolname='description']//descendant::textarea")
            this.Posr_Processing_Find= this.page.locator("//button[contains(text(),'Find')]")
            this.Task_name_Locator= this.page.locator("//label[@aria-label='Task name']//following-sibling::div/input")
            this.Virtual_folder_redio_button = this.page.locator("//label[@aria-label='Task name']//following-sibling::div/input")
            this.Browse=this.page.locator("//button[@title='Browse']")
            this.Add_successful_message=this.page.locator("//*[contains(text(),'Add successful.')]")
            this.Click_to_add_task= this.page.locator("//*[@title='Click to add task']")



      

     }

    //  async clickAdd(): Promise<void> {
    //     await this.userPage.Add.click();
    // }

            async Add_Post_Processing_Action(){
                await this.Actions.isVisible();
                await this.Actions.click();
                await this.Post_Processing.isVisible();
                await this.page.waitForTimeout(2000);
                await this.Post_Processing.dblclick();
                await this.userPage.Add.click()
                await this.Action_name.click();
                await this.Action_name.fill(Action_name);
                await this.description.click();
                await this.description.fill(Description);
                await this.Click_to_add_task.click();
                await this.Posr_Processing_Find.isVisible();
                await this.Posr_Processing_Find.click();
                await this.Task_name_Locator.isVisible();
                await expect(this.Task_name_Locator).toHaveValue(Task_name);
                await this.Virtual_folder_redio_button.isVisible();
                await this.Virtual_folder_redio_button.click();
                await this.userPage.Add.dblclick()
                await this.Add_successful_message.isVisible();


               
            }
 }
        


