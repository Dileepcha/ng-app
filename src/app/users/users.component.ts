import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  serverData: any[]
  constructor(private appService: AppService) {
    this.serverData = [];

    this.appService.getProfile().subscribe(user => {
      this.serverData = user.data;
    })
   }

  ngOnInit(): void {
  }

}
