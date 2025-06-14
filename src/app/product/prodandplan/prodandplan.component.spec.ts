import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdandplanComponent } from './prodandplan.component';

describe('ProdandplanComponent', () => {
  let component: ProdandplanComponent;
  let fixture: ComponentFixture<ProdandplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdandplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdandplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
