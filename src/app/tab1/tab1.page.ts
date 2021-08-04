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
  myFunction() {
    var a = document.getElementById("title");
    if (a.style.display == "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
    var b = document.getElementById("audioTitle");
    if (b.style.display == "block") {
      b.style.display = "none";
    } else {
      b.style.display = "block";
    }
    var c = document.getElementById("recommended");
    if (c.style.display == "none") {
      c.style.display = "block";
    } else {
      c.style.display = "none";
    }
    var d = document.getElementById("audioRecommended");
    if (d.style.display == "block") {
      d.style.display = "none";
    } else {
      d.style.display = "block";
    }
  }
}