import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';

@NgModule({
  declarations: [AppComponent, NewTransferComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
