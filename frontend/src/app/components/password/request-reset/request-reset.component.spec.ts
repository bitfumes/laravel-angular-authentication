import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResetComponent } from './request-reset.component';

describe('RequestResetComponent', () => {
  let component: RequestResetComponent;
  let fixture: ComponentFixture<RequestResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
