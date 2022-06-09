import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();
  valueTransfer: number;
  destiny: number;

  transfer() {
    this.onTransfer.emit({
      valueTransfer: this.valueTransfer,
      destiny: this.destiny,
    });
    this.cleanFields();
  }

  cleanFields() {
    this.destiny = 0;
    this.valueTransfer = 0;
  }
}
