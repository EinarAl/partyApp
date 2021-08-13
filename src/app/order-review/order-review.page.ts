import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.page.html',
  styleUrls: ['./order-review.page.scss'],
})
export class OrderReviewPage implements OnInit {

  constructor(public toastController: ToastController, private router: Router) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Email Confirmation has been sent.',
      color:"danger",
      duration: 1500
    });
    toast.present();
  }
  ngOnInit() {
  }

}
