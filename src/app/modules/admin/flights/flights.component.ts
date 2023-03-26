import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit{

  allFlights : any

  constructor(private flightService: FlightService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.flightService.findAll().subscribe(res => {
      this.allFlights = res.payload.ArrayList
    })
  }

  deleteFlight(id : number){
    this.flightService.deleteFlight(id).subscribe(res => {
      this.toastr.success("Success!", "Successfully deleted flight!")
      this.flightService.findAll().subscribe(res => {
        this.allFlights = res.payload.ArrayList
      })
    })
  }
}
