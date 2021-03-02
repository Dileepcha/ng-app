import { Component } from '@angular/core';
import { AppService} from "./app.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverData:any[]
  listItem:any[];
  item:any;
  price:any;
  data:any[];
  constructor(private appService:AppService) {
    this.listItem = [];
    this.data = ['USA', 'CANADA', "EU", "AUS"];


    this.appService.getProfile().subscribe(profile => {
      this.serverData = profile.data;
        console.log(profile);
    })


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

  getData(event) {
    this.listItem.push(event);
    

  }
}
