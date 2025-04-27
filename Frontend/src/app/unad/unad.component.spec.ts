import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNADComponent } from './unad.component';

describe('UNADComponent', () => {
  let component: UNADComponent;
  let fixture: ComponentFixture<UNADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UNADComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UNADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
