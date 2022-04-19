import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud/crud.component';
import { StudentsService } from './services/students.service';
// import { FirebasePostComponent } from './components/firebase-post/firebase-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import {myRouters} from '../app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    ChatbotComponent,
    myRouters,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
