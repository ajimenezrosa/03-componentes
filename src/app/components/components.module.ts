import { ComponentsModule } from './components.module';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ HeaderComponent,
    MenuComponent ],
  imports: [
    CommonModule,IonicModule,RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ]

})
export class ComponentsModule { }
