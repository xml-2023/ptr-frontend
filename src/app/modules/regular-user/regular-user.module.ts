import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularUserSidebarComponent } from './regular-user-sidebar/regular-user-sidebar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FlightSearchComponent } from '../pages/flight-search/flight-search.component';

const routes: Routes = [
  {
    path: '', component: RegularUserSidebarComponent, children: [
      { path: 'flight-search', component: FlightSearchComponent }
    ]
  }
];

@NgModule({
  declarations: [
    RegularUserSidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forChild(routes),
    MatListModule
  ]
})
export class RegularUserModule { }
