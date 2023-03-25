import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  findAll(): Observable<any>{
    return this.http.get<any>(this.apiHost + 'flights/findAll', {headers: this.headers})
  }

  createFlight(flight: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'flights', flight, {headers: this.headers});
  }

  searchFlights(date: string, departure: string, arrival: string, passengers: number): Observable<any>{
    return this.http.get<any>(this.apiHost + 'flights/search' , {params: new HttpParams().set('date', date).set('placeOfDeparture', departure).set('placeOfArrival', arrival)
      .set('numberOfPassengers', passengers)})
  }
}
