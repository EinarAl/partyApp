import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.page.html',
  styleUrls: ['./direct-messages.page.scss'],
})
export class DirectMessagesPage implements OnInit {
  blogs : String[] = [];
  currentInput;
  constructor() {}
  addBlog(){
    this.blogs.push(this.currentInput);
  }

  ngOnInit() {
  }

}
