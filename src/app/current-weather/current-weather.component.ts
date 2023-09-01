import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from '../interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor(){
    this.current = {
      city: 'Haslet',
      country: 'US',
      date: new Date(),
      image: './assets/img/partlyCloudyApp02.svg',
      temperature: 72,
      description: 'partly cloudy'
    } as ICurrentWeather
  }
  ngOnInit(): void {
  }
}
