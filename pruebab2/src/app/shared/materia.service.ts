import { Injectable } from '@angular/core';
import { Materia } from '../shared/Materia';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  materiaListRef: AngularFireList<any>;
  materiaRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createMateria(apt: Materia) {
    return this.materiaListRef.push({
      name: apt.name,
      credits: apt.credits,
      hour: apt.hour,
      day: apt.day,
      note: apt.note
    })
  }

  // Get Single
  getMateria(id: string) {
    this.materiaRef = this.db.object('/materia/' + id);
    return this.materiaRef;
  }

  // Get List
  getMateriaList() {
    this.materiaListRef = this.db.list('/materia');
    return this.materiaListRef;
  }

  // Update
  updateMateria(id, apt: Materia) {
    return this.materiaRef.update({
      name: apt.name,
      credits: apt.credits,
      hour: apt.hour,
      day: apt.day,
      note: apt.note
    })
  }

  // Delete
  deleteMateria(id: string) {
    this.materiaRef = this.db.object('/materia/' + id);
    this.materiaRef.remove();
  }
}
