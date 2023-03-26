import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { FlightsComponent } from './flights/flights.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

const routes: Routes = [
  {
    path: '', component: AdminSidebarComponent, children: [
      { path: 'create-flight', component: CreateFlightComponent },
      { path: 'flights', component: FlightsComponent }
    ]
  }
];


@NgModule({
  declarations: [
    CreateFlightComponent,
    AdminSidebarComponent,
    FlightsComponent
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
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class AdminModule { }
