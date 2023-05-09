import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsBookingRoutingModule } from './flights-booking-routing.module';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [CommonModule, FlightsBookingRoutingModule],
})
export class FlightsBookingModule {}
