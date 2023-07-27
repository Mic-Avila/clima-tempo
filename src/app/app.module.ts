import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { weatherHomeComponent } from './modules/weather/page/weather-home/weather-home.component';
import { WeatherService } from './modules/weather/services/weather.service';
import { WeatherCardComponent } from './modules/weather/components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    weatherHomeComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
  faCoffee  =  faCoffee;
 }
