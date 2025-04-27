import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarianaComponent } from './mariana.component';

describe('MarianaComponent', () => {
  let component: MarianaComponent;
  let fixture: ComponentFixture<MarianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarianaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
