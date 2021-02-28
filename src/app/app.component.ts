import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listItem:any[];
  item:any;
  constructor() {
    this.listItem = [];
  }

  addItem() {
    if(this.item) {
      this.listItem.push(this.item);
      this.item = "";
    }
  }
}
