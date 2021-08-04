import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetDateBookingPage } from './set-date-booking.page';

const routes: Routes = [
  {
    path: '',
    component: SetDateBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetDateBookingPageRoutingModule {}
