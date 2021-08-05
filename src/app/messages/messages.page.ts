import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  blogs : String[] = [];
  currentInput;
  constructor() {}
  addBlog(){
    this.blogs.push(this.currentInput);
  }

  ngOnInit() {
  }

}