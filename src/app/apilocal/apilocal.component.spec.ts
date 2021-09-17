import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApilocalComponent } from './apilocal.component';

describe('ApilocalComponent', () => {
  let component: ApilocalComponent;
  let fixture: ComponentFixture<ApilocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApilocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApilocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
