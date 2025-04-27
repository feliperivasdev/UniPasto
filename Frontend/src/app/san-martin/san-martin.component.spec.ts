import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanMartinComponent } from './san-martin.component';

describe('SanMartinComponent', () => {
  let component: SanMartinComponent;
  let fixture: ComponentFixture<SanMartinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanMartinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanMartinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
