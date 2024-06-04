import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnerCardComponent } from './car-owner-card.component';

describe('CarOwnerCardComponent', () => {
  let component: CarOwnerCardComponent;
  let fixture: ComponentFixture<CarOwnerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarOwnerCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarOwnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
