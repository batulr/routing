import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySecondComponent } from './display-second.component';

describe('DisplaySecondComponent', () => {
  let component: DisplaySecondComponent;
  let fixture: ComponentFixture<DisplaySecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
