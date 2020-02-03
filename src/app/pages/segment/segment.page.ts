import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

// @ViewChild(IonSegment) segment: IonSegment;

@ViewChild(IonSegment, { static: true }) segment: IonSegment;



superheroes: Observable<any>;

publisher = '';

  constructor( private dataservices: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superheroes =  this.dataservices.getHeroes();
  }
  
  segmentChanged( event ){
    const valorSegmento = event.detail.value;
      // console.log(valorSegmento);
      if( valorSegmento === 'todos')
      {
        this.publisher = '';
        return;
      }
      this.publisher = valorSegmento;

     
  }
}
