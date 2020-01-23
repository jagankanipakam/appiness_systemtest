import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserSearchPipe } from './pipes/user-search.pipe';
import { FormsModule } from '@angular/forms';
import { GitUserRepositoriesComponent } from './components/git-user-repositories/git-user-repositories.component';
import { GitUsersListComponent } from './components/git-users-list/git-users-list.component';
import { NgProgressModule } from "ngx-progressbar";
import { NgProgressHttpModule } from "ngx-progressbar/http";
@NgModule({
  declarations: [
    AppComponent,
    GitUsersListComponent,
    GitUserRepositoriesComponent,
    UserSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.withConfig({
      spinnerPosition: "right",
      color: "#e53935"
    }),
    NgProgressHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
