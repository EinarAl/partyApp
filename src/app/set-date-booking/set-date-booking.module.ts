import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetDateBookingPageRoutingModule } from './set-date-booking-routing.module';

import { SetDateBookingPage } from './set-date-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetDateBookingPageRoutingModule
  ],
  declarations: [SetDateBookingPage]
})
export class SetDateBookingPageModule {}
