import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  {
    path: '', component: AdminSidebarComponent, children: [
      { path: 'createFlight', component: CreateFlightComponent }
    ]
  }
];


@NgModule({
  declarations: [
    CreateFlightComponent,
    AdminSidebarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
