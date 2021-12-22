import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFirstComponent } from './display-first.component';

describe('DisplayFirstComponent', () => {
  let component: DisplayFirstComponent;
  let fixture: ComponentFixture<DisplayFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
