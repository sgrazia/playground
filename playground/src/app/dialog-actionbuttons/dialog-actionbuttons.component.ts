import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-actionbuttons',
  templateUrl: './dialog-actionbuttons.component.html',
  styleUrls: ['./dialog-actionbuttons.component.scss']
})
export class DialogActionbuttonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {
    console.log(' dialog-actionbuttons  *  ngOnInit()');
  }

}
