import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMateriaPage } from './edit-materia.page';

const routes: Routes = [
  {
    path: '',
    component: EditMateriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMateriaPageRoutingModule {}
