import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  // @ViewChild('lista') lista: IonList;
  //  @ViewChild('lista') lista: IonList;
  // @ViewChild("lista") lista: IonList;



              usuarios: Observable<any>;

  constructor(private dataService: DataService,
            private toastCtrl: ToastController) { }

  ngOnInit() {


    this.usuarios = this.dataService.getUsers();
    // this.dataService.getUsers()
    // .subscribe(console.log);

  }

  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user ){
    this.presentToast('Guardo en Favorite');
    // console.log('favorite', user);
    // this.lista.closeSlidingItems();
  }

  share( user ){

      this.presentToast('Compartido!!');
      // // this.lista.closeSlidingItems();
  }

  borrar( user ){
    this.presentToast('Borrado!!');
      // console.log('borrar', user);
      // this.lista.closeSlidingItems();
  }


}
