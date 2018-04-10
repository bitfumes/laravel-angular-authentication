import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseResetComponent } from './response-reset.component';

describe('ResponseResetComponent', () => {
  let component: ResponseResetComponent;
  let fixture: ComponentFixture<ResponseResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
