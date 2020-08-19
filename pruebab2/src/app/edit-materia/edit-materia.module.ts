import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMateriaPageRoutingModule } from './edit-materia-routing.module';

import { EditMateriaPage } from './edit-materia.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    IonicModule,
    EditMateriaPageRoutingModule
  ],
  declarations: [EditMateriaPage]
})
export class EditMateriaPageModule {}
