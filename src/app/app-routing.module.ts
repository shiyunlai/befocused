import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {FocusedComponent} from "./focused/focused.component";
import {ReportsComponent} from "./reports/reports.component";
import {WorkDetailComponent} from "./work/work-detail/work-detail.component";
import {WorkListComponent} from "./work/work-list/work-list.component";
import {TimedComponent} from "./timed/timed.component";
import {Page404Component} from "./share/page404/page404.component";


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'focuse', component: FocusedComponent },
    { path: 'report', component: ReportsComponent },
    { path: 'work', component: WorkListComponent },
    { path: 'work/:workid', component: WorkDetailComponent },
    { path: 'timed', component: TimedComponent },
    { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
