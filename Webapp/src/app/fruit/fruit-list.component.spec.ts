import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitListComponent } from './fruit-list.component';

describe('FruitListComponent', () => {
  let component: FruitListComponent;
  let fixture: ComponentFixture<FruitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
