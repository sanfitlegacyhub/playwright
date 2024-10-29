/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author Anoop Raveendran
 */

import path from "path";
import { test } from '@playwright/test';
import { mergeHTMLReports } from "./merge-reports";



test("merge report @secondMerge", async () => {
  await mergeHTMLReports([
    path.resolve(process.cwd(), "./playwright-report/parallel"),
    path.resolve(process.cwd(), "./playwright-report/sequential"),
   
  ], { outputFolderName: './test-merge-report/FinalReport' });
})

// test("merge report @thirdMerge", async () => {
//   await mergeHTMLReports([
//     path.resolve(process.cwd(), "./test-merge-report/connection"),
//     path.resolve(process.cwd(), "./Reports")  
//   ], { outputFolderName: './test-merge-report/Flowservice' });
// })

// test("merge report @fourthMerge", async () => {
//   await mergeHTMLReports([
//     path.resolve(process.cwd(), "./test-merge-report/Flowservice"),
//     path.resolve(process.cwd(), "./Reports")  
//   ], { outputFolderName: './test-merge-report/deleteFS' });
// })

// test("merge report @fifthMerge", async () => {
//   await mergeHTMLReports([
//     path.resolve(process.cwd(), "./test-merge-report/deleteFS"),
//     path.resolve(process.cwd(), "./Reports")  
//   ], { outputFolderName: './test-merge-report/deleteConnection' });
// })

// test("merge report @sixthMerge", async () => {
//   await mergeHTMLReports([
//     path.resolve(process.cwd(), "./test-merge-report/deleteConnection"),
//     path.resolve(process.cwd(), "./Reports")  
//   ], { outputFolderName: './FinalReport' });
// })

// // test("merge report @seventhMerge", async () => {
// //   await mergeHTMLReports([
// //     path.resolve(process.cwd(), "./test-merge-report"),
// //     path.resolve(process.cwd(), "./Reports")  
// //   ], { outputFolderName: './test-merge-report' });
// // })
