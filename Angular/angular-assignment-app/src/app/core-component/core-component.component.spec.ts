import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComponentComponent } from './core-component.component';

describe('CoreComponentComponent', () => {
  let component: CoreComponentComponent;
  let fixture: ComponentFixture<CoreComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
