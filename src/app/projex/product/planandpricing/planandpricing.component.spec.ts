import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanandpricingComponent } from './planandpricing.component';

describe('PlanandpricingComponent', () => {
  let component: PlanandpricingComponent;
  let fixture: ComponentFixture<PlanandpricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanandpricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanandpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
