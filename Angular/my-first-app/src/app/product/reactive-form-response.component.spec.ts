import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormResponseComponent } from './reactive-form-response.component';

describe('ReactiveFormResponseComponent', () => {
  let component: ReactiveFormResponseComponent;
  let fixture: ComponentFixture<ReactiveFormResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
