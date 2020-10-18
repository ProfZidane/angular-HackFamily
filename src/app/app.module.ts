import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { ForumComponent } from './components/forum/forum.component';
import { HelpCenterComponent } from './components/help-center/help-center.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MyProfileFeedComponent } from './components/my-profile-feed/my-profile-feed.component';
import { ProfileAccountSettingsComponent } from './components/profile-account-settings/profile-account-settings.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CompaniesComponent,
    CompanyProfileComponent,
    ForumComponent,
    HelpCenterComponent,
    JobsComponent,
    MessagesComponent,
    MyProfileFeedComponent,
    ProfileAccountSettingsComponent,
    ProfilesComponent,
    ProjectsComponent,
    SignInComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
