import { Component, Output, EventEmitter,  } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  
  legs: any[] = [];

  index!: 'nifty' | 'banknifty';
  expiryDate!: Date;
  strike!: number;
  type!: 'put' | 'call';
  transactionNumber!: 'sell' | 'buy';
  lots!: number;
  entryPrice!: number;

  // @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmitted = new EventEmitter();

  constructor(private modalController: ModalController){}

  dismissModal() {
    this.modalController.dismiss();
  }


  addLeg(){

      const formData={
      index: this.index,
      expiryDate: this.expiryDate,
      strike: this.strike,
      type: this.type,
      transactionNumber: this.transactionNumber,
      lots: this.lots,
      entryPrice: this.entryPrice,
      };
      
    console.log(formData);
    
    this.legs.push(formData);
    this.formSubmitted.emit(formData);
    this.dismissModal();
    
  }
}
