import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLaguagesComponent } from './programming-laguages.component';

describe('ProgrammingLaguagesComponent', () => {
  let component: ProgrammingLaguagesComponent;
  let fixture: ComponentFixture<ProgrammingLaguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingLaguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingLaguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
