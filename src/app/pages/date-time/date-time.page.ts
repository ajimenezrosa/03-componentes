import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {


    fechaNaci: Date = new Date();
    customePickerOptions;
    customDate;

  constructor() { 
    this.customePickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( evento ) => {
          console.log('Clicked Save!');
          console.log(evento);
        }
        

      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  

  }

  ngOnInit() {
  }

  cambioFecha( event) {
    console.log('ionChange', event);
    console.log('Date', new Date( event.detail.value ));


  }




}
