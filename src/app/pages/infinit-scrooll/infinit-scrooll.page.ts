import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit-scrooll',
  templateUrl: './infinit-scrooll.page.html',
  styleUrls: ['./infinit-scrooll.page.scss'],
})
export class InfinitScroollPage implements OnInit {


  // @ViewChild(IonInfiniteScroll) infitniteScroll: IonInfiniteScroll;




  data: any[] = Array(20);


  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('Cargando sigueintes........');

    if(this.data.length > 50){
      event.target.complete();
      // this.infitniteScroll.desable =true;
      return;

    }

    setTimeout(() => {
        const nuevoArr = Array(20);
        this.data.push(...nuevoArr);
        event.target.complete();
    }, 1000);
  }

  
}
