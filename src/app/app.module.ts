import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './modules/admin/admin.module';
import { RegularUserModule } from './modules/regular-user/regular-user.module';
import { GuestUserModule } from './modules/guest-user/guest-user.module';
import { LoginRegistrationModule } from './modules/login-registration/login-registration.module';

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true}),
    AdminModule,
    RegularUserModule,
    GuestUserModule,
    LoginRegistrationModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
