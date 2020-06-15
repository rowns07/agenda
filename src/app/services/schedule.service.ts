import { Injectable } from '@angular/core';
import { Schedules } from '../model/schedules';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  url = 'http://localhost:3000/schedules/';
  display: boolean;


  public listSchedules: Schedules[];


  constructor(
    private httpClient: HttpClient
  ) {

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os Schedulesros
  get(): Observable<Schedules[]> {
    return this.httpClient.get<Schedules[]>(this.url)
      .pipe(
        retry(2)
      )
  }

  save(Schedules: Schedules): Observable<Schedules> {
    return this.httpClient.post<Schedules>(this.url, JSON.stringify(Schedules), this.httpOptions)
      .pipe(
        retry(2),
      )
  }


  delete(schedules: Schedules) {
    return this.httpClient.delete<Schedules>(this.url + '/' + schedules.id, this.httpOptions)
      .pipe(
        retry(1),
        // catchError(this.handleError)
      )
  }

}
