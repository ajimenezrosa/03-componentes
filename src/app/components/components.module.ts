import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ HeaderComponent,
    MenuComponent ],
  imports: [
    CommonModule,IonicModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ]

})
export class ComponentsModule { }
