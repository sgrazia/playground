import { Component, OnInit } from '@angular/core';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';


@Component({
  selector: 'app-dialog-full',
  templateUrl: './dialog-full.component.html',
  styleUrls: ['./dialog-full.component.scss']
})
export class DialogFullComponent implements OnInit {

  public dialogOpened: boolean = true;

  constructor() { }

  ngOnInit(): void 
  {
    console.log(' dialog-full  *  ngOnInit()');
  }


dialogFull_cancel()
{
  console.log(' dialog-full  -  dialogFull_cancel()');
}

dialogFull_ok()
{
  console.log(' dialog-full  -  dialogFull_ok()');
}

closeDialog()
{
  // Event generieren?
  this.dialogOpened = false;
  console.log(' dialog-full  -  closeDialog()');
}
}
