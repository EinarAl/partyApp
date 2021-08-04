import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  blogs : String[] = [];
  currentInput;
  constructor() {}
  addBlog(){
    this.blogs.push(this.currentInput);
  }

  ngOnInit() {
  }

}
