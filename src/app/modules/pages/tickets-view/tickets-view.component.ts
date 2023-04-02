import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { User } from 'src/app/model/user.model';
import { FlightService } from 'src/app/service/flight.service';
import { TicketService } from 'src/app/service/ticket.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tickets-view',
  templateUrl: './tickets-view.component.html',
  styleUrls: ['./tickets-view.component.css']
})
export class TicketsViewComponent {

  flightId!: number;
  flight: any;
  flights: any[] = [];
  tickets: any[] = [];
  ticket: any;

  constructor(private flightService: FlightService, private ticketService: TicketService, private route:ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
       this.flightService.findAll().subscribe(res => {
        this.flights = res.payload.ArrayList;
        this.flight = this.findFlightById();
        this.tickets = this.flight.tickets;
       });

       this.route.params.subscribe(params => {
        this.flightId = Number(params['id']);
       });
      }

  public findFlightById() {
    return this.flights.find((flight) => flight.id === this.flightId);
  }

  public setTimeOfDeparture(flight: any) {
      if(flight.timeOfDeparture[0] < 10 && flight.timeOfDeparture[1] >= 10) {
        return `0${flight.timeOfDeparture[0]}:${flight.timeOfDeparture[1]}`
      } else if (flight.timeOfDeparture[0] >= 10 && flight.timeOfDeparture[1] < 10) {
        return `${flight.timeOfDeparture[0]}:0${flight.timeOfDeparture[1]}`
      } else if (flight.timeOfDeparture[0] < 10 && flight.timeOfDeparture[1] < 10) {
        return `0${flight.timeOfDeparture[0]}:0${flight.timeOfDeparture[1]}`
      }
      return `${flight.timeOfDeparture[0]}:${flight.timeOfDeparture[1]}`
  }

  public setTimeOfArrival(flight: any) {
      if(flight.timeOfArrival[0] < 10 && flight.timeOfArrival[1] >= 10) {
        return `0${flight.timeOfArrival[0]}:${flight.timeOfArrival[1]}`
      } else if (flight.timeOfArrival[0] >= 10 && flight.timeOfArrival[1] < 10) {
        return `${flight.timeOfArrival[0]}:0${flight.timeOfArrival[1]}`
      } else if (flight.timeOfArrival[0] < 10 && flight.timeOfArrival[1] < 10) {
        return `0${flight.timeOfArrival[0]}:0${flight.timeOfArrival[1]}`
      }
      return `${flight.timeOfArrival[0]}:${flight.timeOfArrival[1]}`
  }

  public setDate(flight: any) {
    if (flight.date[1] < 10 && flight.date[2] > 10) {
      return `${flight.date[2]}.0${flight.date[1]}.${flight.date[0]}.`
    } else if (flight.date[1] > 10 && flight.date[2] < 10) {
      return `0${flight.date[2]}.${flight.date[1]}.${flight.date[0]}.`
    } else if (flight.date[1] < 10 && flight.date[2] < 10) {
      return `0${flight.date[2]}.0${flight.date[1]}.${flight.date[0]}.`
    }
    return `${flight.date[2]}.${flight.date[1]}.${flight.date[0]}.`
  }

  public buyTicket(ticketId: number) {
    this.ticket = {ticketId, userId: this.userService.currentUser.id}
    this.ticketService.buyTicket(this.ticket).subscribe(res => {
      console.log(res);
    });
  }

}
