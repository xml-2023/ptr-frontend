import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})

export class FlightSearchComponent implements OnInit{
  formGroup!: FormGroup;
  flights : any
  selectedNum : any
  allFlights : any
  allPlaces : string[] = []
  hasFoundFlights : boolean = false

  constructor(private flightService: FlightService){}

  ngOnInit(): void {
    this.flightService.findAll().subscribe(res => {
      this.allFlights = res.payload.ArrayList
      console.log(this.allFlights)
      this.getAllPlaces(this.allFlights)
      console.log(this.allPlaces)
    })

    this.formGroup = new FormGroup({
      date: new FormControl("", Validators.required),
      placeOfDeparture: new FormControl("", Validators.required),
      placeOfArrival: new FormControl("", Validators.required),
      numberOfPassengers: new FormControl("", Validators.required),
    })
  }

  public search(){
    this.selectedNum = this.formGroup.value.numberOfPassengers
    this.flightService.searchFlights(this.formGroup.value.date, this.formGroup.value.placeOfDeparture, this.formGroup.value.placeOfArrival, this.formGroup.value.numberOfPassengers)
      .subscribe(res => {
        this.flights = res.payload.ArrayList
        if(this.flights.length == 0){
          this.hasFoundFlights = true
        } else {
          this.hasFoundFlights = false
        }
        console.log(this.flights)
      })
  }

  public getAllPlaces(allFlights : any){
    for(let flight of allFlights){
      if(!this.allPlaces.includes(flight.placeOfDeparture)){
        this.allPlaces.push(flight.placeOfDeparture)
      }
      if(!this.allPlaces.includes(flight.placeOfArrival)){
        this.allPlaces.push(flight.placeOfArrival)
      }
    }
  }
}
