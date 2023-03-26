import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { CreateFlightComponent } from '../admin/create-flight/create-flight.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: 'register', component: RegisterUserComponent },
      { path: '', component: FlightSearchComponent },
      { path: 'login', component: LoginComponent},
      { path: 'createFlight', component: CreateFlightComponent },
    ]
  }
];



@NgModule({
  declarations: [
    PagesComponent,
    RegisterUserComponent,
    FlightSearchComponent,
    LoginComponent,
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
    MatFormFieldModule,
    MatInputModule,
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
