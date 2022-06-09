import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();
  valueTransfer: number = 1;
  destiny: number = 2;

  transfer() {
    this.onTransfer.emit({
      valueTransfer: this.valueTransfer,
      destiny: this.destiny,
    });
  }
}
