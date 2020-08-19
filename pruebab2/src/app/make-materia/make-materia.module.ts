import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeMateriaPageRoutingModule } from './make-materia-routing.module';

import { MakeMateriaPage } from './make-materia.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    IonicModule,
    MakeMateriaPageRoutingModule
  ],
  declarations: [MakeMateriaPage]
})
export class MakeMateriaPageModule {}
