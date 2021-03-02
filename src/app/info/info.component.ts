import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  v:any;
  @Input() value;
  @Output() shareData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.v = this.value;
    console.log(this.value)
  }

  shareToParent() {
    const item = {
      product:"book",
      price:24
    }
    this.shareData.emit(item)
  }

}
