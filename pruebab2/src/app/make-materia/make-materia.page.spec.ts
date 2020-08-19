import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeMateriaPage } from './make-materia.page';

describe('MakeMateriaPage', () => {
  let component: MakeMateriaPage;
  let fixture: ComponentFixture<MakeMateriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeMateriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeMateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
