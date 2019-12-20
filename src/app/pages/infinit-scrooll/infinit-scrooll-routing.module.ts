import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitScroollPage } from './infinit-scrooll.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitScroollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitScroollPageRoutingModule {}
