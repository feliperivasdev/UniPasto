import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnimarComponent } from './unimar.component';

describe('UnimarComponent', () => {
  let component: UnimarComponent;
  let fixture: ComponentFixture<UnimarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnimarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnimarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
