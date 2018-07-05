import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingSystemComponent } from './operating-system.component';

describe('OperatingSystemComponent', () => {
  let component: OperatingSystemComponent;
  let fixture: ComponentFixture<OperatingSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatingSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
