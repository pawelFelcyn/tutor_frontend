import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AvdertisementsComponent } from './avdertisements/avdertisements.component';
import { RegisterComponent } from './register/register.component';
import { AdvertisementFilteringComponent } from './advertisement-filtering/advertisement-filtering.component';
import { AdvertisementDetailsComponent } from './advertisement-details/advertisement-details.component';
import { CreateAdvertisementComponent } from './create-advertisement/create-advertisement.component'

const appRoutes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'advertisements', component: AvdertisementsComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'advertisements/details', component: AdvertisementDetailsComponent},
  {path: 'advertisements/create', component: CreateAdvertisementComponent}
];

@NgModule({
  declarations: [AppComponent, NavBarComponent, LoginComponent, AvdertisementsComponent, RegisterComponent, AdvertisementFilteringComponent, AdvertisementDetailsComponent, CreateAdvertisementComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
