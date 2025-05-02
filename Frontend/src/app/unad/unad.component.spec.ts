import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnadComponent } from './unad.component';

describe('UnadComponent', () => {
  let component: UnadComponent;
  let fixture: ComponentFixture<UnadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
