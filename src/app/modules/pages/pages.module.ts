import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { CreateFlightComponent } from '../admin/create-flight/create-flight.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterUserComponent },
      { path: 'createFlight', component: CreateFlightComponent },
    ]
  }
];



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    RegisterUserComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MaterialModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class PagesModule { }
