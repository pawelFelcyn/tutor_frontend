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
import { RegisterComponent } from './register/register.component'

const appRoutes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'advertisements', component: AvdertisementsComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [AppComponent, NavBarComponent, LoginComponent, AvdertisementsComponent, RegisterComponent],
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
