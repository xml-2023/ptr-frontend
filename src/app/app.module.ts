import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AdminModule } from './modules/admin/admin.module';
import { RegularUserModule } from './modules/regular-user/regular-user.module';
import { GuestUserModule } from './modules/guest-user/guest-user.module';
import { PagesModule } from './modules/pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    RegularUserModule,
    MaterialModule,
    GuestUserModule,
    PagesModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
