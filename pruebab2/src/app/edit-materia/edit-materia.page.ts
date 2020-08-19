import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MateriaService } from './../shared/materia.service';

@Component({
  selector: 'app-edit-materia',
  templateUrl: './edit-materia.page.html',
  styleUrls: ['./edit-materia.page.scss'],
})
export class EditMateriaPage implements OnInit {
  updateMateriaForm: FormGroup;
  id: any;

  constructor(
    private aptService: MateriaService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getMateria(this.id).valueChanges().subscribe(res => {
      this.updateMateriaForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateMateriaForm = this.fb.group({
      name: [''],
      credits: [''],
      hour: [''],
      day: [''],
      note: ['']
    })
    console.log(this.updateMateriaForm.value)
  }

  updateForm() {
    this.aptService.updateMateria(this.id, this.updateMateriaForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}
