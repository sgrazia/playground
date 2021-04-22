import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { DialogFullComponent } from './dialog-full/dialog-full.component';
import { DialogTitlebarComponent } from './dialog-titlebar/dialog-titlebar.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogActionbuttonsComponent } from './dialog-actionbuttons/dialog-actionbuttons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'playground';

  @ViewChild('kendoDialogTitlebar', { read: TemplateRef }) kendoDialogTitlebar:TemplateRef<any>;
  @ViewChild('kendoDialogContent', { read: TemplateRef }) kendoDialogContent:TemplateRef<any>;
  @ViewChild('kendoDialogActionbuttons', { read: TemplateRef }) kendoDialogActionbuttons:TemplateRef<any>;

  @ViewChild('dialogInsertionPoint', { read: ViewContainerRef }) dialogInsertionPointPOINT: ViewContainerRef;
 
  constructor (private dialogService: DialogService)
  { }


  ngOnInit ()
  {
    console.log(' app.component  *  ngOnInit()');
  }


  showDialogContent()
  {
    console.log(' app.component  -  showDialogContent()');

      const dialog: DialogRef = this.dialogService.open({
        //appendTo: this.dialogInsertionPointPOINT,
          //title: "Please confirm",
          // content: AnstellungListComponent,
          // actionsLayout: 'normal',
          // content:  this.kendoDialogActionbuttons,
          //content: DialogActionbuttonsComponent,
          content:  DialogFullComponent,
          // actions: [
          //     { text: "Schliessen", click: 'closeDialog()' },
          //     { text: "Auswählen", click: 'saveDialog()', primary: true }
          // ],
          width: '60%',
          height: '50%',
          minWidth: 180
      });
      
      dialog.result.subscribe((result) => {
        if (result instanceof DialogCloseResult) {
          console.log(' app.dialogContent  |  close');
        } else {
            console.log(' app.dialogContent  |  ', result);
        }
      })
   }


   showDialogFull()
   {
      console.log(' app.component  -  showDialogFull()');
  
        const dialog: DialogRef = this.dialogService.open({
            // title: "Please confirm",
            // content: AnstellungListComponent,
            // actionsLayout: 'normal',
            content:  DialogFullComponent,
            // actions: [
            //     { text: "Schliessen", click: 'closeDialog()' },
            //     { text: "Auswählen", click: 'saveDialog()', primary: true }
            // ],
            width: '60%',
            height: '50%',
            minWidth: 250
        });
        
        dialog.result.subscribe((result) => {
          if (result instanceof DialogCloseResult) {
              console.log(' app.dialogFull  |  close');
          } else {
              console.log(' app.dialogFull  |  ', result);
          }
        });

    }




    showDialogService()
    {
       console.log(' app.component  -  showDialogFull()');
   
         const dialog: DialogRef = this.dialogService.open({
             title: "DialogService",
             // content: AnstellungListComponent,
             // actionsLayout: 'normal',
             content:  `<div>
             DialogContentComponent
             <p>Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 
                 Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. Dies ist der Inhalt des Dialogs. 

                content: String || TemplateRef || Component
                actions: 

             </p>
         </div>`,
             actions: [
                 { text: "Schliessen"},
                 { text: "Auswählen", click: 'saveDialog()', primary: true }
             ],
             width: '50%',
             height: '60%',
             minWidth: 250
         });
         
         dialog.result.subscribe((result) => {
           if (result instanceof DialogCloseResult) {
            console.log(' app.dialogService  |  close');
          } else {
              console.log(' app.dialogService  |  ', result);
           }
         })
     }
  }
