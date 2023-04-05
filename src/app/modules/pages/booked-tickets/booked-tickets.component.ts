import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-booked-tickets',
  templateUrl: './booked-tickets.component.html',
  styleUrls: ['./booked-tickets.component.css'],
})
export class BookedTicketsComponent {
  tickets: any[] = [];
  flights: any[] = [];
  bookedFlights: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userService
      .findTicketsByUserId(this.userService.currentUser.id)
      .subscribe((res) => {
        this.flights = res.payload.ArrayList;
        this.bookFlights();
      });
  }

  public setTimeOfDeparture(flight: any) {
    if (flight.timeOfDeparture[0] < 10 && flight.timeOfDeparture[1] >= 10) {
      return `0${flight.timeOfDeparture[0]}:${flight.timeOfDeparture[1]}`;
    } else if (
      flight.timeOfDeparture[0] >= 10 &&
      flight.timeOfDeparture[1] < 10
    ) {
      return `${flight.timeOfDeparture[0]}:0${flight.timeOfDeparture[1]}`;
    } else if (
      flight.timeOfDeparture[0] < 10 &&
      flight.timeOfDeparture[1] < 10
    ) {
      return `0${flight.timeOfDeparture[0]}:0${flight.timeOfDeparture[1]}`;
    }
    return `${flight.timeOfDeparture[0]}:${flight.timeOfDeparture[1]}`;
  }

  public setTimeOfArrival(flight: any) {
    if (flight.timeOfArrival[0] < 10 && flight.timeOfArrival[1] >= 10) {
      return `0${flight.timeOfArrival[0]}:${flight.timeOfArrival[1]}`;
    } else if (flight.timeOfArrival[0] >= 10 && flight.timeOfArrival[1] < 10) {
      return `${flight.timeOfArrival[0]}:0${flight.timeOfArrival[1]}`;
    } else if (flight.timeOfArrival[0] < 10 && flight.timeOfArrival[1] < 10) {
      return `0${flight.timeOfArrival[0]}:0${flight.timeOfArrival[1]}`;
    }
    return `${flight.timeOfArrival[0]}:${flight.timeOfArrival[1]}`;
  }

  public setDate(flight: any) {
    if (flight.date[1] < 10 && flight.date[2] > 10) {
      return `${flight.date[2]}.0${flight.date[1]}.${flight.date[0]}.`;
    } else if (flight.date[1] > 10 && flight.date[2] < 10) {
      return `0${flight.date[2]}.${flight.date[1]}.${flight.date[0]}.`;
    } else if (flight.date[1] < 10 && flight.date[2] < 10) {
      return `0${flight.date[2]}.0${flight.date[1]}.${flight.date[0]}.`;
    }
    return `${flight.date[2]}.${flight.date[1]}.${flight.date[0]}.`;
  }

  private bookFlights() {
    for (let flight of this.flights) {
      flight.tickets = flight.tickets.filter(
        (t: { booked: boolean }) => t.booked === true
      );
    }
  }
}
