import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Passenger } from './models/passenger.interface';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClient) {}

    getPassengers(): Observable<Passenger[]> {
       return this.http
        .get(PASSENGER_API)
        .pipe(map((res: Passenger[]) => res));   
    }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
         .put(`{PASSENGER_API}/${passenger.id}`, passenger)
         .pipe(map((res: Passenger) => res));   
     }

     removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
         .delete(`{PASSENGER_API}/${passenger.id}`)
         .pipe(map((res: Passenger) => res));   
     }
}