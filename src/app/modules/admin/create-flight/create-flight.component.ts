import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit{

  public flight : Flight = new Flight

  flightForm = new FormGroup({
    date : new FormControl(),
    timeOfArrival : new FormControl(),
    timeOfDeparture : new FormControl(),
    placeOfArrival : new FormControl(),
    placeOfDeparture : new FormControl(),
    planeCapacity : new FormControl(),
    ticketPriceInEuros : new FormControl()
  })

  constructor( private flightService : FlightService ){ }

  ngOnInit(): void {
    
  }

  public createFlight() : void{
    this.flight.date = this.flightForm.value.date;
    this.flight.timeOfArrival = this.flightForm.value.timeOfArrival;
    this.flight.timeOfDeparture = this.flightForm.value.timeOfDeparture;
    this.flight.placeOfArrival = this.flightForm.value.placeOfArrival;
    this.flight.placeOfDeparture = this.flightForm.value.placeOfDeparture;
    this.flight.planeCapacity = this.flightForm.value.planeCapacity;
    this.flight.ticketPriceInEuros = this.flightForm.value.ticketPriceInEuros;
  
    this.flightService.createFlight(this.flight).subscribe(res =>{
      // this.toastr.success("Successful create!", "Creating flight")
    });
  }  
}
