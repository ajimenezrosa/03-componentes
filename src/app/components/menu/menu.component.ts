import { Componente } from './../../pages/interfaces/interfaces';
// import { Componente } from './../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


componentes: Observable<Componente[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.componentes = this.dataService.getMenuOpts();

  }

}
