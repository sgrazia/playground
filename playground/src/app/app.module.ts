import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogFullComponent } from './dialog-full/dialog-full.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogTitlebarComponent } from './dialog-titlebar/dialog-titlebar.component';
import { DialogActionbuttonsComponent } from './dialog-actionbuttons/dialog-actionbuttons.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    DialogFullComponent,
    DialogContentComponent,
    DialogTitlebarComponent,
    DialogActionbuttonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogsModule,
    ButtonsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
