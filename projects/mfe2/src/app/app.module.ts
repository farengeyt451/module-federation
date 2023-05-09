import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsBookingModule } from './flights-booking/flights-booking.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlightsBookingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
