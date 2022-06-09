import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  valueTransfer: number = 1;
  destiny: number = 2;

  transfer() {
    console.log(this.valueTransfer);
    console.log(this.destiny);
  }
}
