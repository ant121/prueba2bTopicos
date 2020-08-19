import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeMateriaPage } from './make-materia.page';

const routes: Routes = [
  {
    path: '',
    component: MakeMateriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeMateriaPageRoutingModule {}
