import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-titlebar',
  templateUrl: './dialog-titlebar.component.html',
  styleUrls: ['./dialog-titlebar.component.scss']
})
export class DialogTitlebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {
    console.log(' dialog-titlebar  *  ngOnInit()');
  }

}
