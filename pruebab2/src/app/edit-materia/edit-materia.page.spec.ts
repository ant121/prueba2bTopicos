import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMateriaPage } from './edit-materia.page';

describe('EditMateriaPage', () => {
  let component: EditMateriaPage;
  let fixture: ComponentFixture<EditMateriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMateriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
