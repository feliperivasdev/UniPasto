import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdenarComponent } from './udenar.component';

describe('UdenarComponent', () => {
  let component: UdenarComponent;
  let fixture: ComponentFixture<UdenarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdenarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdenarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
