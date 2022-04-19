import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  {path : '' , redirectTo :'' , pathMatch:'full'},
  {
    path: 'getUsersData',component:StudentListComponent
  },
  {
    path: 'getPosts',component:StudentDetailsComponent
  },
  {
    path: 'Photos',component:ChatbotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRouters=[
  StudentListComponent,
  StudentDetailsComponent,
  ChatbotComponent,
]