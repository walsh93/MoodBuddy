import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JournalComponent } from './journal/journal.component';
import { MoodLogComponent } from './mood-log/mood-log.component';
import { SigninPageComponent } from './signin-page/signin-page.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'welcome', pathMatch:'full'},
  {path:'welcome',component:WelcomePageComponent},
  {path:'signup',component:SignupPageComponent},
  {path:'signin',component:SigninPageComponent},
  {path:'mood-log',component:MoodLogComponent},
  {path:'journal',component:JournalComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SignupPageComponent,
    PageNotFoundComponent,
    DashboardComponent,
    JournalComponent,
    MoodLogComponent,
    SigninPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }