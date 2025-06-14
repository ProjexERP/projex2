import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectformNewComponent } from './selectform-new.component';

describe('SelectformNewComponent', () => {
  let component: SelectformNewComponent;
  let fixture: ComponentFixture<SelectformNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectformNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectformNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
