import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinDialog } from './pin-dialog';

describe('PinDialog', () => {
  let component: PinDialog;
  let fixture: ComponentFixture<PinDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(PinDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
