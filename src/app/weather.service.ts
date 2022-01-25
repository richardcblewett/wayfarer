import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  createAPIObservable(city: any) {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`
    );
  }
  constructor(private http: HttpClient) { }
}
