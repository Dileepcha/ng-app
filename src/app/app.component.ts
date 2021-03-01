import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listItem:any[];
  item:any;
  price:any;
  data:any[];
  constructor() {
    this.listItem = [];
    this.data = ['USA', 'CANADA', "EU", "AUS"];
  }

  addItem() {
    if(this.item) {
      this.listItem.push({product:this.item, price:this.price});
      this.item = "";
      this.price = "";
    }
    console.log(this.listItem);
  }

  delete(index) {
    this.listItem.splice(index, 1);
  }
}
