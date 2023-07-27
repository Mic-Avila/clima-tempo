import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  buscaDadosAPI(cidade: string):Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&mode=json&appid=${environment.api}`,{})
  }
}
