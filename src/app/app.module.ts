import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AvatarComponent } from './home/avatar/avatar.component';
import { FuncCardComponent } from './home/func-card/func-card.component';
import { FocusedComponent } from './focused/focused.component';
import { ReportsComponent } from './reports/reports.component';
import { WorkListComponent } from './work/work-list/work-list.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { TimedComponent } from './timed/timed.component';
import { Page404Component } from './share/page404/page404.component';
import { LoginService } from "./service/login.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AvatarComponent,
    FuncCardComponent,
    FocusedComponent,
    ReportsComponent,
    WorkListComponent,
    WorkDetailComponent,
    TimedComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
