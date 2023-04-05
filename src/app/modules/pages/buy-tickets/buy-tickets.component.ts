import { Component } from '@angular/core';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.css']
})
export class BuyTicketsComponent {
  columns: string[] = ['Place of departure', 'Time of departure', 'Place of arrival', 'Time of arrival', 'Date of flight', 'Free seats', 'Options'];
  flights: any[] = [];

  constructor(private flightService: FlightService){}

  ngOnInit(): void {
    this.flightService.findAll().subscribe(res => {
      this.flights = res.payload.ArrayList
    })
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

}
