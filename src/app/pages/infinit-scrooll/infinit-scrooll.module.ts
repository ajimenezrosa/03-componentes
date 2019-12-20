import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitScroollPageRoutingModule } from './infinit-scrooll-routing.module';

import { InfinitScroollPage } from './infinit-scrooll.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitScroollPageRoutingModule,
    ComponentsModule

  ],
  declarations: [InfinitScroollPage]
})
export class InfinitScroollPageModule {}
