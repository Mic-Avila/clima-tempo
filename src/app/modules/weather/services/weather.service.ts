import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private APIKEY = '97516a5dea5404b2f8f80598945cbdc3'

  constructor(private http: HttpClient) { }


  buscaDadosAPI(cidade: string):Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&mode=json&appid=${this.APIKEY}`,{})
  }
}
