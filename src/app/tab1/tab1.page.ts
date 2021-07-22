import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  menu: any;

  constructor() {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
