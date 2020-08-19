import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'make-materia',
    loadChildren: () => import('./make-materia/make-materia.module').then( m => m.MakeMateriaPageModule)
  },
  {
    path: 'edit-materia/:id',
    loadChildren: () => import('./edit-materia/edit-materia.module').then( m => m.EditMateriaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
