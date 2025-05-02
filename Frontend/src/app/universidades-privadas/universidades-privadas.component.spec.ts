import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadesPrivadasComponent } from './universidades-privadas.component';

describe('UniversidadesPrivadasComponent', () => {
  let component: UniversidadesPrivadasComponent;
  let fixture: ComponentFixture<UniversidadesPrivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversidadesPrivadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversidadesPrivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
