import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  v:any;
  @Input() value;
  constructor() { }

  ngOnInit(): void {
    this.v = this.value;
    console.log(this.value)
  }

}
