import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularUserSidebarComponent } from './regular-user-sidebar/regular-user-sidebar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FlightSearchComponent } from '../pages/flight-search/flight-search.component';
import { BuyTicketsComponent } from '../pages/buy-tickets/buy-tickets.component';
import { TicketsViewComponent } from '../pages/tickets-view/tickets-view.component';

const routes: Routes = [
  {
    path: '', component: RegularUserSidebarComponent, children: [
      { path: 'flight-search', component: FlightSearchComponent },
      { path: 'buy-tickets', component: BuyTicketsComponent },
      { path: 'flights/:id/tickets', component: TicketsViewComponent }
    ]
  }
];

@NgModule({
  declarations: [
    RegularUserSidebarComponent,
    BuyTicketsComponent
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
