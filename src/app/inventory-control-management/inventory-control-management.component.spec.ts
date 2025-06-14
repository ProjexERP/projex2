import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryControlManagementComponent } from './inventory-control-management.component';

describe('InventoryControlManagementComponent', () => {
  let component: InventoryControlManagementComponent;
  let fixture: ComponentFixture<InventoryControlManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryControlManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryControlManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
