import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signinpage',
    loadChildren: () => import('./signinpage/signinpage.module').then( m => m.SigninpagePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'set-date-booking',
    loadChildren: () => import('./set-date-booking/set-date-booking.module').then( m => m.SetDateBookingPageModule)
  },
  {
    path: 'service-profile',
    loadChildren: () => import('./service-profile/service-profile.module').then( m => m.ServiceProfilePageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'check-out',
    loadChildren: () => import('./check-out/check-out.module').then( m => m.CheckOutPageModule)
  },
  {
    path: 'order-review',
    loadChildren: () => import('./order-review/order-review.module').then( m => m.OrderReviewPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
