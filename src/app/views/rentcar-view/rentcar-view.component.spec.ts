import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentcarViewComponent } from './rentcar-view.component';

describe('RentcarViewComponent', () => {
  let component: RentcarViewComponent;
  let fixture: ComponentFixture<RentcarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentcarViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentcarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
