import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycarsViewComponent } from './mycars-view.component';

describe('MycarsViewComponent', () => {
  let component: MycarsViewComponent;
  let fixture: ComponentFixture<MycarsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MycarsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycarsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
