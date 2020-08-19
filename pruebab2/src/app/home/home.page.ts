import { Component } from '@angular/core';
import { Materia } from '../shared/Materia';
import { MateriaService } from './../shared/materia.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Materias = [];

  constructor(
    private aptService: MateriaService
  ) { }

  ngOnInit() {
    this.fetchMaterias();
    let MateriaRes = this.aptService.getMateriaList();
    MateriaRes.snapshotChanges().subscribe(res => {
      this.Materias = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Materias.push(a as Materia);
      })
    })
  }

  fetchMaterias() {
    this.aptService.getMateriaList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteMateria(id) {
    console.log(id)
    if (window.confirm('¿Seguro qué quieres eliminar esta materia?')) {
      this.aptService.deleteMateria(id)
    }
  }
}
