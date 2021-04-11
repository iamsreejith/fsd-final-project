import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDeleteComponent } from './guest-delete.component';

describe('GuestDeleteComponent', () => {
  let component: GuestDeleteComponent;
  let fixture: ComponentFixture<GuestDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
