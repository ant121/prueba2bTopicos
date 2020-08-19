import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { MateriaService } from './../shared/materia.service';

@Component({
  selector: 'app-make-materia',
  templateUrl: './make-materia.page.html',
  styleUrls: ['./make-materia.page.scss'],
})
export class MakeMateriaPage implements OnInit {
  materiaForm: FormGroup;

  constructor(
    private aptService: MateriaService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.materiaForm = this.fb.group({
      name: [''],
      credits: [''],
      hour: [''],
      day: [''],
      note: ['']
    })
  }

  formSubmit() {
    if (!this.materiaForm.valid) {
      return false;
    } else {
      this.aptService.createMateria(this.materiaForm.value).then(res => {
        console.log(res)
        this.materiaForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }

}
