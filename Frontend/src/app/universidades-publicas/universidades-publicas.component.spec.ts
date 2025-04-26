import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadesPublicasComponent } from './universidades-publicas.component';

describe('UniversidadesPublicasComponent', () => {
  let component: UniversidadesPublicasComponent;
  let fixture: ComponentFixture<UniversidadesPublicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversidadesPublicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversidadesPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
