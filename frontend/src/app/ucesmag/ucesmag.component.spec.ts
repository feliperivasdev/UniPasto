import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcesmagComponent } from './ucesmag.component';

describe('UcesmagComponent', () => {
  let component: UcesmagComponent;
  let fixture: ComponentFixture<UcesmagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UcesmagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcesmagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
