import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
// import { AdjustmodalComponent } from '../adjustmodal/adjustmodal.component';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [DatePipe]
})
export class HomePage {
  // showTable = false;


  componentProps = {
  index: 'nifty',
  expiryDate: '30/06/2023',
  strike: 10000,
  type: 'put',
  transactionNumber: 'buy',
  lots: 2,
  entryPrice: 45.5
  }
  public legs: any[] = [];
  sAdjustments = false;
  editMode = false;

  constructor(private modalController: ModalController, private router: Router) {
    console.log('HomePage constructor called');
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-modal',

      componentProps: {
        legs: this.legs,
      },
    });

    modal.onDidDismiss().then((data) => {
      if (data?.data) {
        this.legs.push(data.data);
      }
    });
    await modal.present();
  }
  showAdjustment() {
    this.sAdjustments = true;
    this.editMode = true;
  }
  
  eStrategy() {
    this.editMode = false;
    this.sAdjustments = false;
  }
  
}

