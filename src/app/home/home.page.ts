import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'qrcode-plugin';

const { QRCodePlugin } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
contacts = [];

  constructor() {}

  async scanMyCode() {    
    this.contacts = (await QRCodePlugin.scanCode('somefilter')).results;
    console.log('my contacts: ', this.contacts);    
  }

}
