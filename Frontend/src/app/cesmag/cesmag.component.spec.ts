import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesmagComponent } from './cesmag.component';

describe('CesmagComponent', () => {
  let component: CesmagComponent;
  let fixture: ComponentFixture<CesmagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CesmagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CesmagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
