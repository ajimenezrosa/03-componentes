import { Componente } from './../pages/interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


getUsers() {
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}

getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
}


}
