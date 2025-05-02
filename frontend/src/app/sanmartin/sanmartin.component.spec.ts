import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanmartinComponent } from './sanmartin.component';

describe('SanmartinComponent', () => {
  let component: SanmartinComponent;
  let fixture: ComponentFixture<SanmartinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanmartinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanmartinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
